<template>
  <div>
    <h1>Data Refresh (#8344)</h1>
    <button @click="doRefresh()">Refresh</button><RouterLink to="pageTwo">Page 2</RouterLink>
    <div v-if="pending">
      <h2>Loading...</h2>
    </div>
    <div v-else>
      <img :src="dogImage.message">
    </div>
  </div>
</template>

<script setup>
  import { usePageStore } from '~~/stores/pageStore'
  const pageStore = usePageStore()
  const { data: dogImage, pending, refresh } = await useLazyAsyncData(
    'dogImage',
    () => $fetch('https://dog.ceo/api/breeds/image/random'),
    { server: true }
  )

  if (pageStore.fromPage === 2) {
    console.log('Another page load.')
    refresh().then( ()=> {
      console.log(dogImage.value.message)
    })
  } else {
    console.log('First page load!')
  }

  const doRefresh = () => {
    console.log('About to refresh')
    refresh().then( ()=> {
      console.log(dogImage.value.message)
    })
  }
</script>