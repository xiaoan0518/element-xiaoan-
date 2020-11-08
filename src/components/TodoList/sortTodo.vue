<template>
<div>
  <button style="margin:20px 0" @click="todolistishow = !todolistishow">todolist传参props/自定义+返回</button>
  <div v-if="todolistishow">
    <p>计算属性进筛选+element的正向逆向筛选</p>
    <div class="radio">
    <el-input v-model="search" @keyup.enter.native="todo" placeholder="请输入内容" style="width:200px"></el-input>
    <el-button type="primary" @click="fliterLIst">筛选</el-button>
  </div>
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
  </div>
  <div v-else>
    <ADDTODOHOME></ADDTODOHOME>
  </div>
</div>

  
</template>

<script>
import ADDTODOHOME from './transferAddtodo/AddtodoHome'
export default {
   components:{
      ADDTODOHOME
    }, 
  data() {
   
    return {
      todolistishow:true,
      reverse: true,
      search: "",
      id: 5,
      persons: [
        {
          id: 1,
          name: "xiaoming",
          age: 18,
        },
        {
          id: 2,
          name: "wang",
          age: 6,
        },
        {
          id: 3,
          name: "li",
          age: 58,
        },
        {
          id: 4,
          name: "an",
          age: 3,
        },
      ],
    };
  },
  methods: {
    fliterLIst() {
      this.persons = this.persons.filter(
        (item, index) => item.name.indexOf(this.search) !== -1
      );
    },
    todo() {
      let objList = {
        id: this.id++,
        name: this.search,
        age: 18,
      };
      this.persons.push(objList);
    },
  },
};
</script>
<style lang="less"  scoped>
.radio {
  margin-bottom: 20px;
}
</style>
