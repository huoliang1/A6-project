<template>
<div>
  <TypeNav />
<h2>Search</h2>

<h3>keyword:{{$route.params.keyword}}</h3>
<h3>keyword2:{{$route.query.keyword2}}</h3>
<h3>keyword2:{{keyword3}}</h3>
<h3>keyword2:{{keyword4}}</h3>
</div>
</template>

<script type="text/ecmascript-6">
export default {
    name:'Search',
    props:['keyword3','keyword4']
}
</script>

<style lang="less" scoped>


</style>
