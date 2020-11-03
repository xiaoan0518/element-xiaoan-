<template>
  <div>
    <div class="warp">
      <i :class="[control ? 'iconfont icon-xiangyouxiao':'iconfont icon-xiangxiaxiaotubiao']" @click="ishowblack" ></i>
      <div v-if="ishowContentOne">内容显示区域</div>
    </div>
    <hr>
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

.iconfont{
 color: red;
 font-size: 30px;
}

</style>
