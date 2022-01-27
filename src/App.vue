<template>
  <div id="app">
    <tt></tt>
  <router-view></router-view>
  </div>
</template>

<script>
import tt from "components/content/tt.vue"

export default {
  name: 'App',
  components:{
    tt
  }
}
</script>

<style>
@import "./assets/css/base.css"

</style>
