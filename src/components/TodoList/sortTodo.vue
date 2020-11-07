<template>
<div>
   <div class="radio">
    <el-input v-model="search" @keyup.enter.native="todo" placeholder="请输入内容" style="width:200px"></el-input>
  </div>
   <el-button type="primary" @click="fliterLIst">筛选</el-button>
  <el-timeline :reverse="reverse">
    <el-timeline-item
      v-for="(item, index) in persons"
      :key="index"
      >
      id:{{item.id}}------- 姓名：{{item.name}}  --------年龄：{{item.age}}
      
    </el-timeline-item>
  </el-timeline>
  
   <el-radio-group v-model="reverse">
      <el-radio :label="true">倒序</el-radio>
      <el-radio :label="false">正序</el-radio>
    </el-radio-group>
    <hr>
</div>
</div>
  
</template>

<script>
  export default {
    data() {
      return {
        reverse: true,
        search:'',
        id:5,
          persons: [{
            id: 1,
            name: 'xiaoming',
            age: 18
          },
          {
            id: 2,
            name: 'wang',
            age: 6
          },
          {
            id: 3,
            name: 'li',
            age: 58
          },
          {
            id: 4,
            name: 'an',
            age: 3
          },
        ],
      };
    },
    methods: {
      fliterLIst(){
         this.persons  = this.persons.filter((item,index)=>item.name.indexOf(this.search)!==-1)
    },
      todo(){
       
       let objList ={
        id:this.id++,
        name:this.search,
        age:18
       }
       this.persons.push(objList) 
      
    }
    },
  };
</script>
<style lang="less"  scoped>

</style>
