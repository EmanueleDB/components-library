<template>
  <vMenu
    aria-id="some popup"
    :placement="placement"
    :distance="offset"
    :delay="delay"
  >
    <slot></slot>

    <template #popper>
      <slot name="popperContent"></slot>
    </template>
  </vMenu>
</template>

<script setup lang="ts">
type Props = {
  placement?: string
  offset?: string
  delay?: string
}
withDefaults(defineProps<Props>(), {
  placement: 'bottom',
  offset: '10',
  delay: '0',
})
</script>
