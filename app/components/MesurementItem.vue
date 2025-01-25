<!-- components/MeasurementItem.vue -->
<template>
    <div v-if="!details">
        <div class="measurement-item p-2">
            <div class="flex items-center justify-between">
                <span class="font-medium text-[var(--ui-text)]">{{ label }}</span>
                <div class="flex items-center gap-2">
                    
                    <span class="text-[var(--ui-text)]">{{ value }}cm</span>
                </div>
            </div>
            <div v-if="calculations" class="mt-1 pl-4 text-sm grid gap-1">
                <div v-for="(val, key) in calculations" :key="key" class="flex justify-between text-[var(--ui-text-dimmed)]">
                <span>{{ key }}</span>
                <span>{{ val }}cm</span>
                </div>
            </div>
        </div>
    </div>

    <UCollapsible v-else class="hover:bg-[var(--ui-bg-accented)] rounded transition-colors">
        <div class="measurement-item p-2 cursor-pointer">
            <div class="flex items-center justify-between">
                <span class="font-medium text-[var(--ui-text)]">{{ label }}</span>
                <div class="flex items-center gap-2">
                    <UIcon name="i-heroicons:question-mark-circle" class="size-5 bg-[var(--ui-primary)]" />
                    <span class="text-[var(--ui-text)]">{{ value }}cm</span>
                </div>
            </div>
            <div v-if="calculations" class="mt-1 pl-4 text-sm grid gap-1">
                <div v-for="(val, key) in calculations" :key="key" class="flex justify-between text-[var(--ui-text-dimmed)]">
                <span>{{ key }}</span>
                <span>{{ val }}cm</span>
                </div>
            </div>
        </div>

        <template #content>
            <div class="p-2">
                <UAlert
                    color="primary"
                    variant="soft"
                    :title="details"
                    icon="i-lucide-info"
                />
            </div>
        </template>
    </UCollapsible>
  </template>
  
  <script setup lang="ts">
  interface Props {
    label: string;
    value: number;
    calculations?: Record<string, number>;
    details?: string;
  }
  
  const props = defineProps<Props>();

  </script>