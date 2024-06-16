<template>
  <div class="w-full overflow-hidden rounded-lg shadow-xs">
    <div class="w-full overflow-x-auto">
      <table class="w-full whitespace-no-wrap">
        <thead>
          <tr
            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50"
          >
            <th v-if="data.length && start" class="px-4 py-3">Custom Column</th>
            <th v-for="(_, key) in data[0]" :key="key" class="px-4 py-3">
              {{ key }}
            </th>
            <th v-if="data.length && !start && end" class="px-4 py-3">
              Custom Column
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y">
          <tr
            v-for="(item, i) in data"
            :key="i"
            class="hover:cursor-pointer hover:bg-gray-300"
            @click="console.log(item)"
          >
            <td v-if="data.length && start" class="px-4 py-3 text-sm">
              <slot name="custom-column" :item="item" />
            </td>
            <td
              v-for="(value, index) in item"
              :key="index"
              class="px-4 py-3 text-sm"
            >
              {{ value }}
            </td>
            <td v-if="data.length && !start && end" class="px-4 py-3 text-sm">
              <slot name="custom-column" :item="item" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  data: {
    // type: Array as PropType<Trade[]>,
    type: Array<object>,
    required: true,
  },
  start: {
    type: Boolean,
    default: false,
  },
  end: {
    type: Boolean,
    default: false,
  },
})
</script>
