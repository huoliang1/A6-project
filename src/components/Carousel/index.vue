<template>

  <div class="swiper-container" id="mySwiper" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in carouseList" :key="item.id">
        <img :src="item.imgUrl" />
      </div>

    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  export default {
    name: 'Carousel',


    props:{
      carouseList:Array,  //轮播数组数据
      autoplay:Boolean
    },

    watch: {
      // 监视carouseList的回调函数==>当banner发生海边的是后自动调用
      // carouseList(value) {
      //   //利用nexTick 延迟到界面更新之后采取创建swiper
      //   this.$nextTick(() => {
      //     this.initSwiper()
      //   })

      // }

      carouseList:{
        // 监视回调
        handler(value){
          if(this.carouseList.length === 0) return
          console.log('carouseList--',value);
           //利用nexTick 延迟到界面更新之后采取创建swiper
              this.$nextTick(() => {
                this.initSwiper()
              })

        },
          // immediate: true,  //初始化显示就会调用一次
      }

    },
    // 跟上面的  // immediate: true,  //初始化显示就会调用一次  二选一
    // 初始化显示界面后立即执行
    mounted() {
      // 如果初始时已经有数据了，就创建一个对应的swiper对象
      if(this.carouseList.length > 0){   //已经显示了
        console.log('+++',this.carouseList.length);
        this.initSwiper()  //就立即创建swiper，不需要什么nextTick()或者定时器
      }

    },

        methods: {
            initSwiper(){
              console.log('创建swiper对象');

                /*
                  创建初始化swiper对象
                */
                    new Swiper (this.$refs.swiper, {
                    // direction: 'horizontal', // 水平切换选项   默认可以不写
                    loop: true, // 循环模式选项

                    autoplay:this.autoplay,  //是否自动轮播
                    // 如果需要分页器
                    pagination: {
                      el: '.swiper-pagination',
                    },

                    // 如果需要前进后退按钮
                    navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    },
              })


            },
        }
  }

</script>

<style lang="less" scoped>


</style>
