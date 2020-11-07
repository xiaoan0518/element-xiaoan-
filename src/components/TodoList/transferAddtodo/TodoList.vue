<template>
    <div class="todolist">
        <div v-for="(item, index) in todos" :key="index">
            <el-checkbox v-model="item.ishowchecked"></el-checkbox>
            <span class="spanName">{{item.username}}</span>
            <el-button class="btn" @click="deleteTodo(index)" type="danger">删除</el-button>
        </div>
        <el-checkbox >全选/选中几个</el-checkbox>
    </div>
</template>

<script>
export default {
    props:{
        todos:Array 
    },
    data() {
        return {
           
        }
    },
    methods: {
        deleteTodo(index){
      
        this.$emit('addTodoindex',index)
        
        // this.todos.splice(index,1)
    }
    },
   
};
</script>

<style lang="less"  scoped>
.todolist{
    position: relative;
    .spanName{
        display: inline-block;
        width: 25%;
    }
    .btn{
        margin-left: 50px;
    }
}
</style>
