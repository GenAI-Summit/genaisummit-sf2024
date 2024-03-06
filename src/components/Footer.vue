<template>
  <div class="footer">
   <div class="info" :class="screenWidth > 600 ? '' : 'mb'">
      <div class="item">
       <div>
        <div class="title">Summit Information</div>
        <div class="list">May 29 - May 31, 2024</div>
        <div class="list">Palace of Fine Arts, San Francisco, CA 94123</div>
        <div class="list">genaix@gptdao.ai</div>
        <div class="list h" @click="openUrl('https://linktr.ee/gptdao')">Contact Us</div>
       </div>
      </div>
      <div class="item">
        <div>
          <div class="title">Contact Us</div>
          <div class="list">We sincerely invite you to join us, bring your creativity and ideals, and explore the future of generative AI together. Please contact us for more information about the Generative AI Summit San Francisco 2024.4</div>
          <div class="list">
            <img @click="openUrl('https://www.gptdao.ai/')" src="../assets/images/FB.png" alt="">
            <img @click="openUrl('https://twitter.com/GPTDAOGLOBAL')" src="../assets/images/IG.png" alt="">
            <img @click="openUrl('https://www.linkedin.cn/incareer/company/gptdao')" src="../assets/images/WA.png" alt="">
          </div>
        </div>
      </div>
   </div>
   <div class="bottom">
    Copyright  2024 GPTDAO. All rights reserved
   </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue';
import { useStore} from 'vuex'

export default {
  name: '',
  setup() {
    const store = useStore();

    const openUrl = (url) => {
      window.open(url)
    }
    //适配
    const screenWidth = computed(() => {
      return store.state.screenWidth;
    });
    return {
      openUrl,
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
.footer{
  background: #000000;
  font-family: HarmonyOS Sans SC, HarmonyOS Sans SC;
  font-weight: 400;
  font-size: .296rem;
  color: rgba(255,255,255,.5);
  line-height: .46rem;
  text-align: left;
  font-style: normal;
  text-transform: none;
  padding: 0 0 .5rem;
  .info{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 .5rem;
    &.mb{
      .item{
        width: 100%;
      }
    }
    .item{
      width: 50%;
      display: flex;
      flex-direction: column;
      margin-top: 1rem;
      .title{
        font-family: HarmonyOS Sans SC, HarmonyOS Sans SC;
        font-weight: bold;
        font-size: 24px;
        color: #FFFFFF;
        line-height: 28px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
      .list{
        margin-top: .2rem;

        &.h{
          cursor: pointer;
        }
        img{
          margin-right: .3rem;
          cursor: pointer;
        }
      }
    }
  }
  .bottom{
    font-family: HarmonyOS Sans SC, HarmonyOS Sans SC;
    font-weight: 400;
    font-size: .259rem;
    color: rgba(255,255,255,.5);
    line-height: .296rem;
    text-align: center;
    font-style: normal;
    text-transform: none;
    margin-top: .5rem;
    border-top: 1px solid rgba(255,255,255,.5);
    padding-top: .5rem;
  }
}
</style>