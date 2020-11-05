<template>
    <div>
    <el-button type="primary">主要按钮</el-button>
    <!-- 三角动画按钮 -->
    <ISHOWBLACK></ISHOWBLACK>
    <!-- 表格+分页 -->
    <TABLE></TABLE>
    
    
     
    </div>
</template>

<script>
import ISHOWBLACK from './ishowblack'
import TABLE from './Table/Tablefull'
export default {
    components:{
        ISHOWBLACK,
        TABLE
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
