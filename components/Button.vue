<template>
  <button
    :class="[
      'flex flex-nowrap items-center justify-center rounded',
      { disabled: disabled },
      [tooltip.content ? 'cursor-pointer' : 'cursor-default'],
    ]"
    :type="submit ? 'submit' : 'button'"
    :disabled="disabled"
  >
    <TitleElement
      class="px-3 py-1"
      :label="label"
      :icon="icon"
      :tooltip="tooltip"
    />
  </button>
</template>

<script setup lang="ts">
import TitleElement from '~/components/TitleElement.vue'
import type { TTooltip } from '~/types/tooltip'

type Props = {
  label?: string
  submit?: boolean
  disabled?: boolean
  tooltip?: TTooltip
  icon?: string
}
withDefaults(defineProps<Props>(), {
  label: '',
  submit: false,
  disabled: false,
  tooltip: () => ({
    content: '',
  }),
  icon: '',
})
</script>
