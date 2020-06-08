<template>
<div>
    <!-- 商品分类导航 -->
  <TypeNav />
  <!-- 列表 -->
 <ListContainer />
  <!-- 今日推荐 -->
  <TodayRecommend />
    <!-- 商品排行 -->
  <Rank/>
  <Like />
  <Floor />
  <Brand />
</div>
</template>

<script type="text/ecmascript-6">
import ListContainer from './ListContainer'
import TodayRecommend from './TodayRecommend'
import Rank from './Rank'
import Like from './Like/Like'
import Floor from './Floor/Floor'
import Brand from './Brand/Brand'


export default {
      name:'Home',

      mounted() {
        // 分发给异步action请求获取楼层列表数据
        this.$store.dispatch('getFloors')
      },





      components:{
          ListContainer,
          TodayRecommend,
          Rank,
          Like,
          Floor,
          Brand
      }
}
</script>

<style lang="less" scoped>


</style>
