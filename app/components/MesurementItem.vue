<!-- components/MeasurementItem.vue -->
<template>
    <div class="measurement-item p-2 hover:bg-gray-50 rounded transition-colors">
      <div class="flex items-center justify-between">
        <span class="font-medium text-[var(--ui-text)]">{{ label }}</span>
        <span class="text-[var(--ui-text)]">{{ value }}cm</span>
      </div>
      <div v-if="calculations" class="mt-1 pl-4 text-sm grid gap-1">
        <div v-for="(val, key) in calculations" :key="key" class="flex justify-between text-[var(--ui-text-dimmed)]">
          <span>{{ key }}</span>
          <span>{{ val }}cm</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  interface Props {
    label: string;
    value: number;
    calculations?: Record<string, number>;
  }
  
  const props = defineProps<Props>();

  </script>