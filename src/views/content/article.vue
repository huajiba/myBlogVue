<template>
  <div>
    <!-- 搜索栏 -->
    <el-card id="search">
      <el-row>
        <el-col :span="20">
          <el-input v-model="searchModel.title" placeholder="标题"></el-input>
          <el-button type="primary" round icon="el-icon-search">查询</el-button>
        </el-col>
        <el-col :span="4" align="right">
          <el-button type="primary" icon="el-icon-plus" circle></el-button>
        </el-col>
      </el-row>
    </el-card>
    <!-- 结果列表 -->
    <el-card>
      <el-table :data="articleList" style="width: 100%">
        <el-table-column type="index" label="序号" width="180">
        </el-table-column>
        <el-table-column prop="title" label="标题" width="200">
        </el-table-column>
        <el-table-column prop="category" label="分类">
        </el-table-column>
        <el-table-column prop="top" label="置顶">
        </el-table-column>
        <el-table-column prop="recommend" label="推荐">
        </el-table-column>
        <el-table-column prop="published" label="可见性">
        </el-table-column>
        <el-table-column prop="create_time" label="创建时间">
        </el-table-column>
        <el-table-column prop="update_time" label="最近更新">
        </el-table-column>
        <el-table-column prop="address" label="操作">
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 分页组件 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="searchModel.pageNo"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="searchModel.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template> 

<script>
export default {
  data(){
    return {
      total:0,
      searchModel:{
        pageNo:1,
        pageSize:10
      },
      articleList:[]
    }
  },
  methods:{
    handleSizeChange(){},
    handleCurrentChange(){}
  }
}
</script>

<style>
#search .el-input {
  width: 200px;
  margin-right: 20px;
}
</style>