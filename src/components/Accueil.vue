<template>
  <div>

    <hero></hero>

    <div class="container p-4">
      <div class="row row-cols-1 row-cols-md-3">
        <cards :key="index" v-for="(pays, index) in pays.data" :id="index" :pays="pays"></cards>
      </div>
    </div>
    
  </div>
</template>

<script>
import Hero from './Hero.vue'
import Cards from './Cards.vue'
import axios from 'axios'

export default {
  name: 'Accueil',
  components:{
    'hero': Hero,
    'cards' : Cards
  },
  data(){
    return {
      pays: null
    } 
  },
  mounted(){
    axios
    .get('https://restcountries.eu/rest/v2/region/europe')
    .then((reponse) => {
      this.pays = reponse;
    });
  },
}
</script>

<style scoped>

</style>
