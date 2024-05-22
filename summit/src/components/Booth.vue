<template>
  <div
    class="booth-container"
    :class="screenWidth < 600 ? 'mb' : ''"
    :style="boothStyle"
  >
    <div
      class="booth-items"
      ref="boothItems"
      data-aos="fade-up"
    >
      <div
        class="booth-item"
        v-for="item in booth"
        :key="item.name"
      >
        <img
          class="booth-pic"
          :src="getImage(item.image)"
          alt="booth image"
          @click="openUrl(item.url)" 
          loading="lazy"
        />
      </div>
    </div>
  </div>
  <div
    v-if="!showAll"
    class="btn"
    @click="onMore"
  >
    More
    <img
      class="a"
      src="/src/assets/images/general_return_xia.png"
      alt=""
    />
    <img
      class="d"
      src="/src/assets/images/general_return_xia_d.png"
      alt=""
    />
  </div>
  <div
    v-else
    class="btn"
    @click="onHide"
  >
    Hide
    <img
      class="a"
      src="/src/assets/images/general_return_up.png"
      alt=""
    />
    <img
      class="d"
      src="/src/assets/images/general_return_up_d.png"
      alt=""
    />
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

import boothData from "../utils/booth.json";

export default {
  name: 'Seminar',
  setup() {
    const store = useStore();
    const screenWidth = computed(() => store.state.screenWidth);

    const booth = ref(boothData);
    const boothItems = ref(null);
    const boothStyle = ref({
      height: "10rem",
    });

    const getImage = (image) => {
      return new URL(`/src/assets/images/sponsors/${image}`, import.meta.url).href;
    }

    const openUrl = (url) => {
      if (url) {
        window.open(url, "_blank");
      }
    }

    const showAll = ref(false);
    const onMore = () => {
      showAll.value = true;
      boothStyle.value.height = boothItems.value.offsetHeight + "px";
      console.log(boothStyle.value.height);
    }
    const onHide = () => {
      showAll.value = false;
      boothStyle.value.height = "10rem";
      console.log(boothStyle.value.height);
    }

    return {
      booth,
      getImage,
      openUrl,
      screenWidth,
      showAll,
      onMore,
      onHide,
      boothStyle,
      boothItems,
    }
  }
}
</script>

<style scope lang="scss">
.booth-container {
  overflow: hidden;
  transition: height 0.5s linear;

  .booth-items {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  
    &.mb {
      .booth-item {
        margin-bottom: 0.3rem;
        width: 32%;
        margin-left: 0.1rem;
      }
    }
  
    .booth-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 19%;
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
      .booth-pic {
        width: 80%;
        z-index: -1;
        display: block;
      }
    }
  }
}
  
.btn {
  border: 1px solid #008aff;
  font-weight: bold;
  font-family: HarmonyOS Sans SC Bold;
  font-size: 0.296rem;
  color: #008aff;
  padding: 0.1rem 0.8rem;
  text-align: center;
  display: inline-block;
  margin: 0 auto;
  margin-top: 0.5rem;
  display: flex;
  width: 2.5rem;
  justify-content: space-around;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s ease;
  z-index: 2;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: #008aff;
    transition: left 0.15s ease;
    z-index: -1;
  }
  &:hover::before {
    left: 0;
  }
  img {
    margin: 0 0.1rem;
    &.d {
      display: block;
    }
    &.a {
      display: none;
    }
  }
  &:hover {
    color: white;
    img {
      &.d {
        display: none;
      }
      &.a {
        display: block;
      }
    }
  }
}
</style>
