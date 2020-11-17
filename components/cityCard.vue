<template>
    <div class="container">
      <v-card
        class="mx-auto"
        max-width="300"
      >
      <v-img
          src="/warm-bg.jpg"
      >

      <v-card-title>
        <!-- Weather for {{$route.params.id}}, {{weatherInfo.sys.country}} -->
      <h3>{{`${name}, ${sys}`}}</h3>
      </v-card-title>

      <v-card-subtitle>
        {{dateBuilder()}}
      </v-card-subtitle>

      <v-card-text class="text-center">
          <h2 class="my-4 Heading 6">
              <p>
                <v-icon left>mdi-white-balance-sunny</v-icon>
                  {{ Math.round(temp) }} °C
              </p>
              <p>
                <v-icon left>mdi-cloud</v-icon>
                  {{ weather }}
              </p>
              <p>Max temporary: {{ Math.round(tempMax) }} °C</p>
              <p>Min temporary: {{ Math.round(tempMin) }} °C</p>
              <p>Wind speed: {{ Math.round(wind) }} km/h</p>
          </h2>
      </v-card-text>
      <v-card-actions>

      <v-spacer></v-spacer>

        <v-btn
          color="white"
          text
          icon
          :to="'/'"
        >
          <v-icon>mdi-refresh</v-icon>
        </v-btn>
      </v-card-actions>
      </v-img>
    </v-card>
  </div>
</template>

<script>
export default {
    methods: {
        dateBuilder () {
            let d = new Date();
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let day = days[d.getDay()];
            let date = d.getDate();
            let month = months[d.getMonth()];
            let year = d.getFullYear();
            return `${day} ${date} ${month} ${year}`;
    }
  },
  props: ['temp', 'weather', 'name', 'sys', 'img', 'tempMin', 'tempMax', 'wind'],
}
</script>

<style scoped>
  .container{
    margin-top: 80px;
  }
</style>