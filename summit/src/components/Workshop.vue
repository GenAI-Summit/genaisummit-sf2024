<template>
  <div
    class="workshop-items"
    :class="screenWidth < 600 ? 'mb' : ''"
    data-aos="fade-up"
  >
    <div
      class="workshop-item"
      v-for="item in workshop"
      :key="item.name"
    >
      <img
        class="workshop-pic"
        :src="getImage(item.image)"
        alt="workshop image" 
        @click="openUrl(item.url)" 
        loading="lazy"
      />
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

import workshopData from "../utils/workshop.json";

export default {
  name: 'Seminar',
  setup() {
    const store = useStore();
    const screenWidth = computed(() => store.state.screenWidth);

    const workshop = ref(workshopData);

    const getImage = (image) => {
      return new URL(`/src/assets/images/sponsors/${image}`, import.meta.url).href;
    }

    const openUrl = (url) => {
      if (url) {
        window.open(url, "_blank");
      }
    }

    return {
      workshop,
      getImage,
      openUrl,
      screenWidth,
    }
  }
}
</script>

<style scope lang="scss">
.workshop-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  overflow: hidden;

  &.mb {
    .workshop-item {
      margin-bottom: 0.3rem;
      height: 100%;
      margin-left: 0.1rem;
      .workshop-pic {
        width: 90%;
        height: auto;
      }
    }
  }

  .workshop-item {
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
    .workshop-pic {
      height: 1.8rem;
      z-index: -1;
      display: block;
    }
  }
}
</style>
