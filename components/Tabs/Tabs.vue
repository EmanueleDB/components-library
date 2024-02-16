<template>
  <div class="rounded">
    <ul
      class="flex flex-nowrap justify-between border-t border-b border-l border-black rounded"
    >
      <li
        v-for="tab in tabs"
        :key="tab.title"
        class="w-full text-center cursor-pointer py-1 border-r border-black"
        :class="{
          '': tab.hash !== activeTabHash,
          'bg-green-400': tab.hash === activeTabHash,
        }"
        @click="activeTabHash = tab.hash"
      >
        {{ tab.title }}
      </li>
    </ul>
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { Tab } from '~/types/tab'

type Props = {
  activeIndex?: number
}
const props = withDefaults(defineProps<Props>(), {
  activeIndex: 1,
})
const activeTabHash = ref('')
const tabs = ref<Tab[]>([])

provide('addTab', (tab: Tab) => {
  const count = tabs.value.push(tab)
  if (count === props.activeIndex) (activeTabHash.value as string) = tab.hash
})

provide('activeTabHash', activeTabHash)
</script>
