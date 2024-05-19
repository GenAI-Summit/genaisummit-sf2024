<template>
  <div class="modal" v-if="visible" @click="closeModal">
    <div class="img-content">
      <div class="detail" :style="style" @click.stop>
        <div
          class="text-overlay"
          :class="screenWidth < 600 ? 'mb' : ''"
        >
          <div class="name">
            <span class="name-text">{{ speaker.name }}</span>
          </div>
          <div class="job">
            <span class="job-text">{{ speaker.job }}</span>
          </div>
          <div class="tip">
            <span class="tip-text">@{{ speaker.tip }}</span>
          </div>
          <div class="description">
            <span class="description-text">{{ speaker.description }}</span>
          </div>
        </div>
        <img class="info" :src="getDetail(speaker.detail)" alt="" unselectable="on" />
        <div class="setting">
          <img
            src="../assets/images/close.png"
            @click="closeModal"
            alt=""
            unselectable="on"
          />
          <img
            src="../assets/images/all.png"
            alt=""
            @click.stop="pullAll"
            v-if="!pullAllStatus && screenWidth > 700"
            unselectable="on"
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
    const store = useStore();
    const screenWidth = computed(() => store.state.screenWidth);
    const style = ref({ width: screenWidth.value < 700 ? "100%" : "50%" });
    const getDetail = (detail) => {
       return new URL(`/src/assets/images/speakers/${detail}`, import.meta.url).href;
    };
    return {
      style,
      screenWidth,
      getDetail,
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
img {
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.modal {
  top: 0;
  left: 0;
  z-index: 9999;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  .img-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .detail {

      .text-overlay {
        container: text-overlay / size;
        position: absolute;
        top: 11%;
        left: 49%;
        width: 50%;
        height: 89%;
        color: white;
        align-items: left;
        background-color: black;
        padding-left: 10px;
        z-index: 10;

        .name {
          margin-top: 0;
          font-size: 8.5cqw;
          line-height: 1em;

          .name-text {
            font-size: 8.5cqw;
            font-weight: bold;
            color: #00a1f0;
            font-family: "Noto Sans TC", sans-serif;
          }
        }

        .job {
          margin-top: 1%;
          font-size: 5cqw;
          line-height: 1.2em;

          .job-text {
            font-size: 5cqw;
            color: white;
            font-family: "Noto Sans TC", sans-serif;
          }
        }

        .tip {
          margin-top: 1%;
          font-size: 5cqw;
          line-height: 1em;

          .tip-text {
            font-size: 5cqw;
            line-height: 1;
            color: white;
            font-family: "Noto Sans TC", sans-serif;
          }
        }

        .description {
          margin-top: 3%;
          height: 73%;
          line-height: 1.2em;
          font-size: 4.2cqw;

          .description-text {
            font-size: 4.2cqw;
            color: white;
            font-family: "Noto Sans TC", sans-serif;

            /*
            @container (width >= 700px) {
              .text-overlay {
                --scale-factor: 1.2;
              }
            }
            */

          }
        }
      }

      position: relative;
      overflow: hidden;
      max-height: 100%;
      .info {
        width: 100%;
        display: block;
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
