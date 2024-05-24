<template>
  <div
    class="media-items"
    :class="screenWidth < 600 ? 'mb' : ''"
    data-aos="zoom-in"
  >
    <div
      class="media-item"
      v-for="item in media"
      :key="item.name"
    >
      <img
        class="media-pic"
        :src="getImage(item.image)"
        alt="media image"
        @click="openUrl(item.url)" 
        loading="lazy"
      />
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

import mediaData from "../utils/media.json";

export default {
  name: 'Seminar',
  setup() {
    const store = useStore();
    const screenWidth = computed(() => store.state.screenWidth);

    const media = ref(mediaData.filter((item) => !item.hide));

    const getImage = (image) => {
      return new URL(`/src/assets/images/media/${image}`, import.meta.url).href;
    }

    const openUrl = (url) => {
      if (url) {
        window.open(url, "_blank");
      }
    }

    return {
      media,
      getImage,
      openUrl,
      screenWidth,
    }
  }
}
</script>

<style scope lang="scss">
.media-items {
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  &.mb {
    .media-item {
      margin-bottom: 0.3rem;
      width: 32%;
      margin-left: 0.1rem;
    }
  }

  .media-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 19%;
    background-color: #ffffff;
    text-align: center;
    cursor: pointer;
    z-index: 2;
    border-radius: 1.5rem;
    margin-left: 1%;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    transition: all linear 0.3s;

    &:hover {
      background: #008aff;
    }
    .media-pic {
      width: 80%;
      z-index: -1;
      display: block;
    }
  }
}
</style>
