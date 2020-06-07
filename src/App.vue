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
import {reqCategorys} from './api/index'
export default {
    name:'App',

   async mounted() {
        // 测试调用接口请求函数获取数据
        const result = await reqCategorys()
        console.log('result',result);

    },





    components:{
      Header,
      Footer
    }
}

</script>

<style scoped>


</style>

