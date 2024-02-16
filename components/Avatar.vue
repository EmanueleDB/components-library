<template>
  <div
    v-tooltip="tooltip"
    :class="[
      'flex bg-white bg-center bg-no-repeat bg-cover items-center justify-center',
      squared ? 'rounded' : 'rounded-full',
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
}
withDefaults(defineProps<Props>(), {
  image: '',
  squared: false,
  tooltip: () => ({
    content: '',
  }),
})
</script>
