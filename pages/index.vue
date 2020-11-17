<template>
  <v-layout class=" ma-8">
    <v-flex class="text-center">
      <h1>Weather Map</h1>
      <form @submit.prevent="submit">
          <input 
            type="text" 
            placeholder="Enter city" 
            class="text-center white--text ma-6"
            v-model="search"
            autofocus
            >
      </form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    search: ''
  }),
  methods: {
    submit(event) {
      this.$router.push(`weathers/${this.search}`)
    }
  }
}
</script>

<style scoped>
  
</style>