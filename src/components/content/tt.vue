<template>
  <t1>

      

  <t2 path="q1" col="orange">
       <template v-slot:b3>
       <img  src="@/assets/img/01.svg">
       </template>

       <template #b1>
         <img src="@/assets/img/0.svg">
       </template>
    
    <template v-slot:b2>
       <div>首页</div> 
    </template>
 </t2>

  <t2 path="q2" col="orange">
       <template #b3>
       <img  src="@/assets/img/21.svg">
       </template>

       <template #b1>
         <img src="@/assets/img/2.svg">
       </template>
    
    <template #b2>
       <div>我的</div> 
    </template>
 </t2>



  <t2 path="q3" col="orange">
       <template #b3>
       <img  src="@/assets/img/31.svg">
       </template>

       <template #b1>
         <img src="@/assets/img/3.svg">
       </template>
    
    <template #b2>
       <div>购物车</div> 
    </template>
 </t2>


  <t2 path="q4" col="orange">
       <template #b3>
       <img  src="@/assets/img/41.svg">
       </template>

       <template #b1>
         <img src="@/assets/img/4.svg">
       </template>
    
    <template #b2>
       <div>订单</div> 
    </template>
 </t2> 

     
    
    </t1>
</template>

<script>
import t1 from "components/common/tabbar/t1.vue"
import t2 from "components/common/tabbar/t2.vue"
export default {
  name:"tt",
  components:{
    t1,
    t2
  }
}
</script>

<style>

</style>