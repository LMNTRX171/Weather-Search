<template>
  <div v-if="weatherInfo">
    <cityCard 
      :name="weatherInfo.name"
      :sys="weatherInfo.sys.country"
      :temp="weatherInfo.main.temp"
      :weather="weatherInfo.weather[0].main"
      :img="weatherInfo.weather[0].icon"
      :tempMin="weatherInfo.main.temp_min"
      :tempMax="weatherInfo.main.temp_max"
      :wind="weatherInfo.wind.speed"
    />
  </div>

  <div v-else>
    <h1>Not Found City</h1>
  </div>
</template>

<script>
import axios from 'axios'
import cityCard from '~/components/cityCard'

export default {
  components: {
    cityCard
  },
  data: () => ({
    apiKey: 'ed4580caef1f172339cc24e9d8932e97'
  }),
  async asyncData({params}) {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${params.id}&appid=ed4580caef1f172339cc24e9d8932e97&units=metric`)
      .then((response) => {
        return {weatherInfo: response.data}
        console.log(response.data.results);
      })
  }
}
</script>

<style scoped>

</style>
