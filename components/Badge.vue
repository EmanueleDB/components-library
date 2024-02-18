<template>
  <div
    :class="[
      'inline-flex flex-row items-center justify-center rounded align-middle text-sm font-medium',
      variant,
      { 'cursor-pointer': tooltip.content },
    ]"
  >
    <TitleElement
      class="px-2"
      :label="label"
      :has-image="hasImage"
      :image="image"
      :tooltip="tooltip"
      :icon="icon"
    />
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
  variant?: string
}
withDefaults(defineProps<Props>(), {
  label: '',
  hasImage: false,
  image: '',
  tooltip: () => ({
    content: '',
  }),
  icon: '',
  variant: 'bg-green-400',
})

// computed: {
//   badgeClasses() {
//     return [
//       'badge-element',
//       this.badgeSize,
//       this.badgeVariant,
//       { 'badge-element--soft': this.soft },
//       { 'badge-element--outline': this.outline },
//       { 'badge-element--transparent': this.transparent },
//       { 'badge-element--square': this.checkSquare && !this.fullWidth },
//       { 'badge-element--full-width': this.fullWidth },
//     ]
//   },
//   badgeSize() {
//     if (this.size) {
//       let size = this.size
//       if (this.size.includes('badge-'))
//         size = 'size-' + this.size.split('-')[1]
//       else if (!this.size.includes('badge-') && !this.size.includes('size-'))
//         size = 'size-' + this.size
//       return size
//     }
//     return ''
//   },
//   badgeVariant() {
//     return this.variant ? 'badge-element--' + this.variant : ''
//   },
//   checkSquare() {
//     return !this.label
//   },
// },
</script>
