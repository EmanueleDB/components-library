<template>
  <div class="flex max-h-screen flex-col">
    <Navigation />

    <div class="px-4">
      <Icon name="uil:github" size="30" />

      <Tabs :active-index="2">
        <Tab v-for="tab of items" :key="tab.label" :title="tab.label">
          <template v-if="tab.key === 'data'"> 1 </template>
          <template v-else-if="tab.key === 'upOrDown'"> 2 </template>
          <template v-else> 3 </template>
        </Tab>
      </Tabs>

      <div class="flex items-center">
        <label>
          <span
            class="rounded p-2 hover:cursor-pointer bg-gray-400 text-white h-auto"
            >Select a file</span
          >
          <input
            type="file"
            class="hidden"
            accept=".csv"
            @change="handleFileUpload"
          />
        </label>
        <div v-if="showFile" class="ml-3 bg-blue-200 border-2 rounded p-1">
          {{ showFile }}
        </div>
      </div>
      <DataTable :data="tableData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Papa from 'papaparse'
import Tabs from '~/components/Tabs/Tabs.vue'
import Tab from '~/components/Tabs/Tab.vue'
import type { Trade, AggregatedTrade } from '~/types/table'

const items = ref([
  {
    key: 'data',
    label: 'Data',
    description: 'The data that you imported',
  },
  {
    key: 'upOrDown',
    label: 'Up or Down',
    description: '',
  },
  {
    key: 'chart',
    label: 'Chart',
    description: '',
  },
])

const showFile = ref('')
const handleFileUpload = (event: Event) => {
  const file = (event.target as HTMLInputElement).files![0]
  if (file) {
    showFile.value = file.name
    convertToJSON(file)
  }
}

const convertToJSON = (file: File) => {
  const reader = new FileReader()
  reader.onload = (e) => {
    if (e.target) {
      const csvContent = e.target.result as string
      processCSVContent(csvContent)
    }
  }
  reader.readAsText(file)
}

const tableData = ref<Trade[]>([])

const processCSVContent = (csvContent: string) => {
  Papa.parse(csvContent, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: (result) => {
      console.log(result.data)
      tableData.value = aggregateObjectsByCurrency(result.data as Trade[])
    },
  })
}

const filterValidTrades = (originalArray: Trade[]): Trade[] => {
  return originalArray.filter(
    (obj) =>
      obj.Contract !== null &&
      !isNaN(obj.Quantity) &&
      obj.Currency !== 'USDT' &&
      obj.Currency !== 'EUR',
  )
}

const findExistingObject = (
  aggregatedArray: AggregatedTrade[],
  currency: string,
): AggregatedTrade | undefined => {
  return aggregatedArray.find((item) => item.Currency === currency)
}

const updateExistingObject = (
  existingObject: AggregatedTrade,
  obj: Trade,
): void => {
  existingObject.Quantity = parseFloat(
    (existingObject.Quantity + obj.Quantity).toFixed(4),
  )
  existingObject['Wallet Balance'] = obj['Wallet Balance']
  const totalQuantity = existingObject.Quantity

  const existingWeight = totalQuantity - obj.Quantity
  const newWeight = obj.Quantity

  existingObject['Filled Price'] = parseFloat(
    (
      (existingObject['Filled Price'] * existingWeight +
        obj['Filled Price'] * newWeight) /
      totalQuantity
    ).toFixed(4),
  )
  existingObject['Fee Paid'] = parseFloat(
    (existingObject['Fee Paid'] + obj['Fee Paid']).toFixed(4),
  )
}

const createNewObject = (obj: Trade, idCounter: number): AggregatedTrade => {
  return {
    id: idCounter,
    Currency: obj.Currency,
    Type: obj.Type,
    Contract: obj.Contract,
    Direction: obj.Direction || '',
    Quantity: parseFloat(obj.Quantity.toFixed(4)),
    'Filled Price': parseFloat(obj['Filled Price'].toFixed(4)),
    'Fee Paid': parseFloat(obj['Fee Paid'].toFixed(4)),
    'Wallet Balance': obj['Wallet Balance'],
  }
}

const aggregateObjectsByCurrency = (
  originalArray: Trade[],
): AggregatedTrade[] => {
  let idCounter = 1
  const validTrades = filterValidTrades(originalArray)
  return validTrades.reduce(
    (aggregatedArray: AggregatedTrade[], obj: Trade) => {
      const existingObject = findExistingObject(aggregatedArray, obj.Currency)

      if (existingObject) {
        updateExistingObject(existingObject, obj)
      } else {
        const newObject = createNewObject(obj, idCounter++)
        aggregatedArray.push(newObject)
      }

      return aggregatedArray
    },
    [],
  )
}
</script>
