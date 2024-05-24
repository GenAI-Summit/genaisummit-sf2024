<template>
  <div
    class="seminar-items"
    :class="screenWidth < 600 ? 'mb' : ''"
    data-aos="fade-up"
  >
  <div
    class="seminar-item"
    v-for="item in seminar"
    :key="item.name"
  >
    <div class="seminar-pic">
      <img
        :src="getImage(item.image)"
        alt="seminar image"
        @click="openUrl(item.url)"
        loading="lazy"
      />
    </div>
    <div class="seminar-info">
      <div class="seminar-title bold">
        Topic: {{ item.topic ? item.topic : `Will be provided by speakers soon`}}
      </div>
      <div class="seminar-description">
        <span class="bold">
          Description: 
        </span>
        {{ item.description ? item.description : `Will be provided by speakers soon` }}
      </div>
    </div>
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
      if (url) {
        window.open(url, "_blank");
      }
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
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      margin-top: 0.2rem;
      margin-bottom: 0.2rem;
      .seminar-pic {
        margin-top: 0.02rem;
        width: 35%;
      }
      .seminar-info {
        width: 100%;
        border-radius: 0rem;
      }
    }
  }

  .seminar-item {
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


    .seminar-pic {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ffffff;
      border-radius: 1.5rem;
      width: 20%;
      z-index: -1;
      transition: all linear 0.3s;
      cursor: pointer;

      img {
        width: 80%;
        height: auto;
      }

      &:hover {
        background: #008aff;
      }
    }
    
    .seminar-info {
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
      font-family: HarmonyOS Sans SC Regular;
      line-height: 1.25;

      .seminar-description {
        margin-top: 0.2rem;
      }
      .bold {
        font-family: HarmonyOS Sans SC Bold;
      }
    }
  }
}
</style>
