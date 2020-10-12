<template>

  <div class="col mb-4">
    <div class="card h-100 shadow">
     <router-link v-if="pays.translations.fr" :to="`/pays/${pays.name}`"><img :src="pays.flag"  class="card-img-top" alt=""></router-link> 
     <router-link v-else :to="`/pays/${pays.name}`"><img :src="pays.flag"  class="card-img-top" alt=""></router-link> 
      <div class="card-body">
         <router-link class="link"  v-if="pays.translations.fr" :to="`/pays/${pays.name}`"><h3 class="card-title text-center" v-if="pays.translations.fr">{{ pays.translations.fr }}</h3></router-link> 
         <router-link class="link" v-else :to="`/pays/${pays.translations.br}`"><h3 class="card-title text-center">{{ pays.name }}</h3></router-link>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Cards",
  props: ["pays"],
};
</script>

<style>
</style>