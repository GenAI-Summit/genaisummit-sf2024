<template>
  <div class="modal" v-if="visible" @click="closeModal">
    <div class="img-content">
      <div class="detail" :style="style" @click.stop>
        <div class="text-overlay">
          <p class="name">{{ speaker.name }}</p>
          <p class="job">{{ speaker.job }}</p>
          <p class="tip">{{ speaker.tip }}</p>
          <p class="description">{{ "description..." }}</p>
        </div>
        <img class="info" :src="speaker.detail" alt="" />
        <div class="setting">
          <img
            src="../assets/images/close.png"
            @click="closeModal"
            alt=""
          />
          <img
            src="../assets/images/all.png"
            alt=""
            @click.stop="pullAll"
            v-if="!pullAllStatus"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const style = ref({ width: "50%" });
    const store = useStore();
    const screenWidth = computed(() => store.state.screenWidth);
    return { 
      style,
      screenWidth 
    };
  },
  data() {
    return {
      visible: false,
      speaker: null,
      pullAllStatus: false,
    };
  },
  methods: {
    openModal(speaker) {
      this.speaker = speaker;
      this.visible = true;
    },
    closeModal() {
      this.pullAllStatus = false;
      this.visible = false;
      this.style.width = "50%";
      if (this.screenWidth < 700) {
        this.style.width = "100%";
      }
    },
    pullAll() {
      this.style.width = "100%";
      this.pullAllStatus = true;
    },
  }
}
</script>

<style lang="scss" scoped>
.modal {
  top: 0;
  left: 0;
  z-index: 9999;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* Safari Support */
  .img-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .detail {

      .text-overlay {
        position: absolute;
        top: 50%;  /* Adjust this value to position vertically */
        left: 50%;
        transform: translateX(-50%);
        color: white;
        font-size: 1rem; /* Large text size */
        font-weight: bold;
        text-align: center;
        z-index: 10;  /* Ensures text is above the image */
        width: 90%;  /* Adjust width as needed */
      }

      position: relative;
      overflow: hidden;
      max-height: 100%;
      .info {
        width: 100%;
      }
      .setting {
        position: absolute;
        top: 0.2rem;
        left: 0.2rem;
        img {
          width: 0.74rem;
          cursor: pointer;
          margin-right: 0.2rem;
        }
      }
    }
  }
}
</style>
