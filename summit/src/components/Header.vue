<template>
  <div class="header">
    <div class="logo-content">
      <div class="logo2">
        <img src="../assets/images/gptdaoLogo2.png" alt="">
      </div>
      <div class="logo3" v-if="screenWidth > 600">
        <img src="../assets/images/genaisummit.png" alt="">
      </div>
    </div>
    <div class="nav-list">
        <ul>
            <li v-if="screenWidth > 600">
                <a :to="null" @click="scrollToSection('section1')" :class="{ active: activeSection === 'section1' }">HOME</a>
            </li>
            <li v-if="screenWidth > 600">
                <a :to="null" @click="scrollToSection('section2')" :class="{ active: activeSection === 'section2' }">SPEAKERS</a>
            </li>
            <li v-if="screenWidth > 600">
                <a :to="null" @click="scrollToSection('section3')" :class="{ active: activeSection === 'section3' }">SPONSORS</a>
            </li>
            <li v-if="screenWidth > 600">
                <a :to="null" @click="scrollToSection('section4')" :class="{ active: activeSection === 'section4' }">SCHEDULE</a>
            </li>
            <li v-if="screenWidth > 600">
                <a href="https://linktr.ee/gptdao" target="_black" :class="{ active: activeSection === 'section5' }">CONTACT</a>
            </li>
            <li v-if="screenWidth > 600">
                <a href="https://sv2023.genaisummit.ai/" target="_black" :class="{ active: activeSection === 'section6' }">PREVIOUS EVENT</a>
            </li>
            <div class="logo">
              <img src="../assets/images/microsoftAI.png" alt="">
            </div>
            <li v-if="screenWidth > 600">
                <button @click="openHandle">Buy Tickets</button>
            </li>
        </ul>
    </div>
    
    
  </div>
</template>

<script>
import { ref, computed, watch, onMounted } from 'vue';
import { useStore} from 'vuex'
import { useRoute } from 'vue-router';

export default {
  name: '',
  setup() {
    const sectionList = {
      section1: 'Home',
      section2: 'SPEAKERS',
      section3: 'SPONSORS',
      section4: 'SCHEDULE',
    }
    const linkList = {
      Home: 'section1',
      SPEAKERS: 'section2',
      SPONSORS: 'section3',
      SCHEDULE: 'section4',
    }
    const store = useStore();

    const activeSection = ref('');
    const route = useRoute();

    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      const newHash = `?section=` + sectionList[sectionId];
      window.location.hash = newHash;
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    };

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (scrollPosition >= section.offsetTop && scrollPosition <= section.offsetTop + section.offsetHeight) {
          activeSection.value = section.id;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    const openHandle = () => {
      window.open('https://www.eventbrite.com/e/genai-summit-san-francisco-2024-tickets-796934722207')
    }
    //适配
    const screenWidth = computed(() => {
      return store.state.screenWidth;
    });
    onMounted( () => {
        setTimeout(() => {
          const section = route.query.section
          if(linkList[section]){
            scrollToSection(linkList[section])
          }
        },1000)
    })
    return {
        activeSection,
        scrollToSection,
        openHandle,
        screenWidth
    } 
  },
  components: {
    
  },
  methods: {
    
  },
  mounted() {
    
  },
  unmounted() {
    
  },
}
</script>

<style scoped lang='scss'>
.header{
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    max-width: 1500px;
    padding: 0 .5rem;

    .logo-content{
        display: flex;
        align-items: center;
    }
    .logo2{
      img{
            width: 1rem;
        }
    }
    .logo3{
      img{
            width: 5rem;
        }
    }
    .logo{
      img{
        width: 3rem;
      }
    }
    .text{
      font-size: .4rem;
      color: #78808F;
    }

    .nav-list{
        ul{
            display: flex;
            align-items: center;
            li{
                list-style: none;
                margin-left: .6rem;
              
                a{
                    text-decoration: none;
                    font-family: HarmonyOS Sans SC Bold;
                    font-weight: 400;
                    font-size: .259rem;
                    color: #78808F;
                    text-align: left;
                    font-style: normal;
                    text-transform: none;
                    &:hover,&.active{
                        color: #000000;
                        font-weight: bold;
                    }
                    cursor: pointer;
                }
                  button{
                    width: 2rem;
                    height: .6rem;
                    background:  #008AFF;
                    color: #FFFFFF;
                    cursor: pointer;
                    border: none;
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
                        background-color: #000000;
                        transition: left 0.15s ease;
                        z-index: -1;
                      }
                      &:hover::before {
                        left: 0;
                      } 
                  }             
            }
        }

    }
}
</style>