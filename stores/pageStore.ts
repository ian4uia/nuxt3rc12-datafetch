import { defineStore } from 'pinia'

export const usePageStore = defineStore('pageStore', {
  state: () => ({
    fromPage: 1
  })
})
