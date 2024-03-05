<template>
  <div class="speaker">
    <img class="per" :src="item.image" alt="">
    <div class="zw">
        <div class="info">
            <div class="name">{{ item.name }}</div>
            <div class="job">{{ item.job }}</div>
            <div class="job">{{ item.tip }}</div>
            <button class="Introduction" @click="openDialog(item.detail)">Introduction</button>
        </div>
    </div>
    <div class="contact" data-aos="fade-up">
        <img v-if="item.website != ''" @click="openUrl(item.website)" src="../assets/images/ico_w.png" alt="">
        <img v-if="item.twitter != ''" @click="openUrl(item.twitter)" src="../assets/images/ico_x.png" alt="">
        <img v-if="item.linkedin != ''" @click="openUrl(item.linkedin)" src="../assets/images/ico_in.png" alt="">
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue';
import { useStore} from 'vuex'
import EventBus from "../utils/EventBus.js";

export default {
  name: '',
  props: ['item'],
  setup(props) {
    const item = ref(props.item)
    const openUrl = (url) => {
      if(url == '') return
      window.open(url)
    }
    const openDialog = (url) => {
      EventBus.$emit("openDialog", url);
    }
    return {
        item,
        openUrl,
        openDialog,
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

.speaker{
    padding: .3rem .3rem 0 .3rem;
    background: #FFFFFF;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border: 2px solid #FFFFFF;
    &:hover{
        border: 2px solid #008AFF;
        .info{
            animation: slideOut .5s forwards;
        }
        .contact{
            display: flex;
            animation: slideIn 1s forwards;
        }
    }
    .contact{
        position: absolute;
        right: .5rem;
        top: .5rem;
        flex-direction: column;
        display: none;
        img{
            width: .63rem;
            cursor: pointer;
            margin-bottom: .2rem;
        }
    }
    .per{
        width: 100%;
    }
    .zw{
        width: 100%;
        background: #FFFFFF;
        height: 1.4rem;
    }
    .info{
        background: #FFFFFF;
        text-align: center;
        position: absolute;
        bottom: -.7rem;
        left: 0;
        width: 100%;
        padding-top: .2rem;
        
        .name{
            font-family: HarmonyOS Sans SC, HarmonyOS Sans SC;
            font-weight: bold;
            font-size: .37rem;
            color: #1D2A42;
            line-height: .5rem;
            font-style: normal;
            text-transform: none;
        }
        .job{
            font-family: HarmonyOS Sans SC, HarmonyOS Sans SC;
            font-weight: 400;
            font-size: .296rem;
            color: #78808F;
            line-height: .5rem;
            text-align: center;
            font-style: normal;
        }
        .Introduction{
            width: 90%;
            height: .7rem;
            background: #008AFF;
            border-radius: 0px 0px 0px 0px;
            font-family: HarmonyOS Sans SC, HarmonyOS Sans SC;
            font-weight: 400;
            font-size: .259rem;
            color: #FFFFFF;
            font-style: normal;
            border: none;
            cursor: pointer;
            margin: 0 auto;
        }
    }
    
}
@keyframes slideOut {
  from {
    bottom: -.7rem;
  }
  to {
    bottom: .2rem;
  }
}
@keyframes slideIn {
  from {
    right: .8rem;
  }
  to {
    right: .5rem;
  }
}
</style>