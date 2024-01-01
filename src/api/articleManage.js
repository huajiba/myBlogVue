import request from '@/utils/request'

export default {
  getArticleList(searchModel){
    return request({
      url:'/blog/getArticleList',
      method:'get',
      params:{
        pageNo:searchModel.pageNo,
        pageSize:searchModel.pageSize,
        title:searchModel.title
      }
    });
  }
} 