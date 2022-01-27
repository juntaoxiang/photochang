<template>
  <div id="a1">
        <slot></slot>
    </div>
 
      
      
</template>

<script>
export default {
   name:'t1'
}
</script>

<style>
 #a1{
  padding:0;
  position:fixed;
  right:0;
  left:0;
  bottom:0;
 display: flex;
  
} 
 #a1 img{
  width:2em;
  height:2em;
}
</style>
