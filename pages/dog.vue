<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-center">
      <v-card
        max-height="600px"
        max-width="344px"
        >
        <v-card-title class="headline">
          Random  dog image
        </v-card-title>
        <v-img
          :src="image"
          height="300px"
        >
        </v-img>

        <v-card-text>
          This image so cool)
        </v-card-text>
      <v-card-actions>
         <v-spacer></v-spacer>
      <v-btn 
        color="orange lighten-2"
        text
        right
        @click="getNewImage"
      >
        Explore
      </v-btn>
    </v-card-actions>
      </v-card>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
  }),
    async asyncData(context) {
      return axios.get(`https://dog.ceo/api/breeds/image/random`)
          .then((response) => {
            return {image: response.data.message}
          })
    },
    methods: {
      getNewImage() {
        return this.$store.dispatch('getNewImage')
      }
    }
}
</script>
