<template>
    <div class="AddtodoHomeWarp">
     
     <el-input v-model="serch" style="width:300px" placeholder="请输入内容" @keyup.13.native ="Addtodo"></el-input>
     <!-- <TODOLIST :todos="todos" ref="addTodoindex"/> -->
     <TODOLIST :todos="todos" @addTodoindex="addTodoindex"/>
    </div>
</template>

<script>
import TODOLIST from './TodoList'
export default {
 components:{
  TODOLIST
 },
  data() {
      return {
       serch:"",
       todos:[
        {username:'张三',ishowchecked:true},
        {username:'李四',ishowchecked:false},
        {username:'王老五',ishowchecked:true}
       ]
      };
  },
  
  
  methods: {
   Addtodo(){
    let objtodo = {
     username:this.serch,
     ishowchecked:false
    }
    this.todos.unshift(objtodo)
   },
    addTodoindex(index){
     this.todos.splice(index,1)
    },
  },

   mounted() {
  //  this.$refs.addTodoindex.$on('addTodoindex',(index)=>this.deleteTodoHome(index)
  //  )
   this.$on('addTodoindex',(index)=>this.addTodoindex(index)
   
   )
   
   
  },
};
</script>

<style lang="less"  scoped>
.AddtodoHomeWarp{
 width: 600px;
 height: 100%;
 margin-left: 50px;
 padding-left: 20px;
 border: 1px solid black;
}
</style>
