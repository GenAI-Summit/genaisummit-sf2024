<template>
  <div class="header">
    <div class="logo-content">
      <div class="logo2">
        <img src="../assets/images/gptdaoLogo2.png" alt="" />
      </div>
      <div class="logo3" v-if="screenWidth > 1200">
        <img src="../assets/images/genaisummit.png" alt="" />
      </div>
    </div>
    <div class="nav-list">
      <ul>
        <li v-if="screenWidth > 900">
          <div
            class="nav-link"
            :to="null"
            @click="scrollToSection('section1')"
            :class="{ active: activeSection === 'section1' }"
          >
            HOME
          </div>
        </li>
        <li v-if="screenWidth > 900">
          <div
            class="nav-link"
            :to="null"
            @click="scrollToSection('sponsor_section')"
            :class="{ active: activeSection === 'sponsor_section' }"
          >
            SPONSORS
          </div>
        </li>
        <li v-if="screenWidth > 900">
          <div
            class="nav-link"
            :to="null"
            @click="scrollToSection('maps_section')"
            :class="{ active: activeSection === 'maps_section' }"
          >
            MAPS
          </div>
        </li>
        <li v-if="screenWidth > 900">
          <div
            class="nav-link"
            :to="null"
            @click="scrollToSection('section2')"
            :class="{ active: activeSection === 'section2' }"
          >
            SPEAKERS
          </div>
        </li>
        <li v-if="screenWidth > 900">
          <div
            class="nav-link"
            :to="null"
            @click="scrollToSection('workshop_section')"
            :class="{ active: activeSection === 'workshop_section' }"
          >
            WORKSHOP
          </div>
        </li>
        <li v-if="screenWidth > 900">
          <div
            class="nav-link"
            :to="null"
            @click="scrollToSection('seminar_section')"
            :class="{ active: activeSection === 'seminar_section' }"
          >
            SEMINAR
          </div>
        </li>
        <li v-if="screenWidth > 900">
          <div
            class="nav-link"
            :to="null"
            @click="scrollToSection('section6')"
            :class="{ active: activeSection === 'section6' }"
          >
            K12
          </div>
        </li>
        <li v-if="screenWidth > 900">
          <div
            class="nav-link"
            :to="null"
            @click="scrollToSection('booth_section')"
            :class="{ active: activeSection === 'booth_section' }"
          >
            EXHIBITION
          </div>
        </li>
        <li v-if="screenWidth > 900">
          <div
            class="nav-link"
            :to="null"
            @click="scrollToSection('section4')"
            :class="{ active: activeSection === 'section4' }"
          >
            AGENDA
          </div>
        </li>
        <li v-if="screenWidth > 900">
          <div
            class="nav-link"
            :to="null"
            @click="scrollToSection('resource_section')"
            :class="{ active: activeSection === 'resource_section' }"
          >
            RESOURCE
          </div>
        </li>
        <!--
        <li v-if="screenWidth > 900">
          <div
            class="nav-link"
            @click="openLink('https://linktr.ee/gptdao')"
            :class="{ active: activeSection === 'section5' }"
          >
            CONTACT
          </div>
        </li>
        -->
        <li v-if="screenWidth > 900">
          <div
            class="nav-link"
            @click="openLink('https://sv2023.genaisummit.ai/')"
            :class="{ active: activeSection === 'section6' }"
          >
            PREVIOUS EVENT
          </div>
        </li>
        <li class="li-box">
          <button>
            <img src="../assets/images/hot.gif" alt="" />
            Buy Tickets
          </button>
          <div class="buy-listBox">
            <div class="list" @click="BuyTicketsLuma">
              <img class="luma" src="../assets/images/luma.png" alt="" />
              <img class="discount" src="../assets/images/luma_discount.png" alt="" />
            </div>
            <div class="list" @click="BuyTickets">
              <img class="event" src="../assets/images/event.png" alt="" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import EventBus from "../utils/EventBus.js";

export default {
  name: "",
  setup() {
    const sectionList = {
      section1: "HOME",
      section2: "SPEAKERS",
      sponsor_section: "SPONSORS",
      booth_section: "EXHIBITION",
      section4: "AGENDA",
      workshop_section: "WORKSHOPS",
      section6: "K12",
      seminar_section: "SEMINAR",
      resource_section: "RESOURCE",
      maps_section: "MAPS",
    };
    const linkList = {
      HOME: "section1",
      SPEAKERS: "section2",
      SPONSORS: "sponsor_section",
      WORKSHOPS: "workshop_section",
      EXHIBITION: "booth_section",
      AGENDA: "section4",
      K12: "section6",
      SEMINAR: "seminar_section",
      RESOURCE: "resource_section",
      MAPS: "maps_section",
    };
    const store = useStore();

    const activeSection = ref("");
    const route = useRoute();
    const getLocationParame = () => {
      const url =location.href;
      const match = url.match(/[\?&]discount=([^&#]*)/);
      const discountValue = match ? match[1] : null;
      return discountValue
    }
    const getLocationParame1 = () => {
      const url =location.href;
      const match = url.match(/[\?&]coupon=([^&#]*)/);
      const couponValue = match ? match[1] : null;
      return couponValue
    }
    const scrollToSection = (sectionId) => {
      const discount = route.query.discount || getLocationParame();
      const coupon = route.query.coupon || getLocationParame1();
      const section = document.getElementById(sectionId);
      // console.log(section);
      let newHash = ''
      if(discount){
        newHash = `?section=` + sectionList[sectionId] + `&discount=` + discount
      }else{
        newHash =  `?section=` + sectionList[sectionId]
      }
      if(coupon){
        newHash = newHash + '&coupon=' + coupon
      }
      window.location.hash = newHash;
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80,
          behavior: "smooth",
        });
      }
    };

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition <= section.offsetTop + section.offsetHeight
        ) {
          activeSection.value = section.id;
        }
      });
    };

    const openLink = (url) => {
      window.open(url);
    };

    window.addEventListener("scroll", handleScroll);
    const BuyTickets = () => {
      const discount = route.query.discount || getLocationParame()
      if (discount) {
        window.open(
          "https://www.eventbrite.com/e/genai-summit-san-francisco-2024-tickets-796934722207?discount=" +
          discount
        );
      } else {
        window.open(
          "https://www.eventbrite.com/e/genai-summit-san-francisco-2024-tickets-796934722207"
        );
      }
    };
    const BuyTicketsLuma = () => {
      const coupon = route.query.coupon || getLocationParame1()
      if(coupon){
        window.open(
          "https://lu.ma/genaisummitsf2024?coupon=" + coupon
        );
      }else{
        window.open(
          "https://lu.ma/genaisummitsf2024"
        );
      }
     
    }
    const screenWidth = computed(() => {
      return store.state.screenWidth;
    });
    const goPageHandle = () => {
      scrollToSection("section3");
    };
    onMounted(() => {
      EventBus.$on("goPageHandle", goPageHandle);
      setTimeout(() => {
        const section = route.query.section;
        if (linkList[section]) {
          scrollToSection(linkList[section]);
        }
      }, 1000);
    });
    onUnmounted(() => {
      EventBus.$off("goPageHandle");
    });
    return {
      activeSection,
      scrollToSection,
      BuyTickets,
      screenWidth,
      BuyTicketsLuma,
      openLink,
    };
  },
  components: {},
  methods: {},
  mounted() {},
  unmounted() {},
};
</script>

<style scoped lang='scss'>
.header {
  display: flex;
  justify-content: space-between;
  height: 1.4rem;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  max-width: 1500px;
  padding: 0 0.12rem;
  .logo-content {
    display: flex;
    align-items: center;
  }
  .logo2 {
    img {
      width: 0.8rem;
    }
  }
  .logo3 {
    img {
      width: 4rem;
    }
  }
  .logo {
    img {
      width: .25rem;
    }
  }
  .text {
    font-size: 0.4rem;
    color: #78808f;
  }

  .nav-list {
    padding: 0;
    ul {
      display: flex;
      align-items: center;
      padding-inline-start: 0.2rem;
      li {
        list-style: none;
        margin-left: 0.2rem;
        &.li-box {
          position: relative;
          &:hover{
            .buy-listBox{
              display: block;
            }
            button{
              &::before {
                left: 0;
              }
            }
          }
          .buy-listBox {
            padding: 10px;
            cursor: pointer;
            position: absolute;
            top: 1rem;
            left: -1.2rem;
            width: 4rem;
            background: rgba(255, 255, 255, 1);
            border: 1px solid rgba(0, 0, 0, 0.15);
            box-shadow: 0px 4px 20px -6px rgba(0, 0, 0, 0.15) !important;
            border-radius: 13px 13px 13px 13px;
            z-index: 9000;
            display: none;
            .list {
              position: relative;
              margin-top: 0.12rem;
              width: 100%;
              text-align: center;
              border: 1px solid transparent;
              border-radius: 100px;
              &:hover{
                border: 1px solid #000000;
              }
            }
            img{
              &.luma {
                width: 72%;
              }
              &.event {
                padding: 0.1rem;
                width: 95%;
              }
              &.discount {
                width: 80%;
                position: absolute;
                top: -0.7rem;
                left: 0.95rem;
              }
            };
          }
        }
        .nav-link {
          text-decoration: none;
          font-family: HarmonyOS Sans SC Bold;
          font-weight: 400;
          font-size: 0.25rem;
          color: #78808f;
          text-align: left;
          font-style: normal;
          text-transform: none;
          &:hover,
          &.active {
            color: #000000;
            font-weight: bold;
          }
          cursor: pointer;
        }
        button {
          height: 0.9rem;
          width: auto;
          padding: 0 0.2rem;
          background: #008aff;
          color: #ffffff;
          cursor: pointer;
          border: none;
          position: relative;
          transition: background-color 0.3s ease;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'HarmonyOS Sans SC Bold',serif;
          border-radius: 100px;
          img {
            margin-right: 0.15rem;
            width: 0.5rem;
          }
          z-index: 2;
          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background-color: #000000;
            transition: left 0.15s ease;
            z-index: -100;
          }
          
        }
      }
    }
  }
}
</style>
