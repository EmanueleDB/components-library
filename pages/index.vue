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
      <DataTable class="mt-4" :data="tableData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Tabs from '~/components/Tabs/Tabs.vue'
import Tab from '~/components/Tabs/Tab.vue'

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

const tableData = ref([
  {
    id: 1,
    name: 'John',
  },
  {
    id: 2,
    name: 'Marc',
  },
])

const showFile = ref('')
const handleFileUpload = (event: Event) => {
  const file = (event.target as HTMLInputElement).files![0]
  if (file) {
    showFile.value = file.name
  }
}
</script>
