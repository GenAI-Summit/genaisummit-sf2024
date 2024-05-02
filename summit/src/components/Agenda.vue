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
        title: "Main Stage",
        content:
        "1. Keynote 09:00 - 10:00: The Future of Foundation Models<br/><br/>2.  Keynote 10:00-11:00: What’s Next Big Moment in Generative AI? <br/><br/>3.  Keynote 11:00-12:00: Enterprise AI Search & Knowledge Discovery <br/><br/>4.  Panel Discussion 13:00-13:45: Key Challenges for Providing GenAI Services On Scalable Cloud Infrastructure <br/><br/>5.  Keynote 13:45-14:30: Vector Database built for enterprise-grade AI applications <br/><br/>6. Fireside Chat 14:30-15:15: GenAI Venture Investment Landscape 2.0 <br/><br/>7.  Panel Discussion 15:15-16:00: Robotics and GenAI <br/><br/>8.  Panel Discussion 16:00-16:45: AI and the Future of Work: What Lies Ahead?", 

      },
      {
        title: "Theater",
        content:"1. Keynote 09:00-09:45: Advancements in Embodied AI: Key Technologies, Applications, and Future Trends <br/><br/>2.  Keynote 09:45-10:30: How Far is Grok towards the Understanding of the Universe <br/><br/>3.  Keynote 10:30-11:15: Optimizing Enterprise Systems through Integration of LLM <br/><br/>4. Keynote 11:15-12:00: From Sci-Fi Dreams to Sustainable Solutions: GenAI for a Better World<br/><br/>5.  Panel Discussion 13:00-13:45: A Deep Dive into the State-of-the-Art LLMs <br/><br/>6. Panel Discussion 13:45-14:30: Conversational AI in Sales and Marketing <br/><br/>7. Panel Discussion 14:30-15:15: How AI Is Reshaping Medicine and Healthcare <br/><br/>8. Panel Discussion 15:15-16:00: A New Renaissance in Art & Design <br/><br/>9. Panel Discussion 16:00-16:45: The Impact of AI on Privacy and Data Security ",
 },
      {
        title: "Break Out Rooms: Exploration and Learning",
        content:
          "Rooms 1: Dedicated Microsoft Track <br/><br/>Rooms 2: Dedicated OpenAI Track<br/><br/>Rooms 3-6: Introduction to Industry-specific AI Applications – Workshops and showcases focusing on the applications of AI in their respective industries, for developers, marketers and creators<br/><br/>Room 7: AI Career Fair – Connecting job seekers with recruiters in AI and tech companies<br/><br/>Room 8: AI for Social Impact – Discussions and showcases on how AI is used for social good initiatives<br/><br/>Room 9: Startup Pitch Session – Emerging AI startups present their innovative solutions<br/><br/>Room 10: Beginner's Workshop in AI – A hands-on workshop for those new to AI for text2video, text2audio, text2multimodal, and text2richcontent.<br/><br/><br/><br/>",
      },
    ]);

    const OutlineList2 = ref([
      
      {
        title: "Main Stage",
        content:"1. Keynote 09:00-09:45: The Role of Generative AI in Advancing Industrial Automation and Smart Manufacturing <br/><br/>2.  Keynote 09:45-10:30: Unlocks the Power of Knowledge with information discovery and sharing <br/><br/>3. Keynote 10:30-11:15: Challenges and Opportunities in AI Education and Training <br/><br/>4. Keynote 11:15-12:00: AI in Healthcare: Innovations and Ethical Concerns<br/><br/>5. Panel Discussion 13:00-13:45: Harnessing the Power of LLM for Super Agents: Capabilities, Challenges, and Future Prospects <br/><br/>6.  Panel Discussion 13:45-14:30: LLM Alignment<br/><br/>7. Panel Discussion 14:30-15:15: VC in the Future <br/><br/>8. Panel Discussion 15:15-16:00: How does LLM Helps to Preserve Minority Culture<br/><br/>9. Keynote 16:00-16:45: What Makes SF and CA the Capital of AI in the World",
 },
      {
        title: "Theater",
        content:"1. Keynote 09:00-09:45: Will be provided by Speaker soon <br/><br/>2.  Keynote 09:45-10:30: Lightning Speed AI Inference to understand profoundly and intuitively <br/><br/>3.  Keynote 10:30-11:15: AI for Work: How GenAI Improves the Way We Work and Collaborate <br/><br/>4. Keynote 11:15-12:00: Demystifying AI: Understanding the Basics <br/><br/>5.  Panel Discussion 13:00-13:45: AI for Good: Social and Humanitarian Applications <br/><br/>6. Panel Discussion 13:45-14:30: Pioneering Women in Generative AI <br/><br/>7. Panel Discussion 14:30-15:15: The World of Customer Support with AI Agents <br/><br/>8. Panel Discussion 15:15-16:00: LLM Safety and Security <br/><br/>9. Panel Discussion 16:00-16:45: Integrating AI in Traditional Business Models ",
 },
      {
        title: "Break Out Rooms: Deep Dives and Networking",
        content:
          "Rooms 1: Dedicated Microsoft Track<br/><br/>Rooms 2: Dedicated OpenAI Track<br/><br/>Rooms 3-6: Advanced Applications and Challenges – In-depth discussions and showcases on the latest advancements and challenges in AI for different industries, for developers, marketers and creators<br/><br/>Room 7: Mentorship in AI – Networking session connecting attendees with experienced mentors in the AI field<br/><br/>Room 8: AI Ethics Roundtable – A discussion on ethical considerations in AI development<br/><br/>Room 9: Investor Meet & Greet – An opportunity for startups to network with potential investors<br/><br/>Room 10: Intermediate AI Workshop – A workshop focused on more advanced AI concepts and tools. <br/><br/><br/>",
      },
    ]);

    const OutlineList3 = ref([
      
      {
        title: "Main Stage",
        content:"1. Keynote 09:00-09:45: Transforming Customer Service with Generative AI <br/><br/>2.  Keynote 09:45-10:30: What Does AI Mean for Cloud Infrastructure <br/><br/>3.  Keynote 10:30-11:15: Transform Enterprise Work With Full-stack Generative AI <br/><br/>4.  Keynote 11:15-12:00: The Impact of AI on Privacy and Data Security <br/><br/>5. Panel Discussion 13:00-13:45: VectorDB 2.0 with Longer Context Window <br/><br/>6.  Panel Discussion 13:45-14:30: Experiment Tracking and Prompt Engineering Practices <br/><br/>7. Panel Discussion 14:30-15:15: Building a Responsible AGI: Ethics of AI in Decision-Making <br/><br/>8. Panel Discussion 15:15-16:00: Video Generation Models: from Research to Production <br/><br/>9. Panel Discussion 16:00-16:45: AI in Environmental Sustainability",
},
      {
        title: "Theater",
        content:
"1. Keynote 09:00-09:45: Will be provided by Speaker soon <br/><br/>2.  Keynote 09:45-10:30: Will be provided by Speaker soon <br/><br/>3.  Keynote 10:30-11:15: AI in Manufacturing: Automation and Efficiency <br/><br/>4. Keynote 11:15-12:00: AI in Education: Enhancing Learning Experiences <br/><br/>5.  Panel Discussion 13:00-13:45: AI and the Future of Human Work <br/><br/>6. Panel Discussion 13:45-14:30: Synthesizing Data Generation <br/><br/>7. Panel Discussion 14:30-15:15: AI and Intellectual Property: Navigating the New Landscape <br/><br/>8. Panel Discussion 15:15-16:00: Building the Future Classroom <br/><br/>9. Panel Discussion 16:00-16:45: Cross-Industry Collaboration in AI Development ",
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
    width: 100%;
    display: flex;
    max-width: 16rem;
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