<template>
  <div
    data-aos="zoom-in"
    :class="screenWidth < 600 ? 'mb' : ''"
  >
    <div v-if="resources.length === 0">
      <p>Will be provided soon.</p>
    </div>
    <div
      v-else
      class="resources"
    >
      <div
        class="resource-card"
        @click="openModal()"
      >
        <div
          class="resource-name"
        >
          Transportation Guides
        </div>
      </div>
      <div
        class="resource-card"
        :class="screenWidth < 600 ? 'mb' : ''"
        v-for="resource in resources"
        :key="resource.id"
        @click="openUrl(resource.url)"
      >
        <div
          class="resource-name"
        >
          {{ resource.name }}
        </div>
      </div>
    </div>
  </div>

  <div
    v-if="modalOpen"
    class="modal-backdrop"
    :class="screenWidth < 600 ? 'mb' : ''"
    @click="closeModal"
  >
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <strong>Transportation Guides</strong>
        <button type="button" class="close" @click="closeModal">&times;</button>
      </div>
      <div
        class="modal-body"
        :class="screenWidth < 600 ? 'mb' : ''"
      >
        <div class="modal-body-left">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d234.30371333455722!2d-122.44887075190157!3d37.80404156957008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1716228963038!5m2!1sen!2sus"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
        <div class="modal-body-right">
          <div class="text-container">
            <p><strong>GenAI Summit SF 2024</strong> will be held at the Palace of Fine Arts (3601 Lyon St, San Francisco, CA 94123).</p>
            <p>Due to limited parking space, we strongly recommend carpooling or using public transportation to visit the Palace of Fine Arts.</p>
            <p>Please use the north entrance to access the venue.</p>
            <button
              class="content-btn"
              @click="openUrl('https://maps.app.goo.gl/CzsxYg3JLBUAgKv98')"
            >
              Navigate to Entrance
            </button>
            <div class="sub-section">
              <h3
                class="sub-section-title"
                @click="toggleSection('publicTransportation')"
              >
                Public Transportation
                <img
                  class="collapse-arrow"
                  :src="getArrow('publicTransportation')"
                  alt="Toggle"
                />
              </h3>
              <div
                v-if="subSections.publicTransportation"
                class="sub-section-content"
              >
                <p>The Palace of Fine Arts Theatre is conveniently accessible by public transportation.</p>
                <p>San Francisco Muni buses #30, #43, #28, and #29 stop nearby. Muni bus lines #22, #41, and #45 also stop there.</p>
                <p>From Fisherman's Wharf, take the #30 Stockton bus. Call Muni at (415) 673-6864 or check the SFMTA trip planner for more information.</p>
                <p>If you're taking BART, get off at the Montgomery Street station, walk one half-block up Market Street to Third Street, and catch the #30 Stockton bus on the corner.</p>
              </div>
            </div>

            <div class="sub-section">
              <h3
                class="sub-section-title"
                @click="toggleSection('uber')"
              >
                Uber
                <img
                  class="collapse-arrow"
                  :src="getArrow('uber')"
                  alt="Toggle"
                />
              </h3>
              <div
                v-if="subSections.uber"
                class="sub-section-content"
              >
                <p>
                  If you would like to take an Uber to the Palace of Fine Arts, please click the button on your phone or scan the QR code below. These options will help you locate the best drop-off point for your ride.
                </p>
                <div>
                  <button
                    class="content-btn"
                    @click="openUrl('https://m.uber.com/ul/?action=setPickup&client_id=M1GbSGj87miEzy7DnLl-UQQeSommNUJi&pickup=my_location&dropoff[formatted_address]=5836%20Palace%20Drive%2C%20San%20Francisco%2C%20CA%2C%20USA&dropoff[latitude]=37.803916&dropoff[longitude]=-122.449081')"
                  >
                    Request Uber
                  </button>
                </div>
                <img
                  style="width: 50%;"
                  :src="getUberQRCode()"
                  alt="Uber QR Code"
                />
              </div>
            </div>

            <div class="sub-section">
              <h3
                class="sub-section-title"
                @click="toggleSection('parkingLot')"
              >
                Parking Lot
                <img
                  class="collapse-arrow"
                  :src="getArrow('parkingLot')"
                  alt="Toggle"
                />
              </h3>
              <div
                v-if="subSections.parkingLot"
                class="sub-section-content"
              >
                <div class="row">
                  <p class="left">
                    The only available parking lot inside Palace of Fine Arts is located near the North Entrance.
                  </p>
                  <button
                    class="content-btn right"
                    @click="openUrl('https://maps.app.goo.gl/6pNLnNKCZyfg4K8M7')"
                  >
                    Navigate
                  </button>
                </div>
                <div class="row">
                  <p class="left">
                    There's another parking lot at the other side of street (5-min walk).
                  </p>
                  <button
                    class="content-btn right"
                    @click="openUrl('https://maps.app.goo.gl/T6sCRvaTEa6ub5LM6')"
                  >
                    Navigate
                  </button>
                </div>
                <div class="row">
                  <p class="left">
                    Limited parking lot near Edie Rd (10-min walk).
                  </p>
                  <button
                    class="content-btn right"
                    @click="openUrl('https://maps.app.goo.gl/RSzXxiRuoDWLxA719')"
                  >
                    Navigate
                  </button>
                </div>
                <div class="row">
                  <p class="left">
                    A parking lot is available on Jauss St (10-min walk).
                  </p>
                  <button
                    class="content-btn right"
                    @click="openUrl('https://maps.app.goo.gl/yotTxpRsnd4fHbMTA')"
                  >
                    Navigate
                  </button>
                </div>
                <div class="row">
                  <p class="left">
                    Parking lots are available on both sides of the Marina Green (15-min walk).
                  </p>
                  <button
                    class="content-btn right"
                    @click="openUrl('https://maps.app.goo.gl/x7oVqyfm9ag8jYdS8')"
                  >
                    Navigate
                  </button>
                </div>
                <div class="row">
                  <p class="left">
                    Street parking is available around the Palace of Fine Arts. Please follow the instructions to park your vehicle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

import resourceData from "../utils/resource.json";
import downArrow from "../assets/images/arrow_down.png";
import upArrow from "../assets/images/arrow_up.png";
import uberqrcode from "../assets/images/uberqrcode.png";

export default {
  name: "Resources",
  setup() {
    const store = useStore();
    const screenWidth = computed(() => store.state.screenWidth);
    const resources = ref(resourceData);
    const modalOpen = ref(false);

    const subSections = ref({
      publicTransportation: false,
      uber: false,
      parkingLot: false
    });

    const toggleSection = (subSection) => {
      subSections.value[subSection] = !subSections.value[subSection];
    }

    const openModal = () => {
      modalOpen.value = true;
    };

    const closeModal = () => {
      modalOpen.value = false;
    };

    const openUrl = (url) => {
      window.open(url, "_blank");
    };

    const getArrow = (subSection) => {
      return subSections.value[subSection] ? 
        new URL(upArrow, import.meta.url).href : 
        new URL(downArrow, import.meta.url).href;
    };

    const getUberQRCode = () => {
      return new URL(uberqrcode, import.meta.url).href;
    };

    return {
      screenWidth,
      openUrl,
      openModal,
      closeModal,
      resources,
      modalOpen,
      subSections,
      toggleSection,
      getArrow,
      getUberQRCode
    };
  },
  components: {
  },
  methods: {
  },
  mounted() {
  },
  unmounted() {
  }
};
</script>

<style scope lang="scss">
.resources {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.35rem;

  .resource-card {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    border: 2px solid #008aff;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
    height: 0.8rem;
    margin-top: 0.15rem;
    margin-left: 0.15rem;
    text-align: center;
    border-radius: 1rem;
    color: #008aff;
    padding: 0.1rem 0.2rem;
  
    .resource-name {
      font-size: 0.3rem;
      font-weight: bold;
      color: #008aff;
    }
  
    &:hover {
      border: 2px solid #008aff;
      background: #008aff;
      color: #ffffff;
      transform: translateY(-5px);
  
      .resource-name {
        color: #ffffff;
      }
    }
  }
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  .modal-content {
    width: 80%;
    height: 80%;
    background: white;
    padding: 0.25rem;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;

    .modal-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;

      .close {
        cursor: pointer;
        border: none;
        background: none;
        font-size: 1.5em;
      }
    }

    .modal-body {
      display: flex;
      height: 90%;

      &.mb {
        flex-direction: column;
        .modal-body-left {
          width: 100%;
        }
        .modal-body-right {
          margin-left: 0;
          margin-top: 0.5rem;
          width: 100%;
        }
      }

      .modal-body-left{
        width: 35%;
        flex: 1;
        overflow: hidden;
      }
      
      .modal-body-right {
        flex: 1;
        padding: 0.1rem;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        height: 100%;

        .text-container {
          overflow-y: auto;
          height: 100%;

          .content-btn {
            background: #ffffff;
            color: #008aff;
            border: none;
            padding: 0.07rem 0.15rem;
            border-radius: 0.25rem;
            cursor: pointer;
            margin-left: 0.25rem;
            margin-bottom: 0.25rem;
            height: 0.5rem;

            border: 1px solid #008aff;

            &:hover {
              background: #008aff;
              color: #ffffff;
            }
          }

          p {
            margin-block-start: 0rem;
            margin-block-end: 0rem;
            margin: 0.15rem;
          }
        }

        .sub-section-title {
          font-size: 0.4rem;
          margin: 0.25rem;

          display: flex;
          justify-content: space-between;
          align-items: center;

          &:hover {
            cursor: pointer;
            color: #008aff;
          }
        }
        
        .collapse-arrow {
          background-color: #f1f3f4;
          border-radius: 50%;
          width: 0.4rem;
          height: 0.4rem;
          margin-right: 8px;
          transition: transform 0.3s ease;
          flex-shrink: 0;
          padding: 0.1rem;
        }

        .sub-section-content {
          margin: 0.25rem;
          font-size: 0.3rem;
          color: #333;

          p {
            margin: 0.2rem;
          }

          .row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0.2rem;

            .left {
              flex: 1;
            }

            .right {
              flex: 0;
            }
          }
        }
      }
      
      .modal-body-left iframe {
        width: 100%;
        height: 100%;
      }
    }
  }
}





</style>
