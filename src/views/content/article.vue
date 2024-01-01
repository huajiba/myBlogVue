<template>
  <div>
    <!-- 搜索栏 -->
    <el-card id="search">
      <el-row>
        <el-col :span="20">
          <el-input v-model="searchModel.title" placeholder="标题" clearable></el-input>
          <el-button @click="getArticleList" type="primary" round icon="el-icon-search">查询</el-button>
        </el-col>
        <el-col :span="4" align="right">
          <el-button type="primary" icon="el-icon-plus" circle></el-button>
        </el-col>
      </el-row>
    </el-card>
    <!-- 结果列表 -->
    <el-card>
      <el-table :data="articleList" style="width: 100%">
        <el-table-column label="序号" width="180">
          <template slot-scope="scope">
            {{ (searchModel.pageNo - 1) * searchModel.pageSize + scope.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column prop="title" label="标题" width="200">
        </el-table-column>
        <el-table-column prop="categoryId" label="分类">
        </el-table-column>
        <el-table-column prop="isTop" label="置顶">
        </el-table-column>
        <el-table-column prop="isRecommend" label="推荐">
        </el-table-column>
        <el-table-column prop="isPublished" label="可见性">
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间">
        </el-table-column>
        <el-table-column prop="updateTime" label="最近更新">
        </el-table-column>
        <el-table-column prop="address" label="操作">
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 分页组件 -->
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
      :current-page="searchModel.pageNo" :page-sizes="[5, 10, 15, 20]" :page-size="searchModel.pageSize"
      layout="total, sizes, prev, pager, next, jumper" :total="total">
    </el-pagination>
  </div>
</template> 

<script>
import ArticleApi from '@/api/articleManage'
export default {
  data() {
    return {
      total: 0,
      searchModel: {
        pageNo: 1,
        pageSize: 10
      },
      articleList: []
    }
  },
  methods: {
    handleSizeChange(pageSize) {
      this.searchModel.pageSize = pageSize
      this.getArticleList();
    },
    handleCurrentChange(pageNo) {
      this.searchModel.pageNo = pageNo
      this.getArticleList();
    },
    getArticleList() {
      ArticleApi.getArticleList(this.searchModel).then(response => {
        this.articleList = response.data.rows;
        this.total = response.data.total;
      });
    }
  },
  created() {
    this.getArticleList();
  }
}
</script>

<style>
#search .el-input {
  width: 200px;
  margin-right: 20px;
}
</style>