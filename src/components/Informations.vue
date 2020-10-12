<template>

<div class="container p-4">
 <div class="row">

    <div class="col-md-8">
      <img class="img-fluid w-100 mx-auto d-block shadow" :src="paysUnique.flag" alt="">
    </div>

    <div class="col-md-4">
      <h3 class="my-3">{{ paysUnique.translations.fr }}</h3>
      <ul>
        <li>Population: {{ paysUnique.population }} d'habitants</li>
      </ul>
      <h3>Langue:</h3>
      <ul :key="index" v-for="(paysUnique , index) in paysUnique.languages"> 
          <li>{{ paysUnique.name }}</li>
      </ul>
    </div>

  </div>
</div>

</template>

<script>
import axios from 'axios'

export default {
    name: 'Informations',
    data(){
        return{
            id : this.$route.params.id,
            paysUnique: []
        }
    },
    mounted(){
    axios
    .get(`https://restcountries.eu/rest/v2/name/${this.id}`)
    .then((reponse) => {
      this.paysUnique = reponse.data[0];
    });
  },
}
</script>

<style>

</style>