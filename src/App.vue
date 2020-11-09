<template>
  <div id="app" >
    <el-button >
      <router-link to="/ishowblack">显示隐藏三角</router-link>
    </el-button>
    <el-button @click="$router.push('/table')" >表格</el-button>
    <el-button @click="$router.push('/sorttodo')" >todolist</el-button>
    <div class="AppContent">
      <div class="routerview"> <router-view/></div>
      
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less"  scoped>
#app{
  width: 100%;
  height: 100%;
  .AppContent{
    width: 90%;
    height: 80%;
    border: 1px solid black;
    position: relative;
    // background: pink;
    margin: 0 auto;
    .routerview{
      
      position: absolute;
      left: 50%;
      top: 50%;
      transform:translate(-50%,-50%);
    }
  }
  
} 

</style>
