<template>
  <div v-show="isActive" class="p-8">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import type { Ref } from 'vue'
import type { Tab } from '~/types/tab'

type Props = {
  title?: string
}
const props = withDefaults(defineProps<Props>(), {
  title: '',
})

type AddTabFunction = (tab: Tab) => void

const hash = ref('')
const isActive = ref(false)

const addTab = inject<AddTabFunction>('addTab')
const activeTabHash = inject<Ref<string>>('activeTabHash')

onBeforeMount(() => {
  hash.value = `#${props.title.toLowerCase().replace(/ /g, '-')}`

  if (addTab) {
    addTab({
      title: props.title,
      hash: hash.value,
    })
  }
})

if (activeTabHash && 'value' in activeTabHash) {
  watch(activeTabHash, () => {
    isActive.value = activeTabHash.value === hash.value
  })
}
</script>
