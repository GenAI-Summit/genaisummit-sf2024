<template>
    <div ref="slick" class="slick-carousel1">
        <div>
           <div class="swiper-box img1" :class="screenWidth > 600 ? '' : 'mb'">
                <div class="img_content">
                    <img src="../assets/images/typeA.png" alt="">
                </div>
                <div class="price_content">
                    <div class="title">Booth Type A</div>
                    <div class="s_title">10ft x 10 ft (3m x 3m)</div>
                    <div class="price">
                        <span class="big">USD9,999</span><span class="bold"> (Early Bird)</span>
                    </div>
                    <div class="list">
                        10 x 10 ft Space Turnkey Solution <br>
                        1x Round Table<br>
                        3x Bar Stool Chairs<br>
                        6x Back Walls Available for Posters or Designs(3.28ft x 7.87ft or 1m x 2.4m)<br>
                        Customer Curved Counter with Doors for Storage<br>
                        3x Event Tickets<br>
                    </div>
                    <div class="page" v-if="screenWidth > 600">
                        <div class="fk" @click="slickPrev">
                        <img class="d" src="../assets/images/Ai_Button_left.png" alt="">
                        <img class="a" src="../assets/images/Ai_Button_left_white.png" alt="">
                        </div>
                        <div class="fk long">
                        <div class="">
                            <span class="big">{{ swiperPageInfo.nowPage }}</span>/{{ swiperPageInfo.pages }}
                        </div>
                        </div>
                        <div class="fk" @click="slickNext">
                        <img class="d" src="../assets/images/Ai_Button_right.png" alt="">
                        <img class="a" src="../assets/images/Ai_Button_right_white.png" alt="">
                        </div>
                    </div>
                </div>
           </div>
        </div>
        <div>
           <div class="swiper-box img1" :class="screenWidth > 600 ? '' : 'mb'">
                <div class="img_content">
                    <img src="../assets/images/typeB.png" alt="">
                </div>
                <div class="price_content">
                    <div class="title">Booth Type B</div>
                    <div class="s_title">6.5ft x 6.5 ft (2m x 2m)</div>
                    <div class="price">
                        <span class="big">USD6,999</span><span class="bold"> (Early Bird)</span>
                    </div>
                    <div class="list">
                        6.5 x 6.5 ft Space Turnkey Solution <br>
                        1x Round Table<br>
                        3x Bar Stool Chairs<br>
                        4x Back Walls Available for Posters or Designs (3.28ft x 7.87ft or 1m x 2.4m)<br>
                        Customer Curved Counter with Doors for Storage<br>
                        2x Event Tickets<br>
                    </div>
                    <div class="page" v-if="screenWidth > 600">
                        <div class="fk" @click="slickPrev">
                        <img class="d" src="../assets/images/Ai_Button_left.png" alt="">
                        <img class="a" src="../assets/images/Ai_Button_left_white.png" alt="">
                        </div>
                        <div class="fk long">
                        <div class="">
                            <span class="big">{{ swiperPageInfo.nowPage }}</span>/{{ swiperPageInfo.pages }}
                        </div>
                        </div>
                        <div class="fk" @click="slickNext">
                        <img class="d" src="../assets/images/Ai_Button_right.png" alt="">
                        <img class="a" src="../assets/images/Ai_Button_right_white.png" alt="">
                        </div>
                    </div>
                </div>
           </div>
        </div>
    </div>
  </template>
  
  <script>
  import { ref, computed, watch,onMounted } from 'vue';
  import { useStore} from 'vuex'
  import $ from 'jquery'; // 引入 jQuery
  
  export default {
    name: '',
    setup() {
      const store = useStore();
      //适配
      const screenWidth = computed(() => {
        return store.state.screenWidth;
      });
      const pageSize = ref(1)
      const nowPage = ref(1)
      const total = 2
      const pages = ref(Math.ceil(total/pageSize.value))
      const options = {
          autoplaySpeed: 5000,
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          infinite: true,
          slidesToShow: pageSize.value,
          slidesToScroll: pageSize.value,
      }
      const swiperPageInfo = ref({
        nowPage: 1,
        pages: 2
      })
      onMounted(() => {
          $(".slick-carousel1").slick(options);
          $('.slick-carousel1').on('afterChange', function(slick, currentSlide,index){
              nowPage.value = index/pageSize.value + 1
              sutmitPageInfo()
          });
          sutmitPageInfo()
      })
      const sutmitPageInfo = () => {
        swiperPageInfo.value = {
              nowPage: nowPage.value,
              pages: pages.value
          }
      }
      const slickNext = () => {
          $('.slick-carousel1').slick('slickNext');
      }
      const slickPrev = () => {
          $('.slick-carousel1').slick('slickPrev');
      }
      return {
          slickNext,
          slickPrev,
          swiperPageInfo,
          screenWidth
      } 
    },
    components: {
    },
    methods: {
      
    },
    mounted() {
      
    },
    unmounted() {
      
    },
  }
  </script>
  
  <style scoped lang='scss'>
  .slick-carousel1{
      width: 100%;
      padding: .4rem;
      background: #FFFFFF;
  }
  .swiper-box{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    &.mb{
     display: block;
    }
    .img_content{
        flex: 1;
        img{
            width: 100%;
        }
    }
    .price_content{
        flex: 1;
        padding: .4rem 0 .4rem .6rem;
        .title{
            font-family: HarmonyOS Sans SC, HarmonyOS Sans SC;
            font-weight: bold;
            font-size: .45rem;
            color: #000000;
            line-height: .52rem;
            text-align: left;
            font-style: normal;
            text-transform: none;
        }
        .s_title{
            margin-top: .3rem;
            font-family: HarmonyOS Sans SC, HarmonyOS Sans SC;
            font-weight: 400;
            font-size: .296rem;
            color: #000000;
            line-height: .37rem;
            text-align: left;
            font-style: normal;
            text-transform: none;
        }
        .price{
            margin-top: .556rem;
            .big{
                font-family: HarmonyOS Sans SC, HarmonyOS Sans SC;
                font-weight: bold;
                font-size: .45rem;
                color: #008AFF;
                text-align: left;
                font-style: normal;
                text-transform: none;
            }
            .blod{
                font-family: HarmonyOS Sans SC, HarmonyOS Sans SC;
                font-weight: 400;
                font-size: .296rem;
                color: #000000;
                text-align: left;
                font-style: normal;
                text-transform: none;
            }
        }
        .list{
            margin-top: .3rem;
            font-family: HarmonyOS Sans SC, HarmonyOS Sans SC;
            font-weight: 400;
            font-size: .296rem;
            color: rgba(0,0,0,.5);
            line-height: .4rem;
            text-align: left;
            font-style: normal;
            text-transform: none;
        }
    }
  }
  .page {
    display: flex;
    margin-top: .6rem;
    .fk {
      height: 0.74rem;
      width: 0.74rem;
      border: 1px solid #000000;
      cursor: pointer;
      margin-right: 0.2rem;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      .d {
        display: inline-block;
      }
      .a {
        display: none;
      }
      &:hover {
        background: #008aff;
        border: 1px solid #008aff;
        .d {
          display: none;
        }
        .a {
          display: inline-block;
        }
      }
      &.long {
        width: 1.64rem;
        &:hover {
          border: 1px solid #000000;
          background: none;
        }
        & > div {
          display: flex;
          align-items: end;
        }
        .big {
          font-family: HarmonyOS Sans SC, HarmonyOS Sans SC;
          font-weight: bold;
          font-size: 24px;
          color: #000000;
          line-height: 28px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
      }
    }
  }
  </style>