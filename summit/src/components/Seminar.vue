<template>
  <div
    class="seminar-items"
    :class="screenWidth < 600 ? 'mb' : ''"
    data-aos="flip-up"
  >
    <div class="seminar-item" v-for="item in seminar" :key="item.name">
      <img
        class="seminar-pic"
        :src="getImage(item.image)" 
        alt="seminar image" 
        @click="openUrl(item.url)" 
        loading="lazy"
      />
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

import seminarData from "../utils/seminar.json";

export default {
  name: 'Seminar',
  setup() {
    const store = useStore();
    const screenWidth = computed(() => store.state.screenWidth);

    const seminar = ref(seminarData);

    const getImage = (image) => {
      return new URL(`/src/assets/images/sponsors/${image}`, import.meta.url).href;
    }

    const openUrl = (url) => {
      window.open(url, "_blank");
    }

    return {
      seminar,
      getImage,
      openUrl,
      screenWidth,
    }
  }
}
</script>

<style scope lang="scss">
.seminar-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  overflow: hidden;

  &.mb {
    .seminar-item {
      margin-bottom: 0.3rem;
      height: 100%;
      margin-left: 0.1rem;
      .seminar-pic {
        width: 90%;
        height: auto;
      }
    }
  }

  .seminar-item {
    display: flex;
    justify-content: center;
    width: 48%;
    background-color: #ffffff;
    text-align: center;
    cursor: pointer;
    height: 1.8rem;
    z-index: 2;
    border-radius: 1.5rem;
    margin-left: 1%;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    transition: all linear 0.3s;

    &:hover {
      background: #008aff;
      height: 100%;
    }
    .seminar-pic {
      height: 1.8rem;
      z-index: -1;
      display: block;
    }
  }
}
</style>
