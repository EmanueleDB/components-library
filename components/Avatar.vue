<template>
  <div
    v-tooltip="tooltip"
    :class="[
      'flex bg-white bg-center bg-no-repeat bg-cover items-center justify-center',
      squared ? 'rounded' : 'rounded-full',
      height,
      width,
      { 'cursor-pointer': tooltip.content },
    ]"
    :style="[
      {
        backgroundImage: 'url(' + image + ')',
      },
    ]"
  ></div>
</template>

<script setup lang="ts">
import type { TTooltip } from '~/types/tooltip'

type Props = {
  image?: string
  squared?: boolean
  tooltip?: TTooltip
  height?: string
  width?: string
}
withDefaults(defineProps<Props>(), {
  image: '',
  squared: false,
  tooltip: () => ({
    content: '',
  }),
  height: 'h-20',
  width: 'w-20',
})
</script>
