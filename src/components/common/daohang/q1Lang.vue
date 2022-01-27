<template>
  <div class="q1-1">
      <div class="left"><slot name="left"></slot></div>
          <div class="center"><slot name="center"></slot></div>
              <div class="right"><slot name="right"></slot></div>

  </div>
</template>

<script>
export default {
    name:"q1Lang"
}
</script>
<style>
.q1-1{
    padding:0;
    margin: 0;
    display: flex;
    height:60px;
    box-shadow: 0,1px,1px,rgba(100, 100, 100, .1);
    text-align: center;
     
}
.left, .right{
   
    width:66px;
    
}
.center{
    flex: 1;
    
}

</style>