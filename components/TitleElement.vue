<template>
  <div
    v-tooltip="tooltip"
    class="inline-flex flex-wrap items-center justify-center gap-4"
  >
    <div v-if="icon || hasImage" class="icon">
      <Avatar v-if="hasImage" :image="image" />
      <Icon v-else :name="icon" size="30" />
    </div>

    <span v-if="label" class="whitespace-nowrap grow" v-html="label"></span>
  </div>
</template>

<script setup lang="ts">
import type { TTooltip } from '~/types/tooltip'

type Props = {
  label?: string | number
  hasImage?: boolean
  image?: string
  tooltip?: TTooltip
  icon?: string
}
withDefaults(defineProps<Props>(), {
  label: '',
  hasImage: false,
  image: '',
  tooltip: () => ({
    content: '',
  }),
  icon: '',
})
</script>
