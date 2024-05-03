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
          <a
            :to="null"
            @click="scrollToSection('section1')"
            :class="{ active: activeSection === 'section1' }"
            >HOME</a
          >
        </li>
        <li v-if="screenWidth > 900">
          <a
            :to="null"
            @click="scrollToSection('section2')"
            :class="{ active: activeSection === 'section2' }"
            >SPEAKERS</a
          >
        </li>
        <li v-if="screenWidth > 900">
          <a
            :to="null"
            @click="scrollToSection('section5')"
            :class="{ active: activeSection === 'section5' }"
            >WORKSHOP</a
          >
        </li>
        <li v-if="screenWidth > 900">
          <a
            :to="null"
            @click="scrollToSection('section3')"
            :class="{ active: activeSection === 'section3' }"
            >SPONSORS</a
          >
        </li>
        <li v-if="screenWidth > 900">
          <a
            :to="null"
            @click="scrollToSection('section4')"
            :class="{ active: activeSection === 'section4' }"
            >SCHEDULE</a
          >
        </li>

       
        <li v-if="screenWidth > 900">
          <a
            href="https://linktr.ee/gptdao"
            target="_black"
            :class="{ active: activeSection === 'section5' }"
            >CONTACT</a
          >
        </li>
        <li v-if="screenWidth > 900">
          <a
            href="https://sv2023.genaisummit.ai/"
            target="_black"
            :class="{ active: activeSection === 'section6' }"
            >PREVIOUS EVENT</a
          >
        </li>
        <!-- <div class="logo">
              <img src="../assets/images/microsoftAI.png" alt="">
            </div> -->
        <li class="li-box">
          <button>
            <img src="../assets/images/hot.gif" alt="" />
            Buy Tickets
          </button>
          <div class="buy-listBox">
            <div class="list" @click="BuyTicketsLuma">
              <img class="luma" src="../assets/images/luma.png" alt="" />
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
      section1: "Home",
      section2: "SPEAKERS",
      section3: "SPONSORS",
      section4: "SCHEDULE",
    };
    const linkList = {
      Home: "section1",
      SPEAKERS: "section2",
      SPONSORS: "section3",
      SCHEDULE: "section4",
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
    //适配
    const screenWidth = computed(() => {
      return store.state.screenWidth;
    });
    const goPageHandle = () => {
      scrollToSection("section3");
    };
    onMounted(() => {
      console.log(route)
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
  height: 80px;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  max-width: 1500px;
  padding: 0 0.5rem;
  .logo-content {
    display: flex;
    align-items: center;
  }
  .logo2 {
    img {
      width: 1rem;
    }
  }
  .logo3 {
    img {
      width: 5rem;
    }
  }
  .logo {
    img {
      width: 3rem;
    }
  }
  .text {
    font-size: 0.4rem;
    color: #78808f;
  }

  .nav-list {
    ul {
      display: flex;
      align-items: center;
      li {
        list-style: none;
        margin-left: 0.6rem;
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
            width: 100%;
            background: rgba(255, 255, 255, 1);
            border: 1px solid rgba(0, 0, 0, 0.15);
            box-shadow: 0px 4px 20px -6px rgba(0, 0, 0, 0.15) !important;
            border-radius: 13px 13px 13px 13px;
            top: 0.9rem;
            z-index: 9999;
            display: none;
            .list{
                width: 100%;
                text-align: center;
                padding: .1rem 0;
                border: 1px solid transparent;
                margin: 0 auto;
                border-radius: 100px;
                &:hover{
                  border: 1px solid #000000;
                }
              }
              img{
                &.luma{
                  width: 1.3rem;
                }
                &.event{
                  margin-top: 4px;
                  width: 1.6rem;
                }
              };
          }
        }
        a {
          text-decoration: none;
          font-family: HarmonyOS Sans SC Bold;
          font-weight: 400;
          font-size: 0.259rem;
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
          width: 2.8rem;
          height: 0.9rem;
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
