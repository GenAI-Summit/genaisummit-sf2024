<template>
  <div class="swoperCont_days">
    <div class="tab">
      <div class="tab-item tab-item1" @click="dayActive = 'day1'" :class="dayActive == 'day1' ? 'active' : ''">
      <div class="daybg">Day1</div>
    </div>
      <div class="tab-item tab-item2" @click="dayActive = 'day2'" :class="dayActive == 'day2' ? 'active' : ''">
        <div class="daybg">Day2</div>
      </div>
      <div class="tab-item tab-item3" @click="dayActive = 'day3'" :class="dayActive == 'day3' ? 'active' : ''">
        <div class="daybg">Day3</div>
      </div>
    </div>
    <div v-if="dayActive == 'day1'" class="ss-content">
      <div class="time-list">
        <img src="../assets/images/ico_shijian.png" alt="">
        May 29, 2024
      </div>
      <div class="inner_ss-content">
        <AgendaSelector :items="eventsList0" />
      </div>
    </div>
    <div v-if="dayActive == 'day2'" class="ss-content">
      <div class="time-list">
        <img src="../assets/images/ico_shijian.png" alt="">
        May 30, 2024
      </div>
      <div class="inner_ss-content">
        <AgendaSelector :items="eventsList1" />
      </div>
    </div>
    <div v-if="dayActive == 'day3'" class="ss-content">
      <div class="time-list">
          <img src="../assets/images/ico_shijian.png" alt="">
          May 31, 2024
        </div>
      <div class="inner_ss-content">
        <AgendaSelector :items="eventsList2" />
      </div>
    </div>
  </div>

</template>

<script>
import { ref, computed, watch, onMounted } from "vue";
import { useStore } from "vuex";

import agendaData from "../utils/agenda.json";

import AgendaItem from "./AgendaItem.vue";
import AgendaSelector from "./AgendaSelector.vue";

export default {
  name: "",
  setup() {
    const store = useStore();
    const screenWidth = computed(() => {
      return store.state.screenWidth;
    });
    const pageSize = ref(3);
    const slidesToShow = ref(2.5);
    
    const eventsList0 = ref(agendaData[0].filter((item) => !item.hide));
    const eventsList1 = ref(agendaData[1].filter((item) => !item.hide));
    const eventsList2 = ref(agendaData[2].filter((item) => !item.hide));

    if (screenWidth.value < 800) {
      slidesToShow.value = 1.2;
    }
    onMounted(() => {
      
    });
    const dayActive = ref('day3')
    return {
      screenWidth,
      dayActive,
      eventsList0,
      eventsList1,
      eventsList2,
    };
  },
  components: {
    AgendaItem,
  },
  methods: {},
  mounted() {},
  unmounted() {},
};
</script>

<style scoped lang='scss'>
.slick-carousel2 {
  width: 100%;
  margin-top: 0.4rem;
}
.swiper_box {
  padding-left: 0.3rem;
  position: relative;
  &.np {
    padding-left: 0;
  }
  &.swiper_box1 {
    &.shadow-left {
      &::before {
        position: absolute;
        content: "";
        display: block;
        width: 100px;
        height: 100%;
        background: linear-gradient(
          270deg,
          #f4f9ff 0%,
          rgba(244, 249, 255, 0) 100%
        );
        top: 0;
        left: 50%;
        z-index: 999;
      }
    }
  }
  &.swiper_box3 {
    &.shadow-right {
      &::before {
        position: absolute;
        content: "";
        display: block;
        width: 100px;
        height: 100%;
        background: linear-gradient(
          270deg,
          #f4f9ff 0%,
          rgba(244, 249, 255, 0) 100%
        );
        top: 0;
        right: 50%;
        z-index: 999;
      }
    }
  }
}
.ss-content {
  width: 100%;
  background: #ffffff;
  .time-list{
    display: flex;
    align-items: center;
    font-family: Microsoft YaHei, Microsoft YaHei;
    font-weight: bold;
    font-size: .37rem;
    color: #0778D8;
    padding: .3rem;
    img{
      width: .45rem;
      margin-right: 5px;
    }
  }
  .img {
    position: relative;
    img {
      width: 100%;
    }
    .info {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      padding-left: 0.4rem;

      .title {
        font-family: Microsoft YaHei, Microsoft YaHei;
        font-weight: bold;
        font-size: 0.59rem;
        color: #202020;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
      .date {
        height: 0.5rem;
        line-height: 0.5rem;
        padding: 0 0.25rem;
        text-align: center;
        background: linear-gradient(
          90deg,
          #ffffff 43%,
          rgba(255, 255, 255, 0.7) 100%
        );
        font-family: Microsoft YaHei, Microsoft YaHei;
        font-weight: 400;
        font-size: 0.296rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
        margin-top: 0.1rem;
        &.d1 {
          color: #0382ee;
        }
        &.d2 {
          color: #ff8a00;
        }
        &.d3 {
          color: #00b934;
        }
      }
    }
  }
  .inner_ss-content {
    width: 100%;
    color: #000000;
    overflow: hidden;
    overflow-y: auto;
    padding: 0.3rem;
    .ss-content_item {
      padding-left: 0.44rem;
      /*border-left: 1px solid rgba(0, 0, 0, 0.2);*/
      position: relative;
      padding-bottom: 0.7407rem;
      font-family: HarmonyOS Sans SC bold;
      .flagBg {
        width: 12px;
        height: 12px;
        position: absolute;
        top: 0;
        left: -6px;
      }
      .title {
        // padding-top: 0.44rem;
        font-size: 0.44rem;
        font-weight: bold;
        font-family: HarmonyOS Sans SC bold;
      }
      .detail {
        font-size: 0.2963rem;
        font-family: HarmonyOS Sans SC Regular;
        margin-top: 0.2963rem;
      }
    }
  }
}
.swoperCont_days {
  .tab {
    position: -webkit-sticky;
    position: sticky;
    top: 0;

    display: flex;
    width: 100%;
    height: 1rem;
    margin-top: 0.3rem;
    .tab-item{
      font-family: Microsoft YaHei, Microsoft YaHei;
      font-weight: bold;
      font-size: .37rem;
      color: rgba(7,120,216,0.3);
      .daybg{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      &.tab-item1.active{
        .daybg{
          background: url('../assets/images/day1_active.png');
          background-size: 100% 100%;
          color: #FFFFFF;
        }
      }
      &.tab-item2.active{
        .daybg{
          background: url('../assets/images/day2_active.png');
          background-size: 100% 100%;
          color: #FFFFFF;
        }
      }
      &.tab-item3.active{
        .daybg{
          background: url('../assets/images/day3_active.png');
          background-size: 100% 100%;
          color: #FFFFFF;
        }
      }
    }
    .tab-item1,.tab-item2{
      width: 33%;
      background: rgba(220,236,251,0.5);
      height: 1.1rem;
    }
    .tab-item3{
      height: 1.1rem;
      width: 34%;
      background: url('../assets/images/moren_day.png');
      background-size: 100% 100%;
    }
  }
}

</style>
