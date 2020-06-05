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
export default {
    name:'App',
    components:{
      Header,
      Footer
    }
}

</script>

<style scoped>


</style>

