<template>
  <div :class="['flex flex-row items-center justify-between rounded', variant]">
    <TitleElement class="px-2 py-1" :label="label" :icon="icon" />
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
type Props = {
  label?: string | number
  variant?: string
  icon?: string
}
withDefaults(defineProps<Props>(), {
  label: '',
  variant: '',
  icon: '',
})
</script>
