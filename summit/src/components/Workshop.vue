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
    <div class="workshop-pic">
      <img
        :src="getImage(item.image)"
        alt="workshop image"
        @click="openUrl(item.url)"
        loading="lazy"
      />
    </div>
    <div class="workshop-info">
      <div class="workshop-title">
        Topic: {{ item.topic ? item.topic : `Will be provided by speakers soon`}}
      </div>
      <div class="workshop-description">
        Description: {{ item.description ? item.description : `Will be provided by speakers soon` }}
      </div>
    </div>
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
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      margin-top: 0.2rem;
      margin-bottom: 0.2rem;
      .workshop-pic {
        width: 35%;
      }
      .workshop-info {
        width: 100%;
        border-radius: 0rem;
      }
    }
  }

  .workshop-item {
    display: flex;
    align-items: flex-start;
    width: 100%;
    text-align: center;
    height: 100%;
    z-index: 2;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    background-color: #ffffff;
    border-radius: 0.2rem;


    .workshop-pic {
      background-color: #ffffff;
      border-radius: 1.5rem;
      width: 20%;
      z-index: -1;
      display: block;
      transition: all linear 0.3s;
      cursor: pointer;
      margin-left: 0.1rem;
      margin-top: 0.1rem;

      img {
        width: 80%;
        height: auto;
        margin-left: 0.2rem;
      }

      &:hover {
        background: #008aff;
      }
    }
    
    .workshop-info {
      width: 75%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      text-align: left;
      font-size: 2rem;
      color: #000000;
      margin-left: 0.2rem;
      margin-top: 0.1rem;
      background-color: #ffffff;
      padding: 0.2rem;
      border-radius: 0.2rem;

      .workshop-title {
        font-family: HarmonyOS Sans SC Bold;
      }

      .workshop-description {
        margin-top: 0.2rem;
        font-family: HarmonyOS Sans SC Regular;
      }
    }
  }
}
</style>
