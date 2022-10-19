<template>
  <div>
    <h1>useFetch - Page 2</h1>
    <button @click="goBack()">Go Back</button>
  </div>
</template>

<script setup>
import { usePageStore } from '~~/stores/pageStore'
const pageStore = usePageStore()
const router = useRouter()
if (true) {
  pageStore.fromPage = 2
}
const goBack = () => {
  router.push('/')
}
</script>