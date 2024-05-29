<template>
  <div class="maps">
    <img
      v-for="(item, index) in maps"
      :key="index"
      class="img"
      :src="item"
      alt=""
      @click="showImage(item)"
    />

    <div
      v-if="showModal"
      class="modal"
      @click.self="closeModal"
    >
      <div class="modal-content">
        <img :src="currentImage" alt="Enlarged image" class="enlarged-image">
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'MapSwiper',
  setup() {
    const showModal = ref(false);
    const currentImage = ref(null);
    const maps = ref([
      new URL('../assets/images/map.webp', import.meta.url).href,
    ]);
    /*
    const maps = ref([
      new URL('../assets/images/Floormap1.jpg', import.meta.url).href,
      new URL('../assets/images/Floormap2.jpg', import.meta.url).href,
    ]);
    */


    const showImage = (image) => {
      currentImage.value = image;
      showModal.value = true;
    };

    const closeModal = () => {
      showModal.value = false;
    };

    return {
      maps,
      showModal,
      closeModal,
      currentImage,
      showImage,
    };
  },
};
</script>

<style scoped lang="scss">
.maps {
  display: flex;
  justify-content: center;
  align-items: center;

  .img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  .modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .modal-content {
    position: relative;
    background: white;
    padding: 5px;
  }

  .enlarged-image {
    max-width: 90vw;
    max-height: 90vh;
  }
}
</style>

