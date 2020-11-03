<template>
  <div>
   <!-- height   设置表格的高度 
        max-height   表格的最大高度
        stripe   是否有斑马纹
        border   是否带有纵向边框
        size     table的尺寸
        fit      列的宽度是否自撑开
        show-header   是否显示表头
        highlight-current-row   当前行高亮 没有用到
        row-class-name  行的 className 的回调方法  owIndex就是需要高亮的数据在数组里面的下标，返回的class类名就是你自己定义的class类名。
   --> 
    <template>
      <el-table 
      :data="tableData" 
      style="width: 600px"
      height="350"
      max-height="450"
      stripe
      border
      :fit="true"
      :show-header ="true"
      :row-class-name="tableRowClassName"
      >
        <!-- 第一种写法 -->
        <!-- <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column> -->

        <!-- 第二种写法 -->
        <el-table-column label="日期" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="跳转" width="180">
          <template slot-scope="scope">
            <!-- 划过显示hover信息 -->
            <!-- <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>住址: {{ scope.row.address }}</p>
            </el-popover> -->
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="medium" @click="redactTable(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="deleteTable(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
   redactTable(index, row){
   row.name='王一刀'
    console.log(index, row);
    
   },
   deleteTable(index, row){
    this.tableData.splice(index,1)
   },
   tableRowClassName({row, rowIndex}){
    // console.log(rowIndex);
    // if (rowIndex === 0) {
    //  return 'active'
    // }else{
    //  return ''
    // }
   }
  },
};
</script>

<style lang="less"  >
.el-table--enable-row-hover .el-table__body tr:hover>td{
	background-color: #9FB6CD;
}
.el-table .active{
 background: pink;
}
</style>
