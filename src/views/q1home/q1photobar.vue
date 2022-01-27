<template>
   <photobar>
    <photoitem v-for="(item,index) in banners" :key="index">
      <a :href="item.link"> <img :src='item.image923'></a>
     
    </photoitem>

  </photobar>
</template>

<script>
import {photobar,photoitem} from "components/common/gundongphoto"
export default {
  name:"q1photobar",
  components:{
      photobar,
      photoitem
  },
  props:{
      banners:{
          type:Array,
          default:[]
      }
  }
}
</script>

<style>

</style>