<template>
  <div>
    <h2>深入v-model</h2>
   <!--
     原生标签上的v-model本质:动态的value属性和原生的input事件监听
   -->
   <input type="text" v-model="name1">
    <span>{{name1}}</span>
    <br><br>

    <input type="text" :value="name2" @input="name2=$event.target.value">
    <span>{{name2}}</span>


       <!--
       组件标签标签上的v-model本质:动态的value属性和自定义的input事件监听
        -->

        <CustomInput v-model="name3"/>
        <span>{{name3}}</span>
        <br><br>


        <CustomInput :value="name4" @input="name4=$event"/>
        <span>{{name4}}</span>
        <br><br>
  </div>
</template>

<script type="text/ecmascript-6">
  import CustomInput from './CustomInput.vue'
  export default {
    name: 'ModelTest',
    data() {
      return {
        name1:'彭于晏真帅',
        name2:'今天天气挺不错',
        name3:'处处好风光',
        name4:'权利的游戏'
      }
    },

    components: {
      CustomInput
    }
  }
</script>
