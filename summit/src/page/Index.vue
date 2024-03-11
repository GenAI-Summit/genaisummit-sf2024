<template>
  <div>
    <section id="section1" :class="screenWidth > 600 ? '' : 'mb'">
      <video autoplay muted loop class="background-video">
        <source src="../assets/images/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="content">
        <div class="cointainer">
          <div data-aos="fade-up">
            <div class="b-title" :class="screenWidth > 600 ? '' : 'mb'">
              #AIAREALL
            </div>
            <div class="h-title" :class="screenWidth > 600 ? '' : 'mb'">
              GenAI Summit
            </div>
            <div class="h-title" :class="screenWidth > 600 ? '' : 'mb'">
              San Francisco <span class="blue">2024</span>
            </div>
            <div class="s-title mt4" :class="screenWidth > 600 ? '' : 'mb'">
              IGNITING THE AI REVOLUTION IN THE HEART OF SAN FRANCISCO
            </div>
            <div class="s-title">
              <div class="mt4">
                <img src="../assets/images/location.png" alt="" />
                Palace of Fine Arts, San Francisco, California
              </div>
              <div class="mt4">
                <img src="../assets/images/time.png" alt="" />
                May 29 - May 31, 2024
              </div>
            </div>
            <div class="btn-group">
              <div class="left">
                <button
                  @click="
                    openUrl(
                      'https://www.eventbrite.com/e/genai-summit-san-francisco-2024-tickets-796934722207'
                    )
                  "
                >
                  <div class="spinner0"></div>
                  Buy Tickets
                </button>
              </div>
              <div class="right">
                <div class="time-box">
                  <div class="item">{{ timeObj.d }}</div>
                  <div class="timetip">D</div>
                  <div class="item">{{ timeObj.h }}</div>
                  <div class="timetip">H</div>
                  <div class="item">{{ timeObj.m }}</div>
                  <div class="timetip">M</div>
                  <div class="item">{{ timeObj.s }}</div>
                  <div class="timetip">S</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img class="ico ico1" src="../assets/images/ico_dim1.png" alt="" />
        <img class="ico ico2" src="../assets/images/ico_dim2.png" alt="" />
        <img class="ico ico3" src="../assets/images/ico_dim3.png" alt="" />
      </div>
    </section>
    <div class="bg">
      <section class="cointainer section-default">
        <div class="left-content">
          <div data-aos="fade-up">
            <div class="sm-title">THREE DAYS OF COMPREHENSIVE ACTIVITIES</div>
            <div class="b-title">
              <img src="../assets/images/icon-fang.png" alt="" />
              GenAI Summit San Francisco 2024
            </div>
            <div class="text">
              Dive into the heart of innovation at the GenAI Summit San
              Francisco 2024, set in the awe-inspiring, historic, Palace of Fine
              Arts from May 29th to May 31st. This summit is not just an event,
              it’s an extraordinary convergence of the brightest minds in
              Generative AI, encapsulating the spirit of the future.
            </div>
            <div class="b-title">
              <img src="../assets/images/icon-fang.png" alt="" />

              The Summit at a Glance
            </div>
            <div class="text">
              • Venue Size: 200,000+ square feet of immersive experiences.
              <br />
              • Anticipated Audience: 30,000+ attendees from around the
              globe.<br />
              • Exhibitors: 300+ exhibitors showcasing groundbreaking AI
              solutions.<br />
              • Venture Capitalists: 300+ VCs looking for the next big idea.<br />
              • Speakers: 200+ industry-leading experts sharing invaluable
              insights.<br />
              • Media Coverage: 50+ media outlets capturing every exciting
              moment.<br />
              • Dynamic Tracks: 20+ tracks showcasing exhilarating discoveries
              and information.
            </div>
          </div>
        </div>
        <div class="right-content" :class="screenWidth > 600 ? '' : 'mb'">
          <div
            class="img-content"
            :class="screenWidth > 600 ? '' : 'mb'"
            data-aos="fade-left"
            @mousemove="handleMouseMove"
          >
            <img class="AI" src="../assets/images/icon-AI.png" alt="" />
            <img class="DP" src="../assets/images/icon-dp.png" alt="" />
            <img
              class="SD"
              src="../assets/images/icon-sd.png"
              alt=""
              ref="imageRef"
            />
            <img
              class="SD1"
              src="../assets/images/icon-sd1.png"
              alt=""
              ref="imageRef1"
            />
            <img
              class="ELE"
              src="../assets/images/icon-ele.png"
              alt=""
              ref="imageRef2"
            />
          </div>
        </div>
      </section>
      <div class="section-number">
        <section class="cointainer">
          <div class="c" :class="screenWidth > 600 ? '' : 'mb'">
            <div
              class="item"
              v-for="(item, index) in numberList"
              :key="index"
              data-aos="flip-up"
            >
              <img :src="icon1" alt="" v-if="index == 0" />
              <img :src="icon2" alt="" v-if="index == 1" />
              <img :src="icon3" alt="" v-if="index == 2" />
              <img :src="icon4" alt="" v-if="index == 3" />
              <img :src="icon5" alt="" v-if="index == 4" />
              <img :src="icon6" alt="" v-if="index == 5" />
              <img :src="icon7" alt="" v-if="index == 6" />
              <div class="number">
                <NumberCount
                  :startNumber="item.number - 200 > 0 ? item.number - 200 : 1"
                  :endNumber="item.number"
                />
              </div>
              <div class="tip">
                {{ item.tip }}
              </div>
            </div>
            <StarBackground />
            <!-- <img class="wavs" src="../assets/images/wavs.gif" alt=""> -->
          </div>
        </section>
      </div>

      <section id="section2" class="cointainer">
        <div class="bg-title" :class="screenWidth > 600 ? '' : 'mb'">
          <div class="left-title before" :class="screenWidth > 600 ? '' : 'mb'" data-aos="flip-up">
            Newly Updated Speakers
          </div>

          <div class="page" v-if="swiperPageInfo && screenWidth > 600">
            <div class="fk" @click="swiperpre">
              <img class="d" src="../assets/images/Ai_Button_left.png" alt="" />
              <img
                class="a"
                src="../assets/images/Ai_Button_left_white.png"
                alt=""
              />
            </div>
            <div class="fk long">
              <div class="">
                <span class="big">{{ swiperPageInfo.nowPage }}</span
                >/{{ swiperPageInfo.pages }}
              </div>
            </div>
            <div class="fk" @click="swipernext">
              <img
                class="d"
                src="../assets/images/Ai_Button_right.png"
                alt=""
              />
              <img
                class="a"
                src="../assets/images/Ai_Button_right_white.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="swiper-content">
          <Swiper ref="SwiperSpeaker" />
        </div>
        <div class="bg-title" :class="screenWidth > 600 ? '' : 'mb'">
          <div class="left-title before" :class="screenWidth > 600 ? '' : 'mb'" data-aos="flip-up">
            Speakers
          </div>
          <div class="open-btn">
            <button @click="openUrl('https://www.gptdao.ai/get-started')">
              Be our Speaker
              <img src="../assets/images/general_return.png" alt="" />
            </button>
          </div>
        </div>
        <div class="ss-title" data-aos="flip-up">LISTEN TO THE EVENT SPEAKERS</div>

        <div class="speaker-list" :class="screenWidth > 600 ? '' : 'mb'">
          <div
            class="list"
            v-for="(item, index) in showSpeakersList"
            :key="index"
            data-aos="zoom-in"
          >
            <PersionItem :item="item" />
          </div>
        </div>

        <div
          class="moreDiv"
          v-if="showSpeakersList.length < speakersList.length"
          @click="moreHanle"
        >
          More
          <img class="a" src="../assets/images/general_return_xia.png" alt="" />
          <img
            class="d"
            src="../assets/images/general_return_xia_d.png"
            alt=""
          />
        </div>
        <div
          class="moreDiv"
          v-if="showSpeakersList.length == speakersList.length"
          @click="closeHanle"
        >
          Hide
          <img class="a" src="../assets/images/general_return_up.png" alt="" />
          <img
            class="d"
            src="../assets/images/general_return_up_d.png"
            alt=""
          />
        </div>
      </section>
      <div class="GenAISummit">
        <div class="cointainer">
          <div class="title" :class="screenWidth > 600 ? '' : 'mb'">
            Why <span class="color">GenAI</span>
            <span class="color">Summit</span> San Francisco 2024
          </div>
          <div class="title" :class="screenWidth > 600 ? '' : 'mb'">
            Should Not Be Missed
          </div>
          <div class="ss-title">
            EXPERIENCE THE FUTURE AT GENAI SUMMIT SF 2024
          </div>
          <div class="instration" :class="screenWidth > 600 ? '' : 'mb'">
            <div class="list" data-aos="zoom-in">
              <div class="top">
                <img src="../assets/images/Ai_ico_8.png" alt="" />
                <span class="title">Cutting-Edge AI Innovations</span>
              </div>
              <div class="bottom">
                Witness the unveiling of the next-gen AI technologies.
              </div>
              <img
                class="active"
                src="../assets/images/Ai_ico_8_active.png"
                alt=""
              />
            </div>
            <div class="list" data-aos="zoom-in">
              <div class="top">
                <img src="../assets/images/Ai_ico_9.png" alt="" />
                <span class="title">Networking Opportunities</span>
              </div>
              <div class="bottom">
                Engage with global tech leaders and peers.
              </div>
              <img
                class="active"
                src="../assets/images/Ai_ico_9_active.png"
                alt=""
              />
            </div>
            <div class="list" data-aos="zoom-in">
              <div class="top">
                <img src="../assets/images/Ai_ico_10.png" alt="" />
                <span class="title">Investment Insights</span>
              </div>
              <div class="bottom">
                Access emerging startups and investment potential.
              </div>
              <img
                class="active"
                src="../assets/images/Ai_ico_10_active.png"
                alt=""
              />
            </div>
            <div class="list" data-aos="zoom-in">
              <div class="top">
                <img src="../assets/images/Ai_ico_11.png" alt="" />
                <span class="title">Global AI Trends</span>
              </div>
              <div class="bottom">
                Stay ahead with worldwide AI developments.
              </div>
              <img
                class="active"
                src="../assets/images/Ai_ico_11_active.png"
                alt=""
              />
            </div>
            <div class="list" data-aos="zoom-in">
              <div class="top">
                <img src="../assets/images/Ai_ico_12.png" alt="" />
                <span class="title">Collaborative Ventures</span>
              </div>
              <div class="bottom">
                Explore partnerships and collaborative projects.
              </div>
              <img
                class="active"
                src="../assets/images/Ai_ico_12_active.png"
                alt=""
              />
            </div>

            <div class="list" data-aos="zoom-in">
              <div class="top">
                <img src="../assets/images/Ai_ico_13.png" alt="" />
                <span class="title">Inspiring Environment</span>
              </div>
              <div class="bottom">
                The Palace of Fine Arts, a blend of history and innovation,
                creates a perfect setting for futuristic dialogues.
              </div>
              <img
                class="active"
                src="../assets/images/Ai_ico_13_active.png"
                alt=""
              />
            </div>
            <div class="list" data-aos="zoom-in">
              <div class="top">
                <img src="../assets/images/Ai_ico_14.png" alt="" />
                <span class="title">Product Launch Platform</span>
              </div>
              <div class="bottom">
                Ideal for revealing new AI products to a large, diverse
                audience.
              </div>
              <img
                class="active"
                src="../assets/images/Ai_ico_14_active.png"
                alt=""
              />
            </div>
            <div class="list" data-aos="zoom-in">
              <div class="top">
                <img src="../assets/images/Ai_ico_15.png" alt="" />
                <span class="title">Educational Value</span>
              </div>
              <div class="bottom">
                Deepen AI knowledge with sessions from top experts.
              </div>
              <img
                class="active"
                src="../assets/images/Ai_ico_15_active.png"
                alt=""
              />
            </div>
            <div class="list" data-aos="zoom-in">
              <div class="top">
                <img src="../assets/images/Ai_ico_16.png" alt="" />
                <span class="title">Career Advancement</span>
              </div>
              <div class="bottom">
                Open doors to new career opportunities in AI.
              </div>
              <img
                class="active"
                src="../assets/images/Ai_ico_16_active.png"
                alt=""
              />
            </div>
            <div class="list" data-aos="zoom-in">
              <div class="top">
                <img src="../assets/images/Ai_ico_17.png" alt="" />
                <span class="title">Visionary Experience</span>
              </div>
              <div class="bottom">
                Be part of a community shaping the AI revolution.
              </div>
              <img
                class="active"
                src="../assets/images/Ai_ico_17_active.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="Experience">
        <div class="bg"></div>
        <div
          class="cointainer"
          style="z-index: 2;"
        >
          <div class="t1" data-aos="slide-down">EMPOWERING TOMORROW'S INNOVATORS</div>
          <div class="t2" data-aos="slide-up">Experience the Future at</div>
          <div class="t2" data-aos="slide-up">GenAI Summit</div>
          <div class="t3" data-aos="flip-up">
            Be a part of this grand event where every conversation,
            demonstration, and interaction open a window to the future. Whether
            you’re looking to invest, innovate, or ignite your career in AI,
            GenAI Summit 2024 is where you’ll want to be.
            <br />
            <br />
            “Step into the future of AI at GenAI Summit San Francisco 2024 –
            where ideas meet action, and tomorrow is shaped today!”
          </div>
        </div>
      </div>
      <section id="section3" class="cointainer">
        <div class="bg-title" :class="screenWidth > 600 ? '' : 'mb'">
          <div class="left-title before" :class="screenWidth > 600 ? '' : 'mb'" data-aos="flip-up">
            Sponsors
          </div>
          <div class="open-btn">
            <button @click="openUrl('https://www.gptdao.ai/get-started')">
              Become Our Sponsor
              <img src="../assets/images/general_return.png" alt="" />
            </button>
          </div>
        </div>
        <div class="ss-title" data-aos="flip-up">CHECK WHO MAKES THIS EVENT POSSIBLE!</div>

        <div class="office_content">
          <div class="office" :class="screenWidth > 600 ? '' : 'mb'">
            <div class="title_img">
              <img src="../assets/images/diam.png" alt="" />
            </div>
            <div
              class="list"
              @click="openUrl('https://www.microsoft.com/en-us/')"
            >
              <img class="d" src="../assets/images/ico_logo_m2.png" alt="" />
              <img class="a" src="../assets/images/ico_logo_m1.png" alt="" />
            </div>
          </div>
        </div>
        <div class="office_content">
          <div class="office" :class="screenWidth > 600 ? '' : 'mb'">
            <div class="title_img">
              <img src="../assets/images/plat.png" alt="" />
            </div>
            <div class="list" @click="openUrl('https://cloud.google.com/')">
              <img class="d" src="../assets/images/ico_logo_g2.png" alt="" />
              <img class="a" src="../assets/images/ico_logo_g1.png" alt="" />
            </div>
            <div
              class="list"
              @click="openUrl('https://aws.amazon.com/cn/free')"
            >
              <img class="d" src="../assets/images/aws-startup.png" alt="" />
              <img class="a" src="../assets/images/aws-startup2.png" alt="" />
            </div>
          </div>
        </div>

        <!--  -->
        <div class="bg-title" :class="screenWidth > 600 ? '' : 'mb'">
          <div class="left-title before" :class="screenWidth > 600 ? '' : 'mb'"  data-aos="flip-up">
            Exhibition Opportunites
          </div>
          <div class="open-btn">
            <button @click="openUrl('https://www.gptdao.ai/get-started')">
              Take your place to exhibit
              <img src="../assets/images/general_return.png" alt="" />
            </button>
          </div>
        </div>
        <div class="ss-title" data-aos="flip-up">
          SHOWCASE YOUR PRODUCT TO EVERYONE AT THE SUMMIT!
        </div>
        <div class="sss-title" data-aos="flip-up">
          Located in the exhibition hall, the Booth allows you to conduct
          meetings while ensuring optimal brand exposure. Brand's logo will be
          featured on signage throughout the venue, displayed on website and
          brochures.
        </div>
        <div class="Exhibition">
          <Exhibition />
        </div>
      </section>

      <div class="Recognition-bg">
        <div class="cointainer">
          <!--  -->
          <div class="bg-title" :class="screenWidth > 600 ? '' : 'mb'">
            <div
              class="left-title before"
              :class="screenWidth > 600 ? '' : 'mb'"
              data-aos="flip-up"
            >
              Certificate of Recognition
            </div>
          </div>
          <div class="ss-title">STAY WITH THE COMMUNITY</div>
          <div class="Recognition">
            <div class="list-img" data-aos="fade-right">
              <img src="../assets/images/ico_certificate.png" alt="" />
            </div>
            <div class="list" data-aos="fade-up">
              <div>
                <div class="title">
                  GPTDAO was presented to Certificate of Recognition by City of
                  Saratoga on September 23, 2023.
                </div>
                <div class="text">
                  Here at GenAI Summit, we engage with our community and
                  collaborate with local residents. Our commitment to promoting
                  and advancing artificial intelligence is a journey we proudly
                  share with the local community. We look forward to fostering
                  further innovation and shared success in the future.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="section4" class="cointainer">
        <!--  -->

        <div class="bg-title" :class="screenWidth > 600 ? '' : 'mb'">
          <div class="left-title before" :class="screenWidth > 600 ? '' : 'mb'"  data-aos="flip-up">
            Tentative Event Agenda
          </div>
        </div>
        <div class="ss-title" data-aos="flip-up">MAXIMIZE YOUR JOURNEY AT THE AI SUMMIT</div>
        <div class="ss-title2" data-aos="flip-up">(Note: Tentative Outline, update weekly)</div>
        <SwiperDay />
      </section>

      <div class="dialog" v-if="showDialog" @click="closeDialog">
        <div class="img-content">
          <div class="detail" :style="style" @click.stop>
            <img class="info" :src="showImgUrl" alt="" />
            <div class="setting">
              <img
                src="../assets/images/close.png"
                @click="closeDialog"
                alt=""
              />
              <img
                src="../assets/images/all.png"
                alt=""
                @click.stop="pullAll"
                v-if="!pullAllStatus && screenWidth > 700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ref,
  computed,
  watch,
  onMounted,
  onUnmounted,
  onBeforeUnmount,
} from "vue";
import { useStore } from "vuex";
import NumberCount from "../components/NumberCount.vue";
import PersionItem from "../components/PersionItem.vue";
import Swiper from "../components/Swiper.vue";
import Exhibition from "../components/Exhibition.vue";
import StarBackground from "../components/StarBackground.vue";
import SwiperDay from "../components/SwiperDay.vue";

import speakers from "../utils/speaker";
import EventBus from "../utils/EventBus.js";
import { toUpper } from "lodash";
import icon1 from "../assets/images/icon-n.1.png";
import icon2 from "../assets/images/icon-n.2.png";
import icon3 from "../assets/images/icon-n.3.png";
import icon4 from "../assets/images/icon-n.4.png";
import icon5 from "../assets/images/icon-n.5.png";
import icon6 from "../assets/images/icon-n.6.png";
import icon7 from "../assets/images/icon-n.7.png";
export default {
  name: "",
  setup() {
    const store = useStore();
    const imageRef = ref(null);
    const imageRef1 = ref(null);
    const imageRef2 = ref(null);
    const SwiperSpeaker = ref(null);
    const showDialog = ref(false);
    const showImgUrl = ref("");

    const numberList = ref([

      {
        tip: "Attendees",
        number: 30000,
      },
      {
        tip: "Exhibitors",
        number: 300,
      },
      {
        tip: "VCs",
        number: 300,
      },
      {
        tip: "Speakers",
        number: 200,
      },
      {
        tip: "Media Outlets",
        number: 50,
      },
      {
        tip: "Tracks",
        number: 20,
      },
      {
        tip: "Sq. FT.",
        number: 200000,
      },
    ]);
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const containerRect = imageRef.value.getBoundingClientRect();
      const containerCenterX = containerRect.left + containerRect.width / 2;
      const containerCenterY = containerRect.top + containerRect.height / 2;
      const deltaX = mouseX - containerCenterX;
      const deltaY = mouseY - containerCenterY;

      // 反方向移动图片
      const moveX = -deltaX * 0.05;
      const moveY = -deltaY * 0.05;

      imageRef.value.style.transform = `translate(${moveX}px, ${moveY}px)`;
      imageRef1.value.style.transform = `translate(${moveX}px, ${moveY}px)`;
      imageRef2.value.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    const openUrl = (url) => {
      window.open(url);
    };
    const moreHanle = () => {
      showSpeakersList.value = speakersList.value;
    };
    const closeHanle = () => {
      showSpeakersList.value = speakersList.value.slice(0, 8);
    };
    const speakersList = ref(speakers);
    const showSpeakersList = ref(speakers.slice(0, 8));
    const targetDate = ref("2024/05/30");
    const timeObj = ref({
      d: "00",
      h: "00",
      m: "00",
      s: "00",
    });
    const calculateTimeRemaining = () => {
      const targetTime = new Date(targetDate.value).getTime();
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        return {
          d: "00",
          h: "00",
          m: "00",
          s: "00",
        };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        d: String(days).padStart(2, "0"),
        h: String(hours).padStart(2, "0"),
        m: String(minutes).padStart(2, "0"),
        s: String(seconds).padStart(2, "0"),
      };
    };
    let intervalId;
    onMounted(() => {
      EventBus.$on("openDialog", openDialog);
      EventBus.$on("pageInfo", setPageInfo);
      clearInterval(intervalId);
      intervalId = setInterval(() => {
        timeObj.value = calculateTimeRemaining();
      }, 1000);
      return () => clearInterval(intervalId);
    });
    onBeforeUnmount(() => {
      clearInterval(intervalId);
    });
    const swiperPageInfo = ref(null);
    const setPageInfo = (info) => {
      swiperPageInfo.value = info;
    };
    const swipernext = () => {
      SwiperSpeaker.value.slickNext();
    };
    const swiperpre = () => {
      SwiperSpeaker.value.slickPrev();
    };
    onUnmounted(() => {
      EventBus.$off("pageInfo", setPageInfo);
      EventBus.$off("openDialog", openDialog);
    });

    const OutlineList = ref([
      {
        title: "Day 1 - Foundations and Innovations in Generative AI",
        content: "",
      },
      {
        title: "Main Stage",
        content:
          "1.	Keynote: The Future of Generative AI: Trends and Predictions <br/><br/>2.	Keynote: Ethical Implications of AI in Society <br/><br/>3.	Keynote: The Role of AI in Revolutionizing Traditional Industries <br/><br/>4.	Panel Discussion: Challenges and Opportunities in AI Education and Training <br/><br/>5.	Panel Discussion: AI in Healthcare: Innovations and Ethical Concerns <br/><br/>6.	Panel Discussion: The Impact of AI on Privacy and Data Security <br/><br/>7.	Panel Discussion: AI and the Future of Work: What Lies Ahead?",
      },
      {
        title: "Theater",
        content:
          "1.	Keynote: Demystifying AI: Understanding the Basics <br/><br/>2.	Keynote: Investing in AI: Opportunities and Risks <br/><br/>3.	Keynote: AI in Creative Industries: A Paradigm Shift <br/><br/>4.	Panel Discussion: Navigating the Regulatory Landscape of AI <br/><br/>5.	Panel Discussion: AI for Good: Social and Humanitarian Applications <br/><br/>6.	Panel Discussion: Integrating AI in Traditional Business Models <br/><br/>7.	Panel Discussion: Global Perspectives on AI Development and Adoption <br/>",
      },
      {
        title: "Break Out Rooms: Exploration and Learning",
        content:
          "Rooms 1: Dedicated Microsoft Track <br/><br/>Rooms 2: Dedicated OpenAI Track<br/><br/>Rooms 3-6: Introduction to Industry-specific AI Applications – Workshops and showcases focusing on the applications of AI in their respective industries, for developers, marketers and creators<br/><br/>Room 7: AI Career Fair – Connecting job seekers with recruiters in AI and tech companies<br/><br/>Room 8: AI for Social Impact – Discussions and showcases on how AI is used for social good initiatives<br/><br/>Room 9: Startup Pitch Session – Emerging AI startups present their innovative solutions<br/><br/>Room 10: Beginner's Workshop in AI – A hands-on workshop for those new to AI for text2video, text2audio, text2multimodal, and text2richcontent.<br/><br/><br/><br/>",
      },
    ]);

    const OutlineList2 = ref([
      {
        title: "Day 2 - Technical Deep Dives and Industry Applications",
        content: "",
      },
      {
        title: "Main Stage",
        content:
          "1.	Keynote: Advancements in AI Models: GPT-4 and Beyond <br/><br/>2.	Keynote: AI in Environmental Sustainability <br/><br/>3.	Keynote: Transforming Customer Experience with AI <br/><br/>4.	Panel Discussion: AI in Financial Services: Revolutionizing Banking and Insurance<br/><br/>5.	Panel Discussion: AI in Retail: Personalization and Efficiency<br/><br/>6.	Panel Discussion: The Intersection of AI and Cybersecurity<br/><br/>7.	Panel Discussion: AI and the Future of Transportation",
      },
      {
        title: "Theater",
        content:
          "1.	Keynote: AI in Manufacturing: Automation and Efficiency <br/><br/>2.	Keynote: AI in Education: Enhancing Learning Experiences<br/><br/>3.	Keynote: Women Leadership in AI<br/><br/>4.	Panel Discussion: The Ethics of AI in Autonomous Systems<br/><br/>5.	Panel Discussion: AI in Healthcare: Patient Care and Management<br/><br/>6.	Panel Discussion: AI's Role in Content Creation and Media<br/><br/>7.	Panel Discussion: Cross-Industry Collaboration in AI Development<br/>",
      },
      {
        title: "Break Out Rooms: Deep Dives and Networking",
        content:
          "Rooms 1: Dedicated Microsoft Track<br/><br/>Rooms 2: Dedicated OpenAI Track<br/><br/>Rooms 3-6: Advanced Applications and Challenges – In-depth discussions and showcases on the latest advancements and challenges in AI for different industries, for developers, marketers and creators<br/><br/>Room 7: Mentorship in AI – Networking session connecting attendees with experienced mentors in the AI field<br/><br/>Room 8: AI Ethics Roundtable – A discussion on ethical considerations in AI development<br/><br/>Room 9: Investor Meet & Greet – An opportunity for startups to network with potential investors<br/><br/>Room 10: Intermediate AI Workshop – A workshop focused on more advanced AI concepts and tools. <br/><br/><br/>",
      },
    ]);

    const OutlineList3 = ref([
      {
        title: "Day 3 - The Future Landscape and Policy Considerations",
        content: "",
      },
      {
        title: "Main Stage",
        content:
          "1.	Keynote: AI Governance: Balancing Innovation with Regulation <br/><br/>2.	Keynote: AI and Global Economy: Trends and Forecasts<br/><br/>3.	Keynote: AI in Public Sector: Opportunities and Challenges<br/><br/>4.	Panel Discussion: AI Policy: A Global Dialogue<br/><br/>5.	Panel Discussion: The Role of AI in Shaping Future Education Systems<br/><br/>6.	Panel Discussion: Ethical AI: Creating a Framework for Responsible AI<br/><br/>7.	Panel Discussion: AI and Human Interaction: The Next Decade",
      },
      {
        title: "Theater",
        content:
          "1.	Keynote: AI in Urban Planning and Smart Cities<br/><br/>2.	Keynote: The Impact of AI on Traditional Media and Journalism<br/><br/>3.	Keynote: AI and the Future of E-commerce<br/><br/>4.	Panel Discussion: AI in Entertainment: The Next Frontier<br/><br/>5.	Panel Discussion: The Role of AI in Enhancing Public Safety<br/><br/>6.	Panel Discussion: AI and Intellectual Property: Navigating the New Landscape<br/><br/>7.	Panel Discussion: Bridging the AI Talent Gap: Education and Workforce Development<br/>",
      },
      {
        title: "Break Out Rooms: Integration and Future Trends",
        content:
          "Rooms 1: Dedicated Microsoft Track <br/><br/>Rooms 2: Dedicated OpenAI Track <br/><br/>Rooms 3-6: Integrating AI into Business – Workshops on how to successfully integrate AI solutions into various business operations<br/><br/>Room 7: Career Development Workshops – Sessions focusing on skill development and career progression in the AI industry<br/><br/>Room 8: AI for Environmental Sustainability – Showcasing AI solutions addressing environmental challenges<br/><br/>Room 9: Innovations in AI – Presentations on cutting-edge AI technologies and future trends<br/><br/>Room 10: Advanced AI Workshop – A deep dive into complex AI models and methodologies.<br/><br/><br/>",
      },
    ]);

    const showOutlineList = ref(OutlineList.value);
    const dayTab = ref("Day1");

    const dayTabToggle = (val) => {
      dayTab.value = val;
      if (val == "Day1") {
        showOutlineList.value = OutlineList.value;
      }
      if (val == "Day2") {
        showOutlineList.value = OutlineList2.value;
      }
      if (val == "Day3") {
        showOutlineList.value = OutlineList3.value;
      }
    };
    //适配
    const screenWidth = computed(() => {
      return store.state.screenWidth;
    });
    const openDialog = (url) => {
      showDialog.value = true;
      showImgUrl.value = url;
    };
    const style = ref({
      width: "50%",
    });
    const pullAllStatus = ref(false);
    const pullAll = () => {
      style.value.width = "100%";
      pullAllStatus.value = true;
    };
    const closeDialog = () => {
      showDialog.value = false;
      style.value.width = "50%";
      showImgUrl.value = "";
      pullAllStatus.value = false;
    };
    if (screenWidth.value < 700) {
      style.value.width = "100%";
    }

    return {
      screenWidth,
      closeDialog,
      pullAll,
      pullAllStatus,
      style,
      showDialog,
      showImgUrl,
      imageRef,
      imageRef1,
      imageRef2,
      handleMouseMove,
      numberList,
      openUrl,
      speakersList,
      showSpeakersList,
      moreHanle,
      closeHanle,
      calculateTimeRemaining,
      timeObj,
      targetDate,
      swiperPageInfo,
      swipernext,
      swiperpre,
      SwiperSpeaker,
      OutlineList,
      OutlineList2,
      OutlineList3,
      showOutlineList,
      dayTab,
      dayTabToggle,
      icon1,
      icon2,
      icon3,
      icon4,
      icon5,
      icon6,
      icon7,
    };
  },
  components: {
    NumberCount,
    PersionItem,
    Swiper,
    Exhibition,
    StarBackground,
    SwiperDay
  },
  methods: {},
  mounted() {},
  unmounted() {},
};
</script>

<style scoped lang='scss'>
section {
  width: 100%;
  overflow: hidden;
}
.Experience {
  width: 100%;
  height: 500px;
  background-image: url("../assets/images/ico_background.png"); /* 设置背景图 */
  background-size: cover; /* 背景图填充整个背景区域 */
  background-position: center; /* 背景图居中 */
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;
  background-attachment: fixed;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
  }
  .t1 {
    font-family: HarmonyOS Sans SC Regular;
    font-weight: 400;
    font-size: 0.33rem;
    color: #ffffff;
    line-height: 0.37rem;
    text-align: left;
    font-style: normal;
    text-transform: none;
    width: 100%;
    max-width: 700px;
    margin-bottom: 0.3rem;
  }
  .t2 {
    font-family: HarmonyOS Sans SC Black;
    font-weight: 900;
    font-size: 0.95rem;
    color: #ffffff;
    line-height: 1rem;
    text-align: left;
    font-style: normal;
    text-transform: none;
    width: 100%;
    max-width: 700px;
  }
  .t3 {
    font-family: HarmonyOS Sans SC Regular;
    font-weight: 400;
    font-size: 0.35rem;
    color: #ffffff;
    line-height: 0.48rem;
    text-align: left;
    font-style: normal;
    text-transform: none;
    width: 100%;
    max-width: 700px;
    margin-top: 0.3rem;
  }
}
.cointainer {
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 0.5rem;
}
#section1 {
  padding: calc(1.1rem + 80px) 0 1.1rem;
  position: relative;
  overflow: hidden;
  height: calc(100vh);
  &.mb {
    height: 70vh;
  }
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.14) 0%,
    rgba(248, 251, 255, 0.73) 65%,
    #f4f9ff 100%
  );
  .video-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .background-video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    min-width: 100vw;
    height: auto;
    z-index: -1000;
  }

  .content {
    position: relative;
    z-index: 1;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    /* Add styles for your content */
    .ico {
      position: absolute;
      z-index: -1;
      &.ico1 {
        width: 50%;
        right: -2rem;
        bottom: -2rem;
      }
      &.ico2 {
        width: 50%;
        left: 0;
        top: 0;
      }
      &.ico3 {
        width: 50%;
        right: 0;
        top: 0;
      }
    }
    .b-title {
      font-family: HarmonyOS Sans SC Black;
      font-weight: 900;
      font-size: 0.888rem;
      color: #008aff;
      text-align: left;
      font-style: normal;
      text-transform: none;
      margin-bottom: 0.445rem;
      &.mb {
        font-size: 0.5rem;
      }
    }
    .h-title {
      font-family: HarmonyOS Sans SC Black;
      font-weight: 900;
      font-size: 1.48rem;
      color: #000000;
      text-align: left;
      font-style: normal;
      text-transform: none;
      &.mb {
        font-size: 0.7rem;
        .blue {
          font-size: 0.7rem;
        }
      }
      .blue {
        font-size: 1.48rem;
        text-transform: none;
        font-style: normal;
        background: linear-gradient(
          to right,
          #0066ff 0%,
          #0075ff 35%,
          #0044c9 100%
        );
        -webkit-background-clip: text; /* 将背景应用到文字上 */
        color: transparent; /* 设置文字颜色为透明，显示渐变效果 */
      }
    }
    .s-title {
      font-family: HarmonyOS Sans SC Regular;
      font-weight: 400;
      font-size: 0.296rem;
      color: #000000;
      text-align: left;
      font-style: normal;
      text-transform: none;
      display: flex;
      flex-wrap: wrap;
      div {
        display: flex;
        align-items: center;
        margin-right: 0.3rem;
        img {
          margin-right: 0.1rem;
          width: 0.4rem;
        }
      }
    }
    .btn-group {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .left {
        margin-top: 0.5rem;
        flex: 1;
        button {
          background: #000000;
          width: 3.111rem;
          height: 0.889rem;
          border: none;
          font-family: HarmonyOS Sans SC Bold;
          font-weight: bold;
          color: #ffffff;
          font-style: normal;
          text-transform: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: background-color 0.3s ease;
          z-index: 2;
          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background-color: #008aff;
            transition: left 0.15s ease;
            z-index: -1;
          }
          &:hover::before {
            left: 0;
          }
          .spinner0 {
            position: absolute;
            width: 1.1111rem;
            height: 1.1111rem;
            background-color: #008aff;
            background-repeat: no-repeat;
            background-position: center center;
            top: -0.6rem;
            left: -0.6rem;
            border-radius: 30px;
          }
        }
      }
      .right {
        margin-top: 0.5rem;
        .time-box {
          display: flex;
          align-items: center;
          .item {
            width: 1.59rem;
            height: 1.59rem;
            background: linear-gradient(
              180deg,
              rgba(255, 255, 255, 0) 0%,
              #ffffff 100%
            );
            border-radius: 0px 0px 0px 0px;
            border: 1px solid;
            border-image: linear-gradient(
                180deg,
                rgba(255, 255, 255, 1),
                rgba(255, 255, 255, 0)
              )
              1 1;
            font-family: HarmonyOS Sans SC Bold;
            font-weight: bold;
            font-size: 0.56rem;
            color: #001f3c;
            text-align: center;
            font-style: normal;
            text-transform: none;
            line-height: 1.59rem;
            position: relative;
            &::after {
              content: "";
              width: 100%;
              height: 1px;
              background: rgba(255, 255, 255, 0.5);
              position: absolute;
              left: 0;
              top: 50%;
              z-index: -1;
            }
          }
          .timetip {
            width: 0.8rem;
            height: 0.8rem;
            font-family: HarmonyOS Sans SC Regular;
            font-weight: 400;
            font-size: 0.37rem;
            color: rgba(0, 0, 0, 0.7);
            text-align: center;
            font-style: normal;
            text-transform: none;
            line-height: 0.8rem;
          }
        }
      }
    }
  }
}
.section-default {
  display: flex;
  flex-wrap: wrap;
  padding: 0 0.5rem;
  .left-content {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    flex: 1;
    display: flex;
    align-items: center;
    .sm-title {
      font-family: HarmonyOS Sans SC Regular;
      font-weight: 400;
      font-size: 0.296rem;
      color: #00a4ef;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
    .b-title {
      margin-top: 0.74rem;
      font-family: HarmonyOS Sans SC Black;
      font-weight: 900;
      font-size: 0.592rem;
      color: #0d0e0f;
      text-align: left;
      font-style: normal;
      text-transform: none;
      display: flex;
      align-items: center;
      img {
        width: 0.48rem;
        margin-right: 0.1rem;
      }
    }
    .text {
      margin-top: 0.2rem;
      font-family: HarmonyOS Sans SC Regular;
      font-weight: 400;
      font-size: 0.37rem;
      color: #78808f;
      text-align: left;
      font-style: normal;
      text-transform: none;
      line-height: 0.5rem;
    }
  }
  .right-content {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    width: 40%;
    &.mb {
      width: 100%;
    }
    .img-content {
      height: 100%;
      display: flex;
      align-items: flex-end;
      width: 70%;
      margin: 0 auto;
      position: relative;
      text-align: center;
      justify-content: center;
      &.mb {
        width: 100%;
        .DP {
          height: 40%;
        }
      }
      .DP {
        height: 40%;
      }
      .AI {
        width: 80%;
        left: 50%;
        margin-left: -40%;
        position: absolute;
        bottom: 25%;
        animation: up-down 2s ease-in-out infinite alternate-reverse both;
      }
      @keyframes up-down {
        0% {
          transform: translateY(0); /* 开始位置 */
        }
        100% {
          transform: translateY(-20px); /* 结束位置 */
        }
      }
      .SD,
      .SD1,
      .ELE {
        position: absolute;
        transition: transform 0.2s ease; /* 添加过渡效果 */
        &.SD {
          width: 1.6rem;
          left: 0%;
          top: 20%;
        }
        &.SD1 {
          width: 1.6rem;
          right: 25%;
          top: 10%;
        }
        &.ELE {
          width: 1.6rem;
          right: -30%;
          bottom: 50%;
        }
      }
    }
  }
}
.section-number {
  padding: 0 0.5rem;
  background: #ffffff;
  position: relative;
  overflow: hidden;
  .c {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 2.5rem;

    &.mb {
      .item {
        width: 50%;
      }
      padding-bottom: 1rem;
    }
    .wavs {
      position: absolute;
      bottom: -55%;
      left: 0;
      opacity: 0.4;
      z-index: 1;
      height: 8rem;
    }
  }

  .item {
    width: 25%;
    text-align: center;
    margin-top: 1rem;
    img {
      width: 0.89rem;
    }
    .number {
      font-family: HarmonyOS Sans SC Bold;
      font-weight: bold;
      font-size: 0.74rem;
      color: #000000;
      font-style: normal;
      text-transform: none;
      margin-top: 0.2rem;
    }
    .tip {
      font-family: HarmonyOS Sans SC Regular;
      font-weight: 400;
      font-size: 0.37rem;
      color: #78808f;
      font-style: normal;
      text-transform: none;
      margin-top: 0.2rem;
    }
  }
}
.bg-title {
  margin-top: 1.5rem;
  justify-content: space-between;
  align-items: center;
  display: flex;
  &.mb {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.5rem;
  }
  .left-title {
    min-width: 700px;
    // background: url("../assets/images/bg-title.png");
    background-size: contain;
    background-repeat: no-repeat; /* 防止背景图重复 */
    font-family: HarmonyOS Sans SC Bold;
    font-weight: bold;
    font-size: 0.74rem;
    line-height: 1rem;
    text-align: left;
    font-style: normal;
    text-transform: none;
    margin-top: 0.3rem;
    position: relative;
    padding-left: 0.2rem;
    &.before::before {
      content: "";
      position: absolute;
      width: 0.88rem;
      height: 0.88rem;
      background: linear-gradient(
        135deg,
        rgba(7, 120, 216, 0.36) 0%,
        rgba(9, 119, 213, 0) 100%
      );
      top: 0;
      left: 0;
    }
    &.mb {
      font-size: 0.5rem;
      min-width: auto;
      padding-right: 0.4rem;
      background-position: left top; /* 设置背景图位置为左上方 */
      background-repeat: no-repeat; /* 设置不重复 */
      background-size: cover; /* 使用 cover 来填充整个容器 */
    }
    &.left-title2 {
      background: none;
      padding-left: 0;
      margin-top: 0;
    }
  }
}
.ss-title {
  font-family: HarmonyOS Sans SC Regular;
  font-weight: 400;
  font-size: 0.296rem;
  color: #00a1f1;
  line-height: 19px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  padding: 0.1rem 0;
  margin-top: 0.1rem;
}
.ss-title2 {
  font-family: HarmonyOS Sans SC Regular;
  font-weight: 400;
  font-size: 0.296rem;
  color: #000000;
  line-height: 19px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  padding: 0.1rem 0;
  margin-top: 0.1rem;
}
.sss-title {
  font-family: HarmonyOS Sans SC Regular;
  font-weight: 400;
  font-size: 0.31rem;
  color: #000000;
  line-height: 0.45rem;
  text-align: left;
  font-style: normal;
  text-transform: none;
  margin-top: 0.15rem;
  max-width: 900px;
}
.Exhibition {
  margin-top: 0.4rem;
}
.instration {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.4rem;
  &.mb {
    .list {
      width: 47%;
      margin-right: 6%;
      &:nth-child(3n) {
        margin-right: 6%;
      }
      &:nth-child(2n) {
        margin-right: 0;
      }
    }
  }
  .list {
    margin-top: 0.3rem;
    width: 32%;
    margin-right: 2%;
    padding: 0.3rem 0.3rem 0.6rem 0.3rem;
    cursor: pointer;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.26) 0%,
      rgba(255, 255, 255, 0.06) 100%
    );
    border-radius: 0px 0px 0px 0px;
    border: 1px solid transparent;
    border-bottom: none;
    position: relative;
    overflow: hidden;
    .active {
      width: 2rem;
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 1;
      transition: opacity 0.8s ease; /* 透明度变化将在1秒内平滑过渡 */
      opacity: 0;

    }
    &:hover {
      border: 1px solid;
      .active {
        opacity: 1;
      }
      border-image: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.54),
          rgba(255, 255, 255, 0)
        )
        1 1;
      border-bottom: none;
    }
    &:nth-child(3n) {
      margin-right: 0;
    }
    .top {
      display: flex;
      align-items: center;
      img {
        width: 0.75rem;
        margin-right: 0.15rem;
      }
      .title {
        font-family: HarmonyOS Sans SC Bold;
        font-weight: bold;
        font-size: 0.33rem;
        color: #ffffff;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }
    .bottom {
      padding-left: 0.9rem;
      font-family: HarmonyOS Sans SC Regular;
      font-weight: 400;
      font-size: 0.3rem;
      color: rgba(255, 255, 255, 0.7);
      line-height: 18px;
      text-align: left;
      font-style: normal;
      text-transform: none;
      margin-top: 4%;
      z-index: 2;
      position: relative;
    }
  }
}
#section2 {
  .speaker-list {
    display: flex;
    flex-wrap: wrap;
    .list {
      width: 22%;
      margin-left: 2%;
      margin-top: 2%;
    }
    &.mb {
      .list {
        width: 48%;
      }
    }
  }
  .moreDiv {
    border: 1px solid #008aff;
    font-weight: bold;
    font-family: HarmonyOS Sans SC Bold;
    font-weight: bold;
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
    cursor: grab;
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
      background-color: #008aff;
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
      color: #ffffff;
      img {
        &.a {
          display: block;
        }
        &.d {
          display: none;
        }
      }
    }
  }

  .swiper-content {
    width: 100%;
    margin-top: 0.5rem;
    cursor: pointer;
  }
  .swiper-content {
    width: 100%;
    margin-top: 0.5rem;
  }
  .page {
    display: flex;
    .fk {
      height: 0.74rem;
      width: 0.74rem;
      border: 1px solid #000000;
      cursor: pointer;
      margin-left: 0.2rem;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      .d {
        display: inline-block;
      }
      .a {
        display: none;
      }
      &:hover {
        background: #008aff;
        border: 1px solid #008aff;
        .d {
          display: none;
        }
        .a {
          display: inline-block;
        }
      }
      &.long {
        width: 1.64rem;
        &:hover {
          border: 1px solid #000000;
          background: none;
        }
        & > div {
          display: flex;
          align-items: end;
        }
        .big {
          font-family: HarmonyOS Sans SC Bold;
          font-weight: bold;
          font-size: 24px;
          color: #000000;
          line-height: 28px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
      }
    }
  }
}
.GenAISummit {
  background: url("../assets//images/GenAISummitBg.png") no-repeat;
  background-size: 100% 100%;
  padding: 2rem 0 1rem;
  .title {
    font-family: Microsoft YaHei;
    font-weight: bold;
    font-size: 0.74rem;
    color: #ffffff;
    line-height: 0.87rem;
    text-align: center;
    font-style: normal;
    .color {
      font-size: 0.74rem;
      text-transform: none;
      font-style: normal;
      background: linear-gradient(
        to right,
        #0066ff 0%,
        #0075ff 35%,
        #0044c9 100%
      );
      -webkit-background-clip: text; /* 将背景应用到文字上 */
      color: transparent; /* 设置文字颜色为透明，显示渐变效果 */
    }
  }
  .ss-title {
    font-family: Microsoft YaHei, Microsoft YaHei;
    font-weight: 400;
    font-size: 0.296rem;
    color: rgba(255, 255, 255, 0.5);
    line-height: 0.3rem;
    text-align: center;
    font-style: normal;
    text-transform: none;
  }
}
#section3 {
  .office {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.5rem;
    align-items: center;
    &.mb {
      .list {
        width: 30%;
        margin-bottom: 0.3rem;
      }
      .title_img {
        width: 30%;
        margin-bottom: 0.3rem;
        img {
          width: 100%;
        }
      }
    }
    .title_img {
      margin-right: 0.4rem;
      img {
        width: 4rem;
      }
    }
    .list {
      flex: 1;
      background: #ffffff;
      text-align: center;
      cursor: pointer;
      height: 1.8rem;
      z-index: 2;
      display: flex;
      justify-content: center;
      border-radius: 1.5rem;
      margin-left: .4rem;
      &:first-child{
        margin-left: 0;
      }
      img {
        height: 1.8rem;
        z-index: -1;
        &.d {
          display: block;
        }
        &.a {
          display: none;
        }
      }
      &:hover {
        background: #008aff;
        height: 100%;
        img {
          &.a {
            display: block;
          }
          &.d {
            display: none;
          }
        }
      }
    }
  }

}
.Recognition-bg{
  background:  url('../assets/images/Recognition-bg.png');
  background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: start;
    position: relative;
    padding: .6rem 0 1rem;
    .cointainer{
      .bg-title{
        margin-top: 0;
      }
      .left-title{
        color: #FFFFFF;
      }
      .ss-title{
        color: rgba(255,255,255,.7);
      }
    }
  .Recognition {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.4rem;
    background: rgba(255,255,255,0.8);
    border-radius: 0px 0px 0px 0px;
    border: 1px solid;
    border-image: linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)) 1 1;
    .list-img {
      width: 100%;
      max-width: 400px;
      display: flex;
      align-items: center;
      img {
        width: 100%;
      }
    }
    .list {
      flex: 1;
      padding: 1rem 0.6rem;
      display: flex;
      align-items: center;
      .title {
        font-family: HarmonyOS Sans SC Bold;
        font-weight: bold;
        font-size: 0.59rem;
        color: #000000;
        line-height: 0.74rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
      .text {
        font-family: HarmonyOS Sans SC Regular;
        font-weight: 400;
        font-size: 0.296rem;
        color: rgba(19, 19, 19, 0.4);
        line-height: 0.5rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
        margin-top: 0.3rem;
      }
    }
  }
}
#section4 {

}

.open-btn {
  margin-top: 0.3rem;
  button {
    padding: 0 0.2rem;
    height: 0.74rem;
    line-height: calc(0.74rem - 2px);
    border-radius: 0px 0px 0px 0px;
    border: 1px solid #008aff;
    font-family: HarmonyOS Sans SC Black;
    font-weight: 900;
    font-size: 0.296rem;
    color: #008aff;
    text-align: center;
    font-style: normal;
    text-transform: none;
    background: #ffffff;
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: background-color 0.5s ease;
    z-index: 2;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background-color: #008aff;
      transition: left 0.15s ease;
      z-index: -1;
    }
    &:hover::before {
      left: 0;
    }
    img {
      display: none;
      width: 0.37rem;
      margin-left: 0.1rem;
    }
    &:hover {
      color: #ffffff;
      img {
        display: block;
      }
    }
  }
}
.dialog {
  top: 0;
  left: 0;
  z-index: 9999;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px); /* 模糊效果，可以调整模糊程度 */
  -webkit-backdrop-filter: blur(10px); /* Safari 支持 */
  .img-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .detail {
      position: relative;
      overflow: hidden;
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