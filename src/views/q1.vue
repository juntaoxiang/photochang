<template>
<div>
  <q1LangVue class="styleq1-1">
    <template #center>
     <h2 id="gou1">购物街</h2>
    </template> 
  </q1LangVue>

  <q1photobar :banners="banners"></q1photobar>

    <!-- <h1>11111111</h1> -->
  

  <!-- <img :src="banners[0].image"> -->

 
 

</div>
  
</template>

<script>
import {gethomemultidate} from "network/home.js"
import q1LangVue from "components/common/daohang/q1Lang.vue"
// import photobar from "components/common/gundongphoto/photobar"
// import photoitem from "components/common/gundongphoto/photoitem"
import q1photobar from "views/q1home/q1photobar"

export default {
  name:"q1",
  components:{
    q1LangVue,
    // photobar,
    // photoitem
    q1photobar
  },
  data(){
    return{
       banners:[]
    }
  },
  created(){
     gethomemultidate().then(res => {
        console.log(res)
        this.banners=res.data.data.banner.list;
    })
      
  }
}
</script>

<style>
.styleq1-1{
  background-color: palevioletred;
  color:aliceblue;
 
}
#gou1{
  padding:15px;
}
img{
  width:375px;

}
</style>