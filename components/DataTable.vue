<template>
  <div class="w-full overflow-hidden rounded-lg shadow-xs">
    <div class="w-full overflow-x-auto">
      <table class="w-full whitespace-no-wrap">
        <thead>
          <tr
            class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50"
          >
            <th v-for="(_, key) in data[0]" :key="key" class="px-4 py-3">
              {{ key }}
            </th>
            <th v-if="data.length" class="px-4 py-3">PL %</th>
            <th v-if="data.length" class="px-4 py-3">PL $</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y">
          <tr
            v-for="(item, i) in sortedTableData"
            :key="i"
            class="hover:cursor-pointer hover:bg-gray-300"
            @click="console.log(item)"
          >
            <td
              v-for="(value, index) in item"
              :key="index"
              class="px-4 py-3 text-sm"
            >
              {{ value }}
            </td>
            <td v-if="data.length" class="px-4 py-3 text-sm"><slot /></td>
            <td v-if="data.length" class="px-4 py-3 text-sm"><slot /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { Trade } from '~/types/table'

const props = defineProps({
  data: {
    type: Array as PropType<Trade[]>,
    required: true,
  },
})

const sortedTableData = computed(() => {
  return props.data.slice().sort((a, b) => a.Currency.localeCompare(b.Currency))
})
</script>
