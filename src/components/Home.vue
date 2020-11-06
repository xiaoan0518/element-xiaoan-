<template>
    <div>
    <el-button type="primary">主要按钮</el-button>
    <!-- 三角动画按钮 -->
    <ISHOWBLACK></ISHOWBLACK>
    <!-- 表格+分页 -->
    <!-- <TABLE></TABLE> -->
    <TABLEFULL></TABLEFULL>
    <!-- P排序todolist   input惊醒天加 -->
    <SORTTODO></SORTTODO>
    
     
    </div>
</template>

<script>
import ISHOWBLACK from './ishowblack'
import TABLEFULL from './Table/Tablefull'
// import TABLE from './Table/Tablefull'
import SORTTODO from './TodoList/sortTodo'
export default {
    components:{
        ISHOWBLACK,
        TABLEFULL,
        // TABLE,
        SORTTODO
    },
    props: {

    },
    data() {
        return {

        };
    },
};
</script>

<style lang="less"  scoped>

</style>
