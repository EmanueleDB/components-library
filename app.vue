<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'

const getCoins = async () => {
  try {
    const response = await axios.get('/api/account')
    if (response) console.log(response.data)
  } catch (e) {
    console.log(e)
  }
}

onMounted(() => {
  getCoins()
})

// setInterval(() => {
//   getCoins()
// }, 1500)
</script>
