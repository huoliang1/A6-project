<template>
<div>
    <Header/>
    <router-view></router-view>
    <Footer v-if="!$route.meta.isHideFooter"></Footer>

</div>
</template>

<script type="text/ecmascript-6">
import Header from './components/Header'
import Footer from './components/Footer'
// import {reqCategoryList,reqFloors} from './api'
export default {
    name:'App',

   async mounted() {  //在路由切换时候不会重复执行
        // 测试调用接口请求函数获取数据
        // const result = await reqCategoryList()
        // console.log('result',result);

        // const result = await reqFloors()
         // console.log('result--',result);



        // 分发给异步action请求获取分类数据   在切换路由时不会重新执行
        this.$store.dispatch("getCategoryList")

  },





    components:{
      Header,
      Footer
    }
}

</script>

<style scoped>


</style>

