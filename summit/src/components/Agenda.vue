<template>
  <div class="swoperCont_days">
    <div class="tab">
      <div class="tab-item tab-item1" @click="dayActive = 'day1'" :class="dayActive == 'day1' ? 'active' : ''">
      <div class="daybg">Day1</div>
    </div>
      <div class="tab-item tab-item2" @click="dayActive = 'day2'" :class="dayActive == 'day2' ? 'active' : ''">
        <div class="daybg">Day2</div>
      </div>
      <div class="tab-item tab-item3" @click="dayActive = 'day3'" :class="dayActive == 'day3' ? 'active' : ''">
        <div class="daybg">Day3</div>
      </div>
    </div>
    <div v-if="dayActive == 'day1'" class="ss-content">
        <div class="time-list">
          <img src="../assets/images/ico_shijian.png" alt="">
          May 29, 2024
        </div>
          <!-- <div class="img">
            <img src="../assets/images/day1.png" alt="" />
            <div class="info">
              <div>
                <div class="title">Day1</div>
                <div class="date d1">May 29, 2024</div>
              </div>
            </div>
          </div> -->
          <div class="inner_ss-content">
            <div class="ss-content_item" data-aos="fade-up" v-for="item in OutlineList" :key="item">
              <img class="flagBg" src="../assets/images/ico_yuan.svg" alt="" />
              <div class="title">{{ item.title }}</div>
              <div class="detail" v-html="item.content"></div>
            </div>
          </div>
    </div>
    <div v-if="dayActive == 'day2'" class="ss-content">
      <div class="time-list">
          <img src="../assets/images/ico_shijian.png" alt="">
          May 30, 2024
        </div>
      <!-- <div class="img">
        <img src="../assets/images/day2.png" alt="" />
        <div class="info">
          <div>
            <div class="title">Day2</div>
            <div class="date d2">May 30, 2024</div>
          </div>
        </div>
      </div> -->
      <div class="inner_ss-content">
        <div class="ss-content_item" data-aos="fade-up" v-for="item in OutlineList2" :key="item">
          <img class="flagBg" src="../assets/images/ico_yuan.svg" alt="" />
          <div class="title">{{ item.title }}</div>
          <div class="detail" v-html="item.content"></div>
        </div>
      </div>
    </div>
    <div v-if="dayActive == 'day3'" class="ss-content">
      <!-- <div class="img">
        <img src="../assets/images/day3.png" alt="" />
        <div class="info">
          <div>
            <div class="title">Day3</div>
            <div class="date d3">May 31, 2024</div>
          </div>
        </div>
      </div> -->
      <div class="time-list">
          <img src="../assets/images/ico_shijian.png" alt="">
          May 31, 2024
        </div>
      <div class="inner_ss-content">
        <div class="ss-content_item" data-aos="fade-up" v-for="item in OutlineList3" :key="item">
          <img class="flagBg" src="../assets/images/ico_yuan.svg" alt="" />
          <div class="title">{{ item.title }}</div>
          <div class="detail" v-html="item.content"></div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { ref, computed, watch, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "",
  setup() {
    const store = useStore();
    //适配
    const screenWidth = computed(() => {
      return store.state.screenWidth;
    });
    const pageSize = ref(3);
    const slidesToShow = ref(2.5);
    if (screenWidth.value < 800) {
      slidesToShow.value = 1.2;
    }
    onMounted(() => {
      
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
    const dayActive = ref('day1')
    return {
      screenWidth,
      OutlineList,
      OutlineList2,
      OutlineList3,
      dayActive,
   
    };
  },
  components: {},
  methods: {},
  mounted() {},
  unmounted() {},
};
</script>

<style scoped lang='scss'>
.slick-carousel2 {
  width: 100%;
  margin-top: 0.4rem;
}
.swiper_box {
  padding-left: 0.3rem;
  position: relative;
  &.np {
    padding-left: 0;
  }
  &.swiper_box1 {
    &.shadow-left {
      &::before {
        position: absolute;
        content: "";
        display: block;
        width: 100px;
        height: 100%;
        background: linear-gradient(
          270deg,
          #f4f9ff 0%,
          rgba(244, 249, 255, 0) 100%
        );
        top: 0;
        left: 50%;
        z-index: 999;
      }
    }
  }
  &.swiper_box3 {
    &.shadow-right {
      &::before {
        position: absolute;
        content: "";
        display: block;
        width: 100px;
        height: 100%;
        background: linear-gradient(
          270deg,
          #f4f9ff 0%,
          rgba(244, 249, 255, 0) 100%
        );
        top: 0;
        right: 50%;
        z-index: 999;
      }
    }
  }
}
.ss-content {
  width: 100%;
  background: #ffffff;
  .time-list{
    display: flex;
    align-items: center;
    font-family: Microsoft YaHei, Microsoft YaHei;
    font-weight: bold;
    font-size: .37rem;
    color: #0778D8;
    padding: .3rem;
    img{
      width: .45rem;
      margin-right: 5px;
    }
  }
  .img {
    position: relative;
    img {
      width: 100%;
    }
    .info {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      padding-left: 0.4rem;
      .title {
        font-family: Microsoft YaHei, Microsoft YaHei;
        font-weight: bold;
        font-size: 0.59rem;
        color: #202020;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
      .date {
        height: 0.5rem;
        line-height: 0.5rem;
        padding: 0 0.25rem;
        text-align: center;
        background: linear-gradient(
          90deg,
          #ffffff 43%,
          rgba(255, 255, 255, 0.7) 100%
        );
        font-family: Microsoft YaHei, Microsoft YaHei;
        font-weight: 400;
        font-size: 0.296rem;
        text-align: left;
        font-style: normal;
        text-transform: none;
        margin-top: 0.1rem;
        &.d1 {
          color: #0382ee;
        }
        &.d2 {
          color: #ff8a00;
        }
        &.d3 {
          color: #00b934;
        }
      }
    }
  }
  .inner_ss-content {
    height: 11.1111rem;
    width: 100%;
    color: #000000;
    overflow: hidden;
    overflow-y: auto;
    padding: 0.3rem;
    .ss-content_item {
      padding-left: 0.44rem;
      border-left: 1px solid rgba(0, 0, 0, 0.2);
      position: relative;
      padding-bottom: 0.7407rem;
      font-family: HarmonyOS Sans SC bold;
      .flagBg {
        width: 12px;
        height: 12px;
        position: absolute;
        top: 0;
        left: -6px;
      }
      .title {
        // padding-top: 0.44rem;
        font-size: 0.44rem;
        font-weight: bold;
        font-family: HarmonyOS Sans SC bold;
      }
      .detail {
        font-size: 0.2963rem;
        font-family: HarmonyOS Sans SC Regular;
        margin-top: 0.2963rem;
      }
    }
  }
}
.swoperCont_days {
 .tab{
    display: flex;
    width: 16rem;
    height: 1.1rem;
    margin-top: 20px;
    .tab-item{
      font-family: Microsoft YaHei, Microsoft YaHei;
      font-weight: bold;
      font-size: .37rem;
      color: rgba(7,120,216,0.3);
      .daybg{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      &.tab-item1.active{
        .daybg{
          background: url('../assets/images/day1_active.png');
          background-size: 100% 100%;
          color: #FFFFFF;
        }
      }
      &.tab-item2.active{
        .daybg{
          background: url('../assets/images/day2_active.png');
          background-size: 100% 100%;
          color: #FFFFFF;
        }
      }
      &.tab-item3.active{
        .daybg{
          background: url('../assets/images/day3_active.png');
          background-size: 100% 100%;
          color: #FFFFFF;
        }
      }
    }
    .tab-item1,.tab-item2{
      width: 33%;
      background: rgba(220,236,251,0.5);
      height: 1.1rem;
    }
    .tab-item3{
      height: 1.1rem;
      width: 34%;
      background: url('../assets/images/moren_day.png');
      background-size: 100% 100%;
    }
  }
}

</style>