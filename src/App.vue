<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components:{
    'navbar' : Navbar
  }
}
</script>

<style lang="scss">
   @import "./assets/custom.scss";
</style>
