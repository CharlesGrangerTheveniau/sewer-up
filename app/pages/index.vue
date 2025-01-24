<template>
  <div class="flex flex-col items-center justify-center gap-4 h-screen">

    <div class="flex flex-col gap-4 items-center" ref="wrapperEl">
      <USelect 
        v-model="size" 
        :items="formattedSizes" 
        size="lg"
        placeholder="Sélectionner la taille"
        class="min-w-[200px]"
      />
      <div v-show="size > 18">
        <USelect 
          v-model="gender" 
          :items="formattedGender" 
          size="lg"
          placeholder="Sélectionner le sexe"
          class="min-w-[200px]"
        />
      </div>
      <UButton 
          @click="provideMeasurements" 
          label="Générer"
          :disabled="!size || (size >= 24 && !gender)"
          size="lg"
        />
    </div>

    <div v-if="measures" class="flex flex-row gap-8 items-center justify-between w-[400px]">
      <div class="flex flex-col gap-4">
        <div class="flex flex-row gap-2">
          <span class="font-bold">Stature</span>
          <span>{{ measures.corsage.stature }}</span>
        </div>
        <div class="flex flex-row gap-2">
          <span class="font-bold">Tour de poitrine</span>
          <span>{{ measures.corsage.tour_de_poitrine.total }}</span>
          <span class="font-bold">1/2</span>
          <span>{{ measures.corsage.tour_de_poitrine.demi }}</span>
          <span class="font-bold">1/4</span>
          <span>{{ measures.corsage.tour_de_poitrine.quart }}</span>
        </div>
        <div class="flex flex-row gap-2">
          <span class="font-bold">Tour de taille</span>
          <span>{{ measures.corsage.tour_de_taille.total }}</span>
          <span class="font-bold">1/2</span>
          <span>{{ measures.corsage.tour_de_taille.demi }}</span>
          <span class="font-bold">1/4</span>
          <span>{{ measures.corsage.tour_de_taille.quart }}</span>
        </div>
        <div class="flex flex-row gap-2">
          <span class="font-bold">Longueur taille dos</span>
          <span>{{ measures.corsage.longueur_taille_dos.total }}</span>
          <span class="font-bold">1/2</span>
          <span>{{ measures.corsage.longueur_taille_dos.demi }}</span>
          <span class="font-bold">+1</span>
          <span>{{ measures.corsage.longueur_taille_dos.demi_plus_un }}</span>
        </div>
        <div class="flex flex-row gap-2">
          <span class="font-bold">Longueur taille devant</span>
          <span>{{ measures.corsage.longueur_taille_devant.total }}</span>
          <span class="font-bold"> -1cm </span>
          <span>{{ measures.corsage.longueur_taille_devant.moins_un }}</span>
        </div>
        <div class="flex flex-row gap-2 items-center">
          <span class="font-bold">Encolure</span>
          <span>{{ measures.corsage.encolure.total }}</span>
          <span class="font-bold"> 1/6 </span>
          <span>{{ measures.corsage.encolure.sixieme }}</span>
          <div class="flex flex-col gap-1">
            <div>
              <span class="font-bold"> +0.75 </span>
              <span>{{ measures.corsage.encolure.sixieme_plus_075 }}</span>
            </div>
            <div>
              <span class="font-bold"> +0.50 </span>
              <span>{{ measures.corsage.encolure.sixieme_plus_050 }}</span>
            </div>
          </div>
        </div>
        <div class="flex flex-row gap-2">
          <span class="font-bold">Longueur d'épaule</span>
          <span>{{ measures.corsage.longueur_epaule }}</span>
        </div>
        <div class="flex flex-row gap-2">
          <span class="font-bold">Carrure devant</span>
          <span>{{ measures.corsage.carrure_devant.total }}</span>
          <span>1/2</span>
          <span>{{ measures.corsage.carrure_devant.demi }}</span>
        </div>
        <div class="flex flex-row gap-2">
          <span class="font-bold">Carrure dos</span>
          <span>{{ measures.corsage.carrure_dos.total }}</span>
          <span>1/2</span>
          <span>{{ measures.corsage.carrure_dos.demi }}</span>
        </div>
        <div class="flex flex-row gap-2">
          <span class="font-bold">Longueur épaule coude</span>
          <span>{{ measures.corsage.longueur_epaule_coude }}</span>
        </div>
        <div class="flex flex-row gap-2">
          <span class="font-bold">Longueur épaule poignet</span>
          <span>{{ measures.corsage.longueur_epaule_poignet }}</span>
        </div>
        <div class="flex flex-row gap-2">
          <span class="font-bold">Contour bras</span>
          <span>{{ measures.corsage.contour_bras }}</span>
        </div>
        <div class="flex flex-row gap-2">
          <span class="font-bold">Passage de la main</span>
          <span>{{ measures.corsage.passage_de_la_main }}</span>
        </div>
        <div class="flex flex-row gap-2">
          <span class="font-bold">Contour tête</span>
          <span>{{ measures.corsage.contour_tete }}</span>
        </div>
        <div class="flex flex-row gap-2">
          <span class="font-bold">Hauteur tête</span>
          <span>{{ measures.corsage.hauteur_tete }}</span>
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <div class="flex flex-row gap-2">
          <span class="font-bold">Tour de taille</span>
          <span>{{ measures.pantalon.tour_de_taille.total }}</span>
        </div>
        <div class="flex flex-row gap-2">
          <span class="font-bold">1/4 taille + 1cm </span>
          <span>{{ measures.pantalon.tour_de_taille.quart_plus_un }}</span>
        </div>
        <div class="flex flex-row gap-2">
          <span class="font-bold">1/8 de taille</span>
          <span>{{ measures.pantalon.tour_de_taille.huitieme }}</span>
        </div>
        <div class="flex flex-row gap-2">
          <span class="font-bold">1/16 de taille</span>
          <span>{{ measures.pantalon.tour_de_taille.seizieme }}</span>
        </div>
        <div class="flex flex-row gap-2">
          <span class="font-bold">Hauteur taille-genou</span>
          <span>{{ measures.pantalon.hauteur_taille_genou }}</span>
        </div>
        <div class="flex flex-row gap-2">
          <span class="font-bold">Hauteur taille-sol</span>
          <span>{{ measures.pantalon.hauteur_taille_sol }}</span>
        </div>
        <div class="flex flex-row gap-2">
          <span class="font-bold">Hauteur intérieur jambe</span>
          <span>{{ measures.pantalon.hauteur_interieur_jambe }}</span>
        </div>
        <div class="flex flex-row gap-2">
          <span class="font-bold">Montant</span>
          <span>{{ measures.pantalon.montant.total }}</span>
        </div>
        <div class="flex flex-row gap-2">
          <span class="font-bold">Montant + 1cm</span>
          <span>{{ measures.pantalon.montant.plus_un }}</span>
        </div>
        <div class="flex flex-row gap-2">
          <span class="font-bold">Largueur bas de pantalon</span>
          <span>{{ measures.pantalon.longueur_bas_pantalon }}</span>
        </div>
        <div class="flex flex-row gap-2">
          <span class="font-bold">Passage du pied</span>
          <span>{{ measures.pantalon.passage_du_pied }}</span>
        </div>
        <div class="flex flex-row gap-2">
          <span class="font-bold">Longueur du pied</span>
          <span>{{ measures.pantalon.longueur_du_pied }}</span>
        </div>
        <div class="flex flex-row gap-2">
          <span class="font-bold">hauteur du bassin</span>
          <span>{{ measures.pantalon.hauteur_du_bassin }}</span>
        </div>
        <div class="flex flex-row gap-2">
          <span class="font-bold">Contour du bassin</span>
          <span>{{ measures.pantalon.contour_du_bassin }}</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">

import { potentialSizes } from "~/services/types"
import { generateMeasurements } from "~/services/standardMeasurements"

  const [wrapperEl] = useAutoAnimate()

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
    measures.value = generateMeasurements(size.value, formattedGender.value.value ?? "baby")
    console.log(measures.value)
  }


</script>
