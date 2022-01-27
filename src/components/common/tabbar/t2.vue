<template>
   <div class="a2" @click="cli">
     <!-- <img slot="b1" src="../assets/img/3.svg">
      <img slot="b3" src="../assets/img/31.svg"> -->
          <div v-if="!ac1"> <slot  name="b1"></slot></div> 
             <div v-else><slot  name="b3"></slot></div>
     <div  :style="ac2">
       

        <!-- :class="{col0:ac1}" -->
       <slot name="b2"></slot>
       </div>
         
  </div>

</template>

<script>
export default {
   name:'t2',
   props:{
       path:String,
       col:{
           type:String,
           default:"red"
       }
   },
   computed:{
       ac1(){
           return this.$route.path.indexOf(this.path)!=-1
       },
       ac2(){
          return this.ac1?{color:this.col}:{}
       }
   },
   methods:{
       cli(){
           this.$router.push(this.path)
        //    console.log(this.$router.options.routes)
          
       }
   }
}

</script>

<style>
.a2{
  flex:1;
  text-align: center;
    height:49px;
  font-size:13px;
}
.col0{
    color:red;
}
</style>
