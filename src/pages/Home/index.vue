<template>
<div>
    <!-- 商品分类导航 -->
  <TypeNav />
  <!-- 列表 -->
 <ListContainer />


</div>
</template>

<script type="text/ecmascript-6">
import ListContainer from './ListContainer'
export default {
      name:'Home',

      components:{
          ListContainer
      }
}
</script>

<style lang="less" scoped>


</style>
