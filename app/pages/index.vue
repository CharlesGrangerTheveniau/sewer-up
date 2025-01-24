<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mx-auto p-8">
    <!-- Controls Section -->
    <div class="mb-8 flex flex-col items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-sm">
      <h1 class="text-2xl font-bold text-gray-800 mb-4">Générateur de mesures</h1>
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

    <!-- Measurements Display -->
    <div v-if="measures" class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Corsage Section -->
      <div class="bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">Corsage</h2>
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

      <!-- Pantalon Section -->
      <div class="bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">Pantalon</h2>
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
            label="Largueur bas de pantalon" 
            :value="measures.pantalon.longueur_bas_pantalon"
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
            label="hauteur du bassin" 
            :value="measures.pantalon.hauteur_du_bassin"
          />
          <MeasurementItem 
            label="Contour du bassin" 
            :value="measures.pantalon.contour_du_bassin"
          />
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

import { potentialSizes } from "~/services/types"
import { generateMeasurements } from "~/services/standardMeasurements"
import MeasurementItem from "~/components/MesurementItem.vue"

  const gender = ref<Gender>(null)
  const size = ref<Size>(null)
  const measures = ref<Cotes | null>(null)
  const formattedSizes = computed(() => {
    return potentialSizes.map(size => ({
      label: size < 24 ? `${size} mois` : `${size / 12} ans`,
      value: size
    }))
  })

  const formattedGender = computed(() => {
    return [
      { label: 'Garçon', value: 'male' },
      { label: 'Fille', value: 'female' }
    ]
  })



  const provideMeasurements = () => {
    const definedGender = size.value < 24 ? "baby" : gender.value
    measures.value = generateMeasurements(size.value, definedGender)
    console.log(measures.value)
  }

  const printMeasurements = () => {
    window.print();
  };

  const exportAsPDF = () => {
    // Implementation for PDF export
  };

  const exportAsImage = () => {
    // Implementation for image export
  };

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
</style>
