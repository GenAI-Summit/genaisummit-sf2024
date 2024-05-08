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
                <button>
                  <div class="spinner0"></div>
                  Buy Tickets
                </button>
                <div class="buy-listBox">
                  <div class="list" @click="BuyTicketsLuma">
                    <img class="luma" src="../assets/images/luma.png" alt="" />
                  </div>
                  <div class="list" @click="BuyTickets">
                    <img
                      class="event"
                      src="../assets/images/event.png"
                      alt=""
                    />
                  </div>
                </div>
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
        <!-- <img class="ico ico1" src="../assets/images/ico_dim1.png" alt="" />
        <img class="ico ico2" src="../assets/images/ico_dim2.png" alt="" />
        <img class="ico ico3" src="../assets/images/ico_dim3.png" alt="" /> -->
      </div>

      <div class="top_item">
        <div>
          <div class="show_title">Sponsored by</div>

          <div class="item_bg_box">
            <img src="../assets/images/micro_logo.png" alt="" />
            <div class="more" @click="goPageHandle">
              more
              <img src="../assets/images/down_more.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>


      <section id="sponsor_section" class="cointainer">
        <div class="bg-title" :class="screenWidth > 600 ? '' : 'mb'">
          <div
            class="left-title before"
            :class="screenWidth > 600 ? '' : 'mb'"
            data-aos="flip-up"
          >
            Sponsors
          </div>
          <div class="open-btn">
            <button @click="openUrl('https://forms.gle/9pTcvfZcVEVRzmQZ8')">
              Become Our Sponsor
              <img src="../assets/images/general_return.png" alt="" />
            </button>
          </div>
        </div>
        <div class="ss-title" data-aos="flip-up">
          CHECK WHO MAKES THIS EVENT POSSIBLE!
        </div>

        <div class="office_content">
          <div class="office" :class="screenWidth > 600 ? '' : 'mb'">
            <div class="title_img">
              <img src="../assets/images/diam.png" alt="" />
            </div>
            <div
              class="list"
              @click="openUrl('https://www.microsoft.com/en-us/')"
            >
              <img class="d" src="../assets/images/sponsors/microsoft3.png" alt="" />
              <img class="a" src="../assets/images/sponsors/microsoft3.png" alt="" />
            </div>
          </div>
        </div>
        <div class="office_content">
          <div class="office" :class="screenWidth > 600 ? '' : 'mb'">
            <div class="title_img">
              <img src="../assets/images/plat.png" alt="" />
            </div>
            <!-- <div class="list" @click="openUrl('https://cloud.google.com/')">
              <img class="d" src="../assets/images/ico_logo_g2.png" alt="" />
              <img class="a" src="../assets/images/ico_logo_g1.png" alt="" />
            </div> -->
            <div
              class="list"
              @click="openUrl('https://aws.amazon.com/startups?lang=en-US')"
            >
              <img class="d" src="../assets/images/sponsors/aws.png" alt="" />
              <img class="a" src="../assets/images/sponsors/aws.png" alt="" />
            </div>
          </div>
        </div>


        <!-- gold -->
        <div class="office_content">
          <div class="office" :class="screenWidth > 600 ? '' : 'mb'">
            <div class="title_img">
              <img src="../assets/images/gold.png" alt="" />
            </div>
            <!-- <div class="list" @click="openUrl('https://cloud.google.com/')">
              <img class="d" src="../assets/images/ico_logo_g2.png" alt="" />
              <img class="a" src="../assets/images/ico_logo_g1.png" alt="" />
            </div> -->
            <div
              class="list"
              @click="openUrl('https://www.ibm.com/us-en/')"
            >
              <img class="d" src="../assets/images/sponsors/IBM2.jpg" alt="" />
              <img class="a" src="../assets/images/sponsors/IBM2.jpg" alt="" />
            </div>

            <div
              class="list"
              @click="openUrl('https://www.iobc.capital/#/')"
            >
              <img class="d" src="../assets/images/sponsors/iobc.png" alt="" />
              <img class="a" src="../assets/images/sponsors/iobc.png" alt="" />
            </div>

          </div>
        </div>


        <!-- silver -->
        <div class="office_content">
          <div class="office" :class="screenWidth > 600 ? '' : 'mb'">
            <div class="title_img">
              <img src="../assets/images/silver.png" alt="" />
            </div>
            <!-- <div class="list" @click="openUrl('https://cloud.google.com/')">
              <img class="d" src="../assets/images/ico_logo_g2.png" alt="" />
              <img class="a" src="../assets/images/ico_logo_g1.png" alt="" />
            </div> -->
            <div
              class="list"
              @click="openUrl('https://sambanova.ai/')"
            >
              <img class="d" src="../assets/images/sponsors/samba.png" alt="" />
              <img class="a" src="../assets/images/sponsors/samba.png" alt="" />
            </div>

            <div
              class="list"
              @click="openUrl('https://otter.ai/')"
            >
              <img class="d" src="../assets/images/sponsors/otter2.jpg" alt="" />
              <img class="a" src="../assets/images/sponsors/otter2.jpg" alt="" />
            </div>

            <div
              class="list"
              @click="openUrl('https://zilliz.com/')"
            >
              <img class="d" src="../assets/images/sponsors/zilliz.png" alt="" />
              <img class="a" src="../assets/images/sponsors/zilliz.png" alt="" />
            </div>

          </div>
        </div>
      </section>


    <div class="bg">
      <div class="section-number">
        <section class="cointainer">
          <div class="pantners">
            <!-- <div class="cointainer">
          <div class="bg-title" :class="screenWidth > 600 ? '' : 'mb'">
            <div class="left-title before" :class="screenWidth > 600 ? '' : 'mb'" data-aos="flip-up">
              Sponsored By
            </div>

          </div>
          <div class="pantnersList">
            <div class="pantnersItem" @click="openUrl(item.url)" :class="screenWidth > 600 ? '' : 'mb'" v-for="(item,index) in EventPartners2" :key="index" data-aos="zoom-in">
              <img :src="item.img" alt="">
            </div>
            
          </div>
        </div> -->
          </div>

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
          <div
            class="left-title before"
            :class="screenWidth > 600 ? '' : 'mb'"
            data-aos="flip-up"
          >
            Speakers
          </div>
          <div class="open-btn">
            <button @click="openUrl('https://forms.gle/9pTcvfZcVEVRzmQZ8')">
              Be our Speaker
              <img src="../assets/images/general_return.png" alt="" />
            </button>
          </div>
        </div>
        <div class="ss-title" data-aos="flip-up">
          LISTEN TO THE EVENT SPEAKERS
        </div>
        <div class="speak-content">
          <div
            class="speaker-list"
            ref="speakerList"
            :class="screenWidth > 600 ? '' : 'mb'"
          >
            <div
              class="list"
              v-for="(item, index) in showSpeakersList"
              :key="index"
              data-aos="zoom-in"
            >
              <PersionItem :item="item" />
            </div>
          </div>
        </div>

        <!-- no more button
        <div class="moreDiv" v-if="showAll < 2" @click="moreHanle">
          More
          <img class="a" src="../assets/images/general_return_xia.png" alt="" />
          <img
            class="d"
            src="../assets/images/general_return_xia_d.png"
            alt=""
          />
        </div>
        <div class="moreDiv" v-if="showAll == 2" @click="closeHanle">
          Hide
          <img class="a" src="../assets/images/general_return_up.png" alt="" />
          <img
            class="d"
            src="../assets/images/general_return_up_d.png"
            alt=""
          />
        </div>
        -->

        <div class="bg-title" :class="screenWidth > 600 ? '' : 'mb'">
          <div
            class="left-title before"
            :class="screenWidth > 600 ? '' : 'mb'"
            data-aos="flip-up"
          >
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
                <span class="big">
                  {{ swiperPageInfo.nowPage }}
                </span>
                /{{ swiperPageInfo.pages }}
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
      </section>

      <section id="section5" class="cointainer">
        <div class="bg-title" :class="screenWidth > 600 ? '' : 'mb'">
          <div
            class="left-title before"
            :class="screenWidth > 600 ? '' : 'mb'"
            data-aos="flip-up"
          >
            WorkShops
          </div>
          <div class="open-btn">
            <button @click="openUrl('https://forms.gle/9pTcvfZcVEVRzmQZ8')">
              WorkShop Application
              <img src="../assets/images/general_return.png" alt="" />
            </button>
          </div>
        </div>
        <div class="ss-title" data-aos="flip-up">
          INSIDE OF LESSONS TO LEARN NEW TECHNOLOGY!
        </div>
        <div class="sss-title" data-aos="flip-up">
          Applied Generative AI Workshops offer a comprehensive solution that equips both technical and non-technical attendees from all age groups with essential skills in just 60 minutes.
          Here are a few highlighted sessions (Updated weekly, <i>please bring your labtop</i>):
        </div>

        <div class="office_content">
          <div class="office" :class="screenWidth > 600 ? '' : 'mb'">
            
            <div
              class="list"
              @click="openUrl('https://www.nvidia.com/en-us/')"
            >
              <img class="d" src="../assets/images/workshop/nvidia.png" alt="" />
              <img class="a" src="../assets/images/workshop/nvidia.png" alt="" />
            </div>
            <div
              class="list"
              @click="openUrl('https://aws.amazon.com/startups?lang=en-US')"
            >
              <img class="d" src="../assets/images/sponsors/aws.png" alt="" />
              <img class="a" src="../assets/images/sponsors/aws.png" alt="" />
            </div>

          </div>
        </div>


        <!-- gold -->
        <div class="office_content">
          <div class="office" :class="screenWidth > 600 ? '' : 'mb'">
            
            <!-- <div class="list" @click="openUrl('https://cloud.google.com/')">
              <img class="d" src="../assets/images/ico_logo_g2.png" alt="" />
              <img class="a" src="../assets/images/ico_logo_g1.png" alt="" />
            </div> -->
            <div
              class="list"
              @click="openUrl('https://sambanova.ai/')"
            >
              <img class="d" src="../assets/images/sponsors/samba.png" alt="" />
              <img class="a" src="../assets/images/sponsors/samba.png" alt="" />
            </div>
            <div
              class="list"
              @click="openUrl('https://zilliz.com/')"
            >
              <img class="d" src="../assets/images/sponsors/zilliz.png" alt="" />
              <img class="a" src="../assets/images/sponsors/zilliz.png" alt="" />
            </div>
          </div>
        </div>

        <div class="office_content">
          <div class="office" :class="screenWidth > 600 ? '' : 'mb'">
            
            <!-- <div class="list" @click="openUrl('https://cloud.google.com/')">
              <img class="d" src="../assets/images/ico_logo_g2.png" alt="" />
              <img class="a" src="../assets/images/ico_logo_g1.png" alt="" />
            </div> -->
            <div
              class="list"
              @click="openUrl('https://otter.ai/')"
            >
              <img class="d" src="../assets/images/sponsors/otter.png" alt="" />
              <img class="a" src="../assets/images/sponsors/otter.png" alt="" />
              
            </div>
            <div
              class="list"
            
            >
              <img class="d" src="../assets/images/sponsors/play.png" alt="" />
              <img class="a" src="../assets/images/sponsors/play.png" alt="" />
            </div>

            
          </div>
        </div>

        <div class="office_content">
          <div class="office" :class="screenWidth > 600 ? '' : 'mb'">
            
            <!-- <div class="list" @click="openUrl('https://cloud.google.com/')">
              <img class="d" src="../assets/images/ico_logo_g2.png" alt="" />
              <img class="a" src="../assets/images/ico_logo_g1.png" alt="" />
            </div> -->
            <div
              class="list"
             
            >
              <img class="d" src="../assets/images/sponsors/jobfair.png" alt="" />
              <img class="a" src="../assets/images/sponsors/jobfair.png" alt="" />
            </div>

            <!-- TODO -->
            <div
              class="list"
            >
              <img class="d" src="../assets/images/sponsors/playk12.png" alt="" />
              <img class="a" src="../assets/images/sponsors/playk12.png" alt="" />
            </div>

            
          </div>
        </div>
      </section>


      <!--
      <section id="section6" class="cointainer">
        <div class="bg-title" :class="screenWidth > 600 ? '' : 'mb'">
          <div
            class="left-title before"
            :class="screenWidth > 600 ? '' : 'mb'"
            data-aos="flip-up"
          >
            K12 AI Initiative
          </div>
        </div>
        <div
          class="row"
          :class="screenWidth > 600 ? '' : 'mb'"
        >
          <div class="left">
            <div class="ss-title" data-aos="flip-up">
              MEET THE SPEAKERS
            </div>
            <div class="speak-k12-content">
              <div
                class="speaker-k12-list"
                ref="speakerK12List"
                :class="screenWidth > 600 ? '' : 'mb'"
              >
                <div
                  class="list"
                  v-for="(item, index) in showSpeakersK12List"
                  :key="index"
                  data-aos="zoom-in"
                >
                  <PersionItem :item="item" />
                </div>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="ss-title" data-aos="fade-up">
              ACTIVITIES FROM THE PAST YEAR
            </div>
            <div class="activity-k12-content">
              <div class="activity-k12-list"
                :class="screenWidth > 600 ? '' : 'mb'"
              >
                <div class="list" data-aos="zoom-in">
                  <img class="d" src="../assets/images/k12.jpg" alt="" />
                  <img class="a" src="../assets/images/k12.jpg" alt="" />
                </div>
                <div class="list">
                  <iframe
                    data-aos="zoom-in"
                    class="k12-video"
                    src="https://www.youtube.com/embed/km4o5GbSsI8"
                    title="K12 AI Initiative Launched @ GenAI Summit Silicon Valley 2023"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      -->
      


      <!-- WorkShop Starts here -->
      <!-- <div class="pantners">
        <div class="cointainer">
          <div class="bg-title" :class="screenWidth > 600 ? '' : 'mb'">
            <div
              class="left-title before"
              :class="screenWidth > 600 ? '' : 'mb'"
              data-aos="flip-up"
            >
              WorkShop
            </div>
          </div>



          <div class="pantnersList">
            <div
              class="pantnersItem"
              @click="openUrl(item.url)"
              :class="screenWidth > 600 ? '' : 'mb'"
              v-for="(item, index) in workshop"
              :key="index"
              data-aos="zoom-in"
            >
              <img :src="item.img" alt="" />
            </div>
            <div class="pantnersItem" :class="screenWidth > 600 ? '' : 'mb f1'">
              More
            </div>
          </div>
        </div>
      </div> -->

      <div class="GenAISummit" :class="screenWidth > 600 ? '' : 'mb'">
        <div class="cointainer">
          <div class="title" :class="screenWidth > 600 ? '' : 'mb'">
            Why <span class="color">GenAI </span>
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
        <div class="cointainer" style="z-index: 2">
          <div class="t1" data-aos="slide-down">
            EMPOWERING TOMORROW'S INNOVATORS
          </div>
          <div class="t2" data-aos="slide-up">Experience the Future at</div>
          <div class="t2" data-aos="slide-up">GenAI Summit</div>
          <div class="t3" data-aos="flip-up">
            Be a part of this grand event where every conversation,
            demonstration, and interaction open a window to the future. Whether
            you’re looking to invest, innovate, or ignite your career in AI,
            GenAI Summit 2024 is where you’ll want to be.
            <br />
            <br />
            Step into the future of AI at GenAI Summit San Francisco 2024 –
            where ideas meet action, and tomorrow is shaped today!
          </div>
        </div>
      </div>


        

      <section id="section3" class="cointainer">
        <div class="pantners2">
        <div class="cointainer">
          <div class="bg-title" :class="screenWidth > 600 ? '' : 'mb'">
            <div
              class="left-title before"
              :class="screenWidth > 600 ? '' : 'mb'"
              data-aos="flip-up"
            >
              Exhibition
            </div>
          </div>
          <div class="pantnersList" :style="ExhibitionStyle">
            <div class="flex1" ref="Exhibition">
              <div
                class="pantnersItem"
                @click="openUrl(item.url)"
                :class="screenWidth > 600 ? '' : 'mb'"
                v-for="(item, index) in EventPartners2"
                :key="index"
                data-aos="zoom-in"
              >
                <img :src="item.img" alt="" />
              </div>
            </div>

          </div>
          <div class="moreDiv" v-if="!showAllExhibition" @click="moreHanleExhibition">
              More
              <img
                class="a"
                src="../assets/images/general_return_xia.png"
                alt=""
              />
              <img
                class="d"
                src="../assets/images/general_return_xia_d.png"
                alt=""
              />
            </div>
            <div class="moreDiv" v-if="showAllExhibition" @click="closeHanleExhibition">
              Hide
              <img
                class="a"
                src="../assets/images/general_return_up.png"
                alt=""
              />
              <img
                class="d"
                src="../assets/images/general_return_up_d.png"
                alt=""
              />
            </div>
        </div>
      </div>






        <div class="bg-title" :class="screenWidth > 600 ? '' : 'mb'">
          <div
            class="left-title before"
            :class="screenWidth > 600 ? '' : 'mb'"
            data-aos="flip-up"
          >
            Exhibition Opportunities
          </div>
          <div class="open-btn">
            <button>
              Take Your Place to Exhibit
              <img src="../assets/images/general_return.png" alt="" />
            </button>
            <div class="buy-listBox">
              <div class="list" @click="BuyTicketsLuma">
                <img class="luma" src="../assets/images/luma.png" alt="" />
              </div>
              <div class="list" @click="BuyTickets">
                <img class="event" src="../assets/images/event.png" alt="" />
              </div>
            </div>
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

      <!-- Exhibition Starts Here -->
      

      <!-- <div class="pantners">
        <div class="cointainer">
          <div class="bg-title" :class="screenWidth > 600 ? '' : 'mb'">
            <div class="left-title before" :class="screenWidth > 600 ? '' : 'mb'" data-aos="flip-up">
              Exhibits
            </div>

          </div>
          <div class="pantnersList">
            <div class="pantnersItem" :class="screenWidth > 600 ? '' : 'mb'" v-for="(item,index) in 12" :key="item" data-aos="zoom-in">
              <img :src="getImg(index+1)" alt="">
            </div>
          </div>
       
        </div>
      </div> -->

      <!-- <div class="Recognition-bg">
        <div class="cointainer">
        
          <div class="bg-title" :class="screenWidth > 600 ? '' : 'mb'">
            <div class="left-title before" :class="screenWidth > 600 ? '' : 'mb'" data-aos="flip-up">
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
      -->
      <section id="section4" class="cointainer">
        <!--  -->

        <div class="bg-title" :class="screenWidth > 600 ? '' : 'mb'">
          <div
            class="left-title before"
            :class="screenWidth > 600 ? '' : 'mb'"
            data-aos="flip-up"
          >
            Event Agenda
          </div>
        </div>
        <div class="ss-title" data-aos="flip-up">
          MAXIMIZE YOUR JOURNEY AT THE AI SUMMIT - Live Captioning by Otter.ai: the Exclusive GenAI Meeting Assistant Sponsor
        </div>
        <div class="ss-title2" data-aos="flip-up">
          (Note: Tentative Agenda, update weekly)
        </div>
        <div class="tab-tip-box">
          <div class="tip-list" v-for="(list,index) in tipList" :key="index">
            {{ list }}
          </div>
        </div>
        <!-- <SwiperDay /> -->
        <Agenda/>
      </section>

      <div class="pantners">
        <div class="cointainer">
          <div class="bg-title" :class="screenWidth > 600 ? '' : 'mb'">
            <div
              class="left-title before"
              :class="screenWidth > 600 ? '' : 'mb'"
              data-aos="flip-up"
            >
              Event Partners
            </div>
          </div>
          <div class="pantnersList">
            <div
              class="pantnersItem"
              @click="openUrl(item.url)"
              :class="screenWidth > 600 ? '' : 'mb'"
              v-for="(item, index) in EventPartners"
              :key="index"
              data-aos="zoom-in"
            >
              <img :src="item.img" alt="" />
            </div>
            <!--
            <div class="pantnersItem" :class="screenWidth > 600 ? '' : 'mb f1'">
              More
            </div>
            -->
          </div>
        </div>
      </div>


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

      <div class="mbBuyTickets" v-if="screenWidth < 600">
        <div class="innerTickets">
          <div class="ticketsBtn">
            <div class="ticketsPrice">$179 – $9,999</div>
            <div class="ticketsBtnText">
              <img src="../assets/images/hot.gif" alt="" />
              Get tickets
              <div class="buy-listBox">
                <div class="list" @click="BuyTicketsLuma">
                  <img class="luma" src="../assets/images/luma.png" alt="" />
                </div>
                <div class="list" @click="BuyTickets">
                  <img class="event" src="../assets/images/event.png" alt="" />
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
import Agenda from "../components/Agenda.vue";

import speakers from "../utils/speaker";
import speakersK12 from "../utils/speakerK12";
import EventBus from "../utils/EventBus.js";
import { useRoute } from "vue-router";

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
    const route = useRoute();

    const imageRef = ref(null);
    const imageRef1 = ref(null);
    const imageRef2 = ref(null);
    const SwiperSpeaker = ref(null);
    const showDialog = ref(false);
    const showImgUrl = ref("");
    const speakerList = ref(null);
    const speakerK12List = ref(null);
    const Exhibition = ref(null);
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
    const activeSection = ref("");
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
    const showAll = ref(1);
    const openUrl = (url) => {
      window.open(url);
    };
    const moreHanle = () => {
      showAll.value = showAll.value + 1;
      //console.log(showAll.value);
      if (showAll.value == 2) {
        heightStyle.value.height = speakerList.value.offsetHeight + "px";
      }
    };
    const closeHanle = () => {
      showAll.value = 1;
      heightStyle.value.height = "16rem";
    };

    const showAllExhibition = ref(false)
    const moreHanleExhibition = () => {
      showAllExhibition.value = true;
      ExhibitionStyle.value.height = Exhibition.value.offsetHeight + "px";
    };
    const closeHanleExhibition = () => {
      showAllExhibition.value = false;
      ExhibitionStyle.value.height = "10.2rem";
    };
    const speakersList = ref(speakers);
    const showSpeakersList = ref(speakers);

    const speakersK12List = ref(speakersK12);
    const showSpeakersK12List = ref(speakersK12);

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
          "1.	Keynote: Advancements in AI Models: GPT-4 and Beyond<br/><br/>2.	Keynote: AI in Environmental Sustainability <br/><br/>3.	Keynote: Transforming Customer Experience with AI <br/><br/>4.	Panel Discussion: AI in Financial Services: Revolutionizing Banking and Insurance<br/><br/>5.	Panel Discussion: AI in Retail: Personalization and Efficiency<br/><br/>6.	Panel Discussion: The Intersection of AI and Cybersecurity<br/><br/>7.	Panel Discussion: AI and the Future of Transportation",
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
        title: "Day 3 - The Future Landscape and Policy Considerationsssssss",
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
      if (screenWidth.value < 700) {
        style.value.width = "100%";
      }
    };
    if (screenWidth.value < 700) {
      style.value.width = "100%";
    }
    // TODO
    const heightStyle = ref({
      height: "16rem",
    });

    // Exhibition初始展示高度
    const ExhibitionStyle = ref({
      height: "10.2rem",
    });

    const getImg = (i) => {
      return new URL(
        `../assets/images/logoPantners/pantners${i}.png`,
        import.meta.url
      ).href;
    };

    const getImg2 = () => {
      return new URL(
        `../assets/images/logoPantners/pantners${i}.png`,

        import.meta.url
      ).href;
    };
    const EventPartners = ref([
      {
        img: new URL(
          `../assets/images/logoPantners/pantners${1}.png`,
          import.meta.url
        ).href,
        url: "https://www.sftravel.com/",
      },
      {
        img: new URL(
          `../assets/images/logoPantners/pantners${2}.png`,
          import.meta.url
        ).href,
        url: "https://palaceoffinearts.com/",
      },
      {
        img: new URL(
          `../assets/images/logoPantners/pantners${3}.png`,
          import.meta.url
        ).href,
        url: "https://www.palaceoffinearts.org/",
      },
      {
        img: new URL(
          `../assets/images/logoPantners/pantners${4}.png`,
          import.meta.url
        ).href,
        url: "https://npu.co/",
      },
      {
        img: new URL(
          `../assets/images/logoPantners/pantners${61}.png`,
          import.meta.url
        ).href,
        url: "https://www.plugandplaytechcenter.com/",
      },
      {
        img: new URL(
          `../assets/images/logoPantners/pantners${6}.png`,
          import.meta.url
        ).href,
        url: "   https://siliconvalleytechweek.com/",
      },
      {
        img: new URL(
          `../assets/images/logoPantners/kunpeng.png`,
          import.meta.url
        ).href,
        url: "https://tgo.infoq.cn/",
      },

      {
        img: new URL(
          `../assets/images/logoPantners/fourseason.png`,
          import.meta.url
        ).href,
        url: "https://www.fourseasons.com/",
      },

      
    ]);

    // Sponsor start here
    const EventPartners2 = ref([
      {
        img: new URL(
          `../assets/images/sponsors/microsoft2.png`,
          import.meta.url
        ).href,
        url: "../assets/images/diam.png",
      },
      {
        img: new URL(`../assets/images/sponsors/IBM.png`, import.meta.url).href,
        url: "https://www.ibm.com/us-en",
      },

      {
        img: new URL(`../assets/images/sponsors/iobc.png`, import.meta.url)
          .href,
        url: "https://www.iobc.capital/#/",
      },
      {
        img: new URL(`../assets/images/sponsors/zilliz.png`, import.meta.url)
          .href,
        url: "https://zilliz.com/",
      },
      
      {
        img: new URL(`../assets/images/sponsors/otter.png`, import.meta.url)
          .href,
        url: "https://otter.ai/",
      },
      {
        img: new URL(`../assets/images/sponsors/ida.png`, import.meta.url).href,
        url: "http://www.idaireland.com",
      },

      {
        img: new URL(`../assets/images/sponsors/molar.png`, import.meta.url)
          .href,
        url: "https://www.molardata.com/",
      },
      
      {
        img: new URL(
          `../assets/images/sponsors/mountainlion.png`,
          import.meta.url
        ).href,
        url: "https://www.mlion.ai/",
      },
      {
        img: new URL(`../assets/images/sponsors/exabits.png`, import.meta.url)
          .href,
        url: "https://www.exabits.ai/",
      },
      {
        img: new URL(`../assets/images/sponsors/94ai.png`, import.meta.url)
          .href,
        url: "https://cn.94ai.com/",
      },
      {
        img: new URL(`../assets/images/sponsors/akool.png`, import.meta.url)
          .href,
        url: "https://akool.com/",
      },
      {
        img: new URL(`../assets/images/sponsors/taskus.png`, import.meta.url)
          .href,
        url: "https://www.taskus.com/en-us/",
      },
      {
        img: new URL(`../assets/images/sponsors/1gen.png`, import.meta.url)
          .href,
        url: "https://1gen.ai/",
      },
      {
        img: new URL(`../assets/images/sponsors/upmarket.png`, import.meta.url)
          .href,
        url: "https://www.upmarket.co/",
      },
      {
        img: new URL(`../assets/images/sponsors/generativex.jpg`, import.meta.url)
          .href,
        url: "https://gen-x.co.jp/",
      },
      {
        img: new URL(
          `../assets/images/sponsors/chatmaster.png`,
          import.meta.url
        ).href,
        url: "https://www.youtek.cc/"
      },
      {
        img: new URL(`../assets/images/sponsors/aiads.png`, import.meta.url)
          .href,
        url: "https://aiads.app/",
      },

      {
        img: new URL(`../assets/images/sponsors/skalable.png`, import.meta.url)
          .href,
        url: "https://skalabletech.com/",
      },
      {
        img: new URL(`../assets/images/sponsors/telus.png`, import.meta.url)
          .href,
        url: "https://www.telusinternational.com/",
      },
      {
        img: new URL(`../assets/images/sponsors/fivetran.png`, import.meta.url)
          .href,
        url: "https://www.fivetran.com/",
      },
      {
        img: new URL(`../assets/images/sponsors/jiffy.png`, import.meta.url)
          .href,
        url: "https://jiffy.ai/",
      },
      {
        img: new URL(`../assets/images/sponsors/magstone.png`, import.meta.url)
          .href,
        url: "https://www.magstonelaw.com/",
      },
      {
        img: new URL(`../assets/images/sponsors/boothai.png`, import.meta.url)
          .href,
        url: "https://www.booth.ai/",
      },
      {
        img: new URL(`../assets/images/sponsors/gptworks.png`, import.meta.url)
          .href,
        url: "https://www.gptworks.ai/",
      },
      {
        img: new URL(
          `../assets/images/sponsors/zuora.png`,
          import.meta.url
        ).href,
        url: "https://www.zuora.com/",
      },
      {
        img: new URL(
          `../assets/images/sponsors/orb.png`,
          import.meta.url
        ).href,
        url: "https://www.withorb.com/ai/",
      },
      {
        img: new URL(`../assets/images/sponsors/upbeat.png`, import.meta.url)
          .href,
        url: "https://www.upbeat.chat/",
      },
      {
        img: new URL(`../assets/images/sponsors/aizip.png`, import.meta.url)
          .href,
        url: "https://aizip.ai/",
      },
      {
        img: new URL(`../assets/images/sponsors/mother.png`, import.meta.url)
          .href,
        url: "https://www.mothertongue.com/",
      },
      {
        img: new URL(`../assets/images/sponsors/ivymax.png`, import.meta.url)
          .href,
        url: "https://www.ivymax.com/",
      },
      {
        img: new URL(
          `../assets/images/sponsors/swiftsecurity.png`,
          import.meta.url
        ).href,
        url: "https://swiftsecurity.ai/",
      },
      {
        img: new URL(`../assets/images/sponsors/modlee.png`, import.meta.url)
          .href,
        url: "https://www.modlee.ai/",
      },
      {
        img: new URL(`../assets/images/sponsors/unitree.png`, import.meta.url)
          .href,
        url: "https://www.unitree.com/",
      },
      {
        img: new URL(`../assets/images/sponsors/vimmerse.png`, import.meta.url)
          .href,
        url: "https://www.vimmerse.net/",
      },
      {
        img: new URL(`../assets/images/sponsors/conversight.png`, import.meta.url)
          .href,
        url: "https://conversight.ai/",
      },
      {
        img: new URL(`../assets/images/sponsors/enviate.png`, import.meta.url)
          .href,
        url: "https://enviate.ai/home",
      },
      {
        img: new URL(`../assets/images/sponsors/onesourcecloud.png`, import.meta.url)
          .href,
        url: "https://www.onesourcecloud.net/",
      },
      {
        img: new URL(`../assets/images/sponsors/ayraa.png`, import.meta.url)
          .href,
        url: "https://www.ayraa.io/",
      },
      {
        img: new URL(`../assets/images/sponsors/streetbeat.png`, import.meta.url)
          .href,
        url: "https://streetbeat.com/en",
      },
      {
        img: new URL(`../assets/images/sponsors/house.png`, import.meta.url)
          .href,
        url: "https://house.com/",
      },

      {
        img: new URL(`../assets/images/sponsors/pointable.png`, import.meta.url)
          .href,
        url: "https://www.pointable.ai/",
      },
      



      {
        img: new URL(`../assets/images/sponsors/teqfocus.png`, import.meta.url)
          .href,
        url: "https://www.teqfocus.com/",
      },
      {
        img: new URL(
          `../assets/images/logoPantners/xiongmao.png`,
          import.meta.url
        ).href,
        url: "https://www.hungrypanda.co/",
      },
      
      {
        img: new URL(`../assets/images/sponsors/sineaptic.png`, import.meta.url)
          .href,
        url: "https://sineaptic.com/",
      },

      {
        img: new URL(`../assets/images/sponsors/ushur.png`, import.meta.url)
          .href,
        url: "https://ushur.com/",
      },
      {
        img: new URL(`../assets/images/sponsors/livex.png`, import.meta.url)
          .href,
        url: "https://livex.ai/",
      },
      {
        img: new URL(`../assets/images/sponsors/deepcheck.png`, import.meta.url)
          .href,
        url: "https://www.deepchecks.com",
      },
      {
        img: new URL(`../assets/images/sponsors/deepabacus.png`, import.meta.url)
          .href,
        url: "https://www.deepabacus.com/",
      },
      {
        img: new URL(`../assets/images/sponsors/sider.png`, import.meta.url)
          .href,
        url: "https://sider.ai/en/",
      },
      {
        img: new URL(`../assets/images/sponsors/realloop.png`, import.meta.url)
          .href,
        url: "http://www.realloop.com/",
      },
      {
        img: new URL(`../assets/images/sponsors/suanxiang.png`, import.meta.url)
          .href,
        url: "https://nascentcore.ai/en/",
      },
      {
        img: new URL(`../assets/images/sponsors/starloom.png`, import.meta.url)
          .href,
        url: "https://starloom.ai/#/",
      },
      {
        img: new URL(`../assets/images/sponsors/citing.png`, import.meta.url)
          .href,
        url: "https://citing.ai/#/",
      },
      {
        img: new URL(`../assets/images/sponsors/utburst.png`, import.meta.url)
          .href,
        url: "https://outburst.ai/",
      },
      {
        img: new URL(
          `../assets/images/sponsors/intellimart.png`,
          import.meta.url
        ).href,
        url: "https://www.intellimart.ai/",
      },
      {
        img: new URL(
          `../assets/images/sponsors/genmall.png`,
          import.meta.url
        ).href,
        url: "https://genmall.ai/",
      },
      {
        img: new URL(
          `../assets/images/sponsors/arctic.png`,
          import.meta.url
        ).href,
        url: "https://www.arcticeider.ai/",
      },


    ]);


    const workshop = ref([
    {
        img: new URL(
          `../assets/images/workshop/nvidia.png`,
          import.meta.url
        ).href,
        url: "https://www.nvidia.com/en-us/",
      },
      {
        img: new URL(
          `../assets/images/sponsors/aws.png`,
          import.meta.url
        ).href,
        url: "https://aws.amazon.com/startups?lang=en-US",
      },
      {
        img: new URL(
          `../assets/images/sponsors/samba.png`,
          import.meta.url
        ).href,
        url: "https://sambanova.ai/",
      },
      {
        img: new URL(
          `../assets/images/sponsors/zilliz.png`,
          import.meta.url
        ).href,
        url: "https://zilliz.com/",
      },
     
      
    
    ]);


    const goPageHandle = () => {
      EventBus.$emit("goPageHandle");
    };
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
    };
    const tipList = ref([
      'History & Future of LLM','LLM Framework / State-of-the-art of LLM','Chips for LLM','Robotic and GenAI','The Art of FineTuning & RAG','Enterprise and GenAI',
      'Women in GenAI','Sustainability of GenAI','Safety and Ethnicity of LLM','Policy and Public Good with LLM','Data Privacy','Text to Video','VectorDB','AI Agents',
      'AI companions','Law and LLM','Healthcare and AI','Education and GenAI','Marketing and GenAI'
    ])
    return {
      tipList,
      showAllExhibition,
      moreHanleExhibition,
      closeHanleExhibition,
      goPageHandle,
      BuyTickets,
      Exhibition,
      heightStyle,
      ExhibitionStyle,
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
      speakersK12List,
      showSpeakersK12List,
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
      showAll,
      speakerList,
      speakerK12List,
      getImg,
      getImg2,
      EventPartners,
      EventPartners2,
      workshop,
      activeSection,
      scrollToSection,
      BuyTickets,
      screenWidth,
      BuyTicketsLuma,
    };
  },
  components: {
    NumberCount,
    PersionItem,
    Swiper,
    Exhibition,
    StarBackground,
    Agenda,
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
  height: calc(75vh);
  min-height: 680px;
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
      justify-content: space-between;
      .left {
        margin-top: 0.5rem;
        position: relative;
        &:hover {
          .buy-listBox {
            display: block;
          }
          button {
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
          .list {
            width: 100%;
            text-align: center;
            padding: 0.1rem 0;
            border: 1px solid transparent;
            margin: 0 auto;
            border-radius: 100px;
            &:hover {
              border: 1px solid #000000;
            }
          }
          img {
            &.luma {
              width: 1.3rem;
            }
            &.event {
              margin-top: 4px;
              width: 1.6rem;
            }
          }
        }
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
        margin-top: 0.55rem;
        .time-box {
          display: flex;
          align-items: center;
          .item {
            width: 1rem;
            height: 1rem;
            background: linear-gradient(
              180deg,
              rgba(255, 255, 255, 0) 0%,
              #ffffff 100%
            );
            border-radius: 0px 0px 0px 0px;
            border: 01px solid;
            border-image: linear-gradient(
                180deg,
                rgba(255, 255, 255, 1),
                rgba(255, 255, 255, 0)
              )
              1 1;
            font-family: HarmonyOS Sans SC Bold;
            font-weight: bold;
            font-size: 0.4rem;
            color: #001f3c;
            text-align: center;
            font-style: normal;
            text-transform: none;
            line-height: 1rem;
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
            width: 1rem;
            height: 1rem;
            font-family: HarmonyOS Sans SC Regular;
            font-weight: 400;
            font-size: 0.37rem;
            color: rgba(0, 0, 0, 0.7);
            text-align: center;
            font-style: normal;
            text-transform: none;
            line-height: 1rem;
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
    width: 14%;
    text-align: center;
    margin-top: 2rem;
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
  margin-top: 0.75rem;
  justify-content: space-between;
  align-items: center;
  display: flex;
  &.mb {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.5rem;
  }
  .left-title {
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
.tab-tip-box{
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  .tip-list{
    font-family: Microsoft YaHei, Microsoft YaHei;
    font-weight: 400;
    font-size: 14px;
    color: rgba(0,0,0,0.6);
    line-height: 16px;
    text-align: left;
    background: rgba(7,120,216,0.1);
    margin-right: 8px;
    padding: 3px 6px;
    margin-bottom: 10px;
    cursor: pointer;
  }
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

#section2 {
  .speak-content {
    overflow: hidden;
    transition: height 0.5s ease-in-out;
  }
  .speaker-list {
    display: flex;
    flex-wrap: wrap;

    .list {
      width: 12%;
      margin-left: 0.5%;
      margin-top: 2%;
    }
    &.mb {
      .list {
        width: 23%;
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
  background: url("../assets/images/GenAISummitBg.png") no-repeat;
  background-size: 100% 100%;
  padding: 2rem 0 1rem;
  &.mb {
    background: url("../assets/images/GenAISummitBg_mb.png") no-repeat;
    background-size: 100% 100%;
  }
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
#sponsor_section {
  .office {
    display: flex;
    /*flex-wrap: wrap;*/
    margin-top: 0;
    align-items: center;
    &.mb {
      .list {
        width: 25%;
        max-width: 30%;
        margin-bottom: 0.3rem;
        height: 100%;
        margin-left: 0.1rem;
        img {
          width: 100%;
          height: auto;
        }
      }
      .title_img {
        width: 20%;
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
      background: #ffffff;
      text-align: center;
      cursor: pointer;
      height: 1.8rem;
      z-index: 2;
      display: flex;
      justify-content: flex-start;
      border-radius: 1rem;
      margin-left: 0.4rem;
      &:first-child {
        margin-left: 0;
      }
      img {
        height: 1.8rem;
        z-index: -1;
        &.d {
          display: block;
          border-radius: 0rem;
        }
        &.a {
          display: none;
          border-radius: 0rem;
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
#section3 {
  .office {
    display: flex;
    /*flex-wrap: wrap;*/
    margin-top: 0.5rem;
    align-items: center;
    &.mb {
      .list {
        width: 25%;
        max-width: 30%;
        margin-bottom: 0.3rem;
        height: 100%;
        margin-left: 0.1rem;
        img {
          width: 100%;
          height: auto;
        }
      }
      .title_img {
        width: 20%;
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
      border-radius: 1rem;
      margin-left: 0.4rem;
      &:first-child {
        margin-left: 0;
      }
      img {
        height: 1.8rem;
        z-index: -1;
        &.d {
          display: block;
          border-radius: 0rem;
        }
        &.a {
          display: none;
          border-radius: 0rem;
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
.Recognition-bg {
  background: url("../assets/images/Recognition-bg.png");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;
  padding: 0.6rem 0 1rem;
  .cointainer {
    .bg-title {
      margin-top: 0;
    }
    .left-title {
      color: #ffffff;
    }
    .ss-title {
      color: rgba(255, 255, 255, 0.7);
    }
  }
  .Recognition {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.4rem;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 0px 0px 0px 0px;
    border: 1px solid;
    border-image: linear-gradient(
        180deg,
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0)
      )
      1 1;
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

#section5 {
  .office {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.5rem;
    align-items: center;
    &.mb {
      .list {
        width: 30%;
        max-width: 30%;
        margin-bottom: 0.3rem;
        height: 100%;
        margin-left: 0.1rem;
        img {
          width: 100%;
          height: auto;
        }
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
      margin-left: 0.4rem;
      &:first-child {
        margin-left: 0;
      }
      img {
        height: 1.8rem;
        z-index: -1;
        &.d {
          display: block;
          border-radius: 1.5rem;
        }
        &.a {
          display: none;
          border-radius: 1.5rem;
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

#section6 {
  .speak-k12-content {
    overflow: hidden;
    transition: height 0.5s ease-in-out;
  }

  .row {
    display: flex;

    &.mb {
      flex-direction: column;

      .left {
        width: 100%;
      }
      .right {
        width: 100%;
      }
    }

    .left {
      width: 50%;
    }

    .right {
      width: 50%;
    }

    .speaker-k12-list {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;

      .list {
        width: 23%;
        margin-top: 2%;
      }
      &.mb {
        .list {
          width: 30%;
        }
      }
    }
    .activity-k12-list {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;

      .list {
        width: 48%;
        margin-top: 2%;
        border: 1px solid #FFFFFF;
      }
      .a {
        width: 100%;
        display: none;
      }
      .d {
        width: 100%;
        display: inline-block;
      }
      .k12-video {
        width: 100%;
        height: 100%;
      }
      &.mb {
        .list {
          width: 100%;
        }
      }
    }
  }
}

.open-btn {
  margin-top: 0.3rem;
  position: relative;
  &:hover {
    .buy-listBox {
      display: block;
    }
    button {
      &::before {
        left: 0;
      }
      color: #ffffff;
      img {
        display: block;
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
    top: 0.7rem;
    z-index: 9999;
    display: none;
    .list {
      width: 100%;
      text-align: center;
      padding: 0.1rem 0;
      border: 1px solid transparent;
      margin: 0 auto;
      border-radius: 100px;
      &:hover {
        border: 1px solid #000000;
      }
    }
    img {
      &.luma {
        width: 1.3rem;
      }
      &.event {
        margin-top: 4px;
        width: 1.6rem;
      }
    }
  }
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
    img {
      display: none;
      width: 0.37rem;
      margin-left: 0.1rem;
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
.mbBuyTickets {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 900;
  .innerTickets {
    background-color: #fff;
    border: 1px solid #eeedf2;
    // border-radius: calc(2 * 8px);
    position: relative;
    padding: 8px;
    font-size: 18px;
    text-align: center;
    color: #000000;
    .ticketsPrice {
      font-weight: 600;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size: 0.4444rem;
      line-height: 1.5rem;
      color: #000000;
      font-family: HarmonyOS Sans SC Bold;
    }
    .ticketsBtn {
      font-family: HarmonyOS Sans SC Bold;
      font-size: 0.4444rem;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      line-height: 1.5rem;
      width: 100%;
      height: 1.5rem;

      color: #ffffff;
      display: flex;
      justify-content: space-between;
      padding: 0 0.2963rem;
      .ticketsBtnText {
        font-size: 0.4444rem;
        width: 5rem;
        background: #008aff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100px;
        position: relative;
        &:hover {
          .buy-listBox {
            display: block;
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
          bottom: 1.5rem;
          z-index: 9999;
          display: none;
          .list {
            width: 100%;
            text-align: center;
            padding: 0.1rem 0;
            border: 1px solid transparent;
            margin: 0 auto;
            border-radius: 100px;
            &:hover {
              border: 1px solid #000000;
            }
          }
          img {
            &.luma {
              width: 1.3rem;
            }
            &.event {
              margin-top: 4px;
              width: 1.6rem;
            }
          }
        }
        img {
          width: 30px;
          margin-right: 0.3rem;
        }
      }
    }
  }
}
.pantners {
  width: 100%;
  .pantnersList {
    display: flex;
    flex-flow: wrap;
    gap: 1%;
    .pantnersItem {
      cursor: pointer;
      margin-top: 0.5rem;
      width: 24%;
      // height: ;
      margin-bottom: 0.2222rem;
      transition: all linear 0.5s;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #afbace;
      font-size: 0.37rem;
      &.mb {
        width: 32%;
        &.f1 {
          width: 100%;
        }
      }
      &:hover {
        background: #ffffff;
      }
      img {
        width: 80%;
        height: 100%;
        margin-left: 10%;
      }
    }
  }
}
.pantners2 {
  width: 100%;
  .pantnersList {
    overflow: hidden;
    transition: height 0.5s ease-in-out;
    .flex1 {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    }
    .pantnersItem {
      cursor: pointer;
      margin-top: 0.5rem;
      width: 19%;
      margin-bottom: 0.5rem;
      transition: all linear 0.5s;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #3d3d3d;
      font-size: 0.37rem;
      &.mb {
        width: 32%;
        &.f1 {
          width: 100%;
        }
      }
      &:hover {
        background: #ffffff;
      }
      img {
        width: 80%;
        margin-left: 10%;
      }
    }
  }
}
</style>
