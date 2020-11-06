<template>
  <div>
    <!--

        el-table标签
        stripe   是否有斑马纹
        border   是否带有纵向边框
        size     table的尺寸
        fit      列的宽度是否自撑开
        show-header   是否显示表头
        highlight-current-row   当前行高亮 没有用到
        row-class-name  行的 className 的回调方法  owIndex就是需要高亮的数据在数组里面的下标，返回的class类名就是你自己定义的class类名。
        row-style       行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。（用处不大）
        cell-class-name  单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。
        default-sort     默认的排序列的 prop 和顺序
        sort-change	     当表格的排序条件发生变化的时候会触发该事件
        show-summary	  是否在表尾显示合计行
        span-method	    合并行或列的计算方法
        selection-change	当选择项发生变化时会触发该事件
        cell-mouse-enter	当单元格 hover 进入时会触发该事件
        cell-mouse-leave	当单元格 hover 退出时会触发该事件
        cell-click	      当某个单元格被点击时会触发该事件
        header-click	    当某一列的表头被点击时会触发该事件
        clearSelection	  用于多选表格，清空用户的选择


        el-table-column标签
        height            设置表格的高度 
        max-height        表格的最大高度
        index             如果设置了 type=index，可以通过传递 index 属性来自定义索引
        fixed	            列是否固定在左侧或者右侧，true 表示固定在左侧
        show-overflow-tooltip	当内容过长被隐藏时显示 弹出信息
        class-name	      列的 className
        label-class-name	当前列标题的自定义类名
        
        
   -->
    <template>
      <el-table
        :data="tableData"
        style="width: 1000px"
        height="350"
        max-height="450"
        stripe
        border
        :fit="true"
        :show-header="true"
        :row-class-name="tableRowClassName"
        :row-style="rowStyle"
        :cell-class-name="tableCellClassName"
        :default-sort="{ prop: 'date', order: 'descending' }"
        show-summary
        :span-method="arraySpanMethod"
        @selection-change="handleSelectionChange"
        @cell-mouse-enter="CellMouseEnter"
        @cell-click="CellClick"
        @header-click="HeaderClick"
        @sort-change="SortChange"
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
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column type="index" width="55"> </el-table-column>
        <el-table-column
          label="日期"
          width="180"
          sortable
          prop="date"
          fixed="left"
          label-class-name="columnList"
        >
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="年龄" width="180" sortable prop="age">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.age }}</span>
          </template>
        </el-table-column>
        <el-table-column label="年龄" width="180" sortable prop="age">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.age }}</span>
          </template>
        </el-table-column>
        <el-table-column label="跳转" width="180" sortable>
          <template slot-scope="scope">
            <!-- 划过显示hover信息 -->
            <!-- <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>住址: {{ scope.row.address }}</p>
            </el-popover> -->
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.address }}</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          sortable
          prop="address"
          :formatter="formatter"
        >
          <template slot-scope="scope">
            <el-button
              size="medium"
              @click="redactTable(scope.$index, scope.row)"
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



    <!-- 

      small	           是否使用小型分页样式
      background	     是否为分页按钮添加背景色	
      page-size	       每页显示条目个数  总条数
      total            总条数
      current-page     默认当前显示页数（点击后显示页数）
      layout          组件布局
      page-sizes	    每页显示个数(数组)
      disabled	      是否禁用

      size-change     事件名（pageSize改变时会触发）
      current-change  事件名（currentPage点击页数改变时会触发）
     -->
    <div class="block">
      <el-pagination
        small
        background
        
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[1, 2, 3, 4]"
        :page-size="tableData.length"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
      >
      </el-pagination>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage4: 4,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          age: 18,
          address:
            "上海市普陀区金沙江路 1518 弄少时诵诗书所所所所所所所所所所所所所所所所所所所"
        },
        {
          date: "2016-05-04",
          name: "王2虎",
          age: 18,
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王3虎",
          age: 19,
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王4虎",
          age: 28,
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    // 更改
    redactTable(index, row) {
      row.name = "王一刀";
      console.log(index, row);
    },
    //  删除
    deleteTable(index, row) {
      this.tableData.splice(index, 1);
    },
    tableRowClassName({ row, rowIndex }) {
      // console.log(rowIndex);
      // if (rowIndex === 0) {
      //  return 'active'
      // }else{
      //  return ''
      // }
    },
    rowStyle({ row, rowIndex }) {
      // let styleJson = {
      //       "background":"green"
      //     };
      // return styleJson
    },
    tableCellClassName({ row, column, rowIndex, columnIndex }) {
      // console.log(row, column, rowIndex, columnIndex);
      // if (rowIndex === 0 && columnIndex === 0) {
      //   return "rgb196";
      // } else if (rowIndex === 0 && columnIndex === 1) {
      //   return "bacColorf4984e";
      // } else if (rowIndex === 0 && columnIndex === 2) {
      //   return "bacColor317eb0";
      // }else if (rowIndex === 2 && columnIndex === 1) {
      //   return "bacColor317eb0";
      // }
    },
    formatter(row, column) {
      console.log(row, column);

      return row.address;
    },
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      // if (rowIndex % 2 === 1) {
      //   if (columnIndex === 1) {
      //     return [1, 2];
      //   } else if (columnIndex === 1) {
      //     return [0, 0];
      //   }
      // }
    },
    handleSelectionChange(val) {
      // console.log(val);
    },
    CellMouseEnter(row, column, cell, event) {
      // console.log(row, column, cell, event);
    },
    CellClick(row, column, cell, event) {
      // console.log( event);
    },
    HeaderClick(column, event) {
      // console.log(column, event);
    },
    SortChange({ column, prop, order }) {
      // console.log(prop, order);
    },
     handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  }
};
</script>

<style lang="less">
.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #9fb6cd;
}
.el-table .active {
  background: pink;
}
.rgb196 {
  background: rgb(196, 196, 196);
}
.bacColor317eb0 {
  background: #317eb0;
}
.bacColorf4984e {
  background: #f4984e;
}
.columnList {
  background: red;
}

</style>
