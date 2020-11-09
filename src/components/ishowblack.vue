<template>
  <div>
    <div class="warp">
      <div class="place">
        <i :class="[control ? 'iconfont icon-xiangyouxiao':'iconfont icon-xiangxiaxiaotubiao']" @click="ishowblack" >显示与隐藏</i>
      </div>
      
      <div v-if="ishowContentOne">内容显示区域</div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return  {
     control:true,
     ishowContentOne:false
    };
  },
  methods: {
   ishowblack(){
    this.control = !this.control
    this.ishowContentOne = !this.ishowContentOne
   }
  },
};
</script>

<style lang="less" scoped>

.place{
  width: 300px;
  background: burlywood;
  position: relative;
  .iconfont{
    color: red;
    background: pink;
    font-size: 30px;
    }

}

</style>
