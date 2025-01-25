<template ref="document">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mx-auto p-8">
    <!-- Controls Section -->
    <div class="mb-8 flex flex-col items-center gap-4 p-4 rounded-lg shadow-sm">
      <h1 class="text-2xl font-bold text-gray-800 mb-4 gradient-text-primary">Générateur de mesures</h1>
      <div class="flex flex-wrap gap-4 justify-center">
        <USelect 
          v-model="size" 
          :items="formattedSizes" 
          size="lg"
          placeholder="Sélectionner la taille"
          class="min-w-[200px]"
        />
        <USelect 
          v-if="size > 18"
          v-model="gender" 
          :items="formattedGender" 
          size="lg"
          placeholder="Sélectionner le sexe"
          class="min-w-[200px]"
        />
        <UButton 
          label="Générer" 
          :disabled="!size || (size >= 24 && !gender)"
          size="lg"
          icon="i-heroicons-sparkles"
          @click="provideMeasurements"
        />
      </div>
      
    </div>

    <div v-if="measures" class="flex items-center justify-end w-full mb-4">
      <UButton 
        :loading="exportInProgress"
        label="Exporter en PDF"
        size="lg"
        icon="i-heroicons-document-arrow-down"
        @click="exportAsPDF"
      />
    </div>

    <!-- Measurements Display -->
    <div v-if="measures" ref="measurementsContainer" class="grid grid-cols-1 md:grid-cols-2 gap-8">
      

      <!-- Pantalon Section -->

      <div class="flex flex-col h-full gap-8">
        <div class="bg-[var(--ui-bg-elevated)] p-6 rounded-lg shadow-md">
          <UCollapsible @update:open="rotateIcon" v-model:open="baseCalculationsOpen">
            <div class="flex flex-row justify-between items-centerw-full">
              <h2 class="text-xl font-semibold text-[var(--ui-text)]">Bases de calculs</h2>
              <UIcon
                v-if="!hideForPrint"
                name="i-heroicons-chevron-down" 
                size="24" 
                class="transition-transform duration-200"
                :class="{ 'rotate-180': baseCalculationsOpen }"
              />
            </div>
            <template #content>

              <div class="flex flex-col gap-4 mt-4">
                <UAlert
                  v-if="!hideForPrint"
                  color="info"
                  variant="soft"
                  title="Une mesure personalisée ?"
                  description="Vous pouvez modifier les bases de calculs dans la configuration de l'application."
                  icon="i-heroicons:information-circle"
                />
                <div 
                  v-for="customizable in customizables" 
                  :key="customizable.value" 
                  class="flex md:flex-row flex-col stretch justify-between gap-2">
                  <span class="font-medium text-[var(--ui-text)]">{{ customizable.label }}</span>

                  

                  <UInput 
                    v-if="customBase" 
                    v-model="customBase[customizable.value]" 
                    type="number" 
                    :ui="{
                      base: 'pe-10',
                      trailing: 'ml-1 pe-1'
                    }"
                    @change="provideMeasurements">
                    <template #trailing>
                      <UBadge color="neutral" variant="soft">cm</UBadge>
                    </template>
                  </UInput>

                  <div v-else class="w-[30px]">
                    <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                      <circle 
                        class="spin2" cx="400" cy="400" fill="none"
                        r="200" stroke-width="50" stroke="var(--ui-color-primary-500)"
                        stroke-dasharray="700 1400"
                        stroke-linecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </template>
          </UCollapsible>
          
          
          
        </div>
        <div class="bg-[var(--ui-bg-elevated)] p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4 text-[var(--ui-text)] border-b pb-2">Pantalon</h2>
          <div class="grid gap-3">
            <MeasurementItem 
              label="Tour de taille" 
              :value="measures.pantalon.tour_de_taille.total"
              :calculations="{
                '1/4 + 1cm': measures.pantalon.tour_de_taille.quart_plus_un,
                '1/8': measures.pantalon.tour_de_taille.huitieme,
                '1/16': measures.pantalon.tour_de_taille.seizieme
              }"
            />
            <MeasurementItem 
              label="Hauteur taille-genou" 
              :value="measures.pantalon.hauteur_taille_genou"
            />
            <MeasurementItem 
              label="Hauteur taille-sol" 
              :value="measures.pantalon.hauteur_taille_sol"
            />
            <MeasurementItem 
              label="Hauteur intérieur jambe" 
              :value="measures.pantalon.hauteur_interieur_jambe"
            />
            <MeasurementItem 
              label="Montant" 
              :value="measures.pantalon.montant.total"
            />
            <MeasurementItem 
              label="Montant + 1cm" 
              :value="measures.pantalon.montant.plus_un"
            />
            <MeasurementItem 
              label="Largeur bas de pantalon" 
              :value="measures.pantalon.largeur_bas_pantalon"
            />
            <MeasurementItem 
              label="Passage du pied" 
              :value="measures.pantalon.passage_du_pied"
            />
            <MeasurementItem 
              label="Longueur du pied" 
              :value="measures.pantalon.longueur_du_pied"
            />
            <MeasurementItem 
              label="Hauteur du bassin" 
              :value="measures.pantalon.hauteur_du_bassin"
            />
            <MeasurementItem 
              label="Contour du bassin" 
              :value="measures.pantalon.contour_bassin"
              />
          </div>
        </div>
      </div>
      

      <!-- Corsage Section -->
      <div class="bg-[var(--ui-bg-elevated)] p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4 text-[var(--ui-text)] border-b pb-2">Corsage</h2>
        <div class="grid gap-3">
          <MeasurementItem label="Stature" :value="measures.corsage.stature" />
          <MeasurementItem 
            label="Tour de poitrine"
            
            :value="measures.corsage.tour_de_poitrine.total"
            :calculations="{
              '1/2': measures.corsage.tour_de_poitrine.demi,
              '1/4': measures.corsage.tour_de_poitrine.quart
            }"
          />
          <MeasurementItem 
            label="Tour de taille" 
            :value="measures.corsage.tour_de_taille.total"
            :calculations="{
              '1/2': measures.corsage.tour_de_taille.demi,
              '1/4': measures.corsage.tour_de_taille.quart
            }"
          />
          <MeasurementItem 
            label="Longueur taille dos" 
            :value="measures.corsage.longueur_taille_dos.total"
            :calculations="{
              '1/2': measures.corsage.longueur_taille_dos.demi,
              '+1': measures.corsage.longueur_taille_dos.demi_plus_un
            }"
          />
          <MeasurementItem 
            label="Longueur taille devant" 
            :value="measures.corsage.longueur_taille_devant.total"
            :calculations="{
              '-1cm': measures.corsage.longueur_taille_devant.moins_un
            }"
          />
          <MeasurementItem 
            label="Encolure" 
            :value="measures.corsage.encolure.total"
            :calculations="{
              '1/6': measures.corsage.encolure.sixieme,
              '+0.75': measures.corsage.encolure.sixieme_plus_075,
              '+0.50': measures.corsage.encolure.sixieme_plus_050
            }"
          />
          <MeasurementItem label="Longueur d'épaule" :value="measures.corsage.longueur_epaule" />
          <MeasurementItem 
            label="Carrure devant" 
            :value="measures.corsage.carrure_devant.total"
            :calculations="{
              '1/2': measures.corsage.carrure_devant.demi
            }"
          />
          <MeasurementItem 
            label="Carrure dos" 
            :value="measures.corsage.carrure_dos.total"
            :calculations="{
              '1/2': measures.corsage.carrure_dos.demi
            }"
          />
          <MeasurementItem label="Longueur épaule coude" :value="measures.corsage.longueur_epaule_coude" />
          <MeasurementItem label="Longueur épaule poignet" :value="measures.corsage.longueur_epaule_poignet" />
          <MeasurementItem label="Contour bras" :value="measures.corsage.contour_bras" />
          <MeasurementItem label="Passage de la main" :value="measures.corsage.passage_de_la_main" />
          <MeasurementItem label="Contour tête" :value="measures.corsage.contour_tete" />
          <MeasurementItem label="Hauteur tête" :value="measures.corsage.hauteur_tete" />
        </div>
      </div>
    </div>

    <!-- <div v-if="error" class="error-state">
      <p class="text-red-500">{{ error }}</p>
      <UButton @click="retry" label="Réessayer" />
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { potentialSizes } from "~/services/types"
import { generateMeasurements, BASE_MEASUREMENTS } from "~/services/standardMeasurements"
import MeasurementItem from "~/components/MesurementItem.vue"

  const hideForPrint = ref(false)

  const gender = ref<Gender>(null)
  const size = ref<Size>(null)
  const measures = ref<Cotes | null>(null)
  const measurementsContainer = ref(null)
  const exportInProgress = ref(false)
  const formattedSizes = computed(() => {
    return potentialSizes.map(size => ({
      label: size < 24 ? `${size} mois` : `${size / 12} ans`,
      value: size
    }))
  })

  const baseCalculationsOpen = ref(false)

  const rotateIcon = (open: boolean) => {
    baseCalculationsOpen.value = open
  }

  const customizables = [
    {
      label: "Stature",
      value: "stature",
    },
    {
      label: "Tour de poitrine",
      value: "tour_de_poitrine",
    },
    {
      label: "Tour de taille",
      value: "tour_de_taille",
    },
    {
      label: "Tour des hanches",
      value: "tour_des_hanches",
    },
    {
      label: "Longueur côte pantalon",
      value: "long_cote_pantalon",
    },
  ]

  const customBase = ref<BaseTableData | null>(null)

  watch(size, () => {
    console.log('size changed', size.value)
    console.log('gender', gender.value)
    if (size.value > 18 && gender.value) {
      customBase.value = BASE_MEASUREMENTS[gender.value || 'baby'][size.value]
    } else {
      gender.value = null
      customBase.value = BASE_MEASUREMENTS['baby'][size.value]
    }
    
    console.log('customBase', customBase.value)
  })

  watch(gender, () => {
    console.log('gender changed', gender.value)
    customBase.value = BASE_MEASUREMENTS[gender.value ?? 'baby'][size.value]
    console.log('customBase', customBase.value)
  })

  

  const formattedGender = computed(() => {
    return [
      { label: 'Garçon', value: 'male' },
      { label: 'Fille', value: 'female' }
    ]
  })



  const provideMeasurements = () => {
    const definedGender = size.value < 24 ? "baby" : gender.value
    measures.value = generateMeasurements(size.value, definedGender, customBase.value)
    console.log(measures.value)


  }

  const exportAsPDF = async () => {
    exportInProgress.value = true
    hideForPrint.value = true
    baseCalculationsOpen.value = true
    
    if (import.meta.server) return
    
    // Wait for collapsible animation to complete
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const html2pdf = (await import('html2pdf.js')).default
    
    const element = measurementsContainer.value
    if (!element) return

    // Create a clone of the element for PDF generation
    const clone = element.cloneNode(true)
    clone.style.backgroundColor = 'white'
    clone.style.padding = '20px'
    clone.style.height = 'auto'
    clone.style.minHeight = 'fit-content'
    clone.style.overflow = 'visible'
    
    // Ensure all collapsible content is visible
    clone.querySelectorAll('[class*="collapsible"]').forEach(el => {
      el.style.height = 'auto'
      el.style.overflow = 'visible'
      el.style.opacity = '1'
      el.style.visibility = 'visible'
    })
    
    // Replace CSS variables with actual colors
    clone.querySelectorAll('[class*="bg-[var(--ui-"]').forEach(el => {
      el.style.backgroundColor = 'white'
      el.style.border = '1px solid #e5e7eb'
      el.style.height = 'auto'
      el.style.minHeight = 'fit-content'
    })
    clone.querySelectorAll('[class*="text-[var(--ui-"]').forEach(el => {
      el.style.color = '#1f2937'
    })
    
    const opt = {
      margin: [15, 10],
      filename: `mesures-${size.value}${gender.value ? `-${gender.value}` : ''}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 1,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
        removeContainer: true,
        height: element.scrollHeight,
        windowHeight: element.scrollHeight
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait',
        compress: true
      }
    }
    
    // Create a temporary container with proper sizing
    const container = document.createElement('div')
    container.style.position = 'absolute'
    container.style.left = '-9999px'
    container.style.top = '0'
    container.style.width = element.offsetWidth + 'px'
    container.style.height = 'auto'
    container.style.minHeight = 'fit-content'
    container.appendChild(clone)
    document.body.appendChild(container)
    
    try {
      await html2pdf().set(opt).from(clone).save()
    } finally {
      // Clean up
      document.body.removeChild(container)
      hideForPrint.value = false
      baseCalculationsOpen.value = false
      exportInProgress.value = false
    }
  }
 

</script>

<style scoped>

@media print {
  .no-print {
    display: none;
  }
  .print-only {
    display: block;
  }
}

/* Add responsive breakpoints */
@screen sm {
  .measurement-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@screen lg {
  .measurement-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes spin2 {
  0% {
    stroke-dasharray: 1, 800;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 400, 400;
    stroke-dashoffset: -200px;
  }
  100% {
    stroke-dasharray: 800, 1;
    stroke-dashoffset: -800px;
  }
}

.spin2 {
  transform-origin: center;
  animation: spin2 1.5s ease-in-out infinite,
    spin 2s linear infinite;
  animation-direction: alternate;
}
</style>
