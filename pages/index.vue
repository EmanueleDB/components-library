<template>
  <div class="flex max-h-screen flex-col">
    <Navigation />

    <div class="px-4">
      <Alert label="Alert test" />
      <Badge label="Badge test" />
      <Avatar
        image="https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=3412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        :tooltip="{ content: 'test tooltip' }"
      />
      <Icon name="uil:github" size="30" />

      <Tabs :active-index="2">
        <Tab v-for="tab of items" :key="tab.label" :title="tab.label">
          <template v-if="tab.key === 'data'"> 1 </template>
          <template v-else-if="tab.key === 'upOrDown'"> 2 </template>
          <template v-else> 3 </template>
        </Tab>
      </Tabs>

      <Button
        label="Open modal"
        text-color="text-white"
        class="mb-3"
        variant="bg-green-400"
        @click="showModal = true"
      />
      <Modal v-if="showModal">Modal test</Modal>

      <Button
        label="Open Slide"
        text-color="text-white"
        class="mb-3"
        variant="bg-green-400"
        @click="showSlide = true"
      />
      <Slide v-if="showSlide">Slide test</Slide>

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
import Alert from '~/components/Alert.vue'
import Avatar from '~/components/Avatar.vue'
import Badge from '~/components/Badge.vue'
import Button from '~/components/Button.vue'
import DataTable from '~/components/DataTable.vue'
import Modal from '~/components/Modal.vue'
import Slide from '~/components/Slide.vue'
import Tabs from '~/components/Tabs/Tabs.vue'
import Tab from '~/components/Tabs/Tab.vue'
import TitleElement from '~/components/TitleElement.vue'

const showModal = ref(false)
const showSlide = ref(false)

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
