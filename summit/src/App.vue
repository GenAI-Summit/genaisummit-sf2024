<template>
  <div class="main-app">
    <div
      class="f-header"
      :class="screenWidth < 600 ? 'mb' : ''"
    >
      <Header/>
    </div>
    <div class="main-router">
      <router-view></router-view>
    </div>
    <button
      class="go-to-top"
      :class="screenWidth < 600 ? 'mb' : ''"
      @click="scrollToTop"
    >
      <img
        :src="goToTopIcon"
        alt="go to top"
      />
    </button>
    <Footer/>
  </div>
</template>
<script>
import { ref,computed, onMounted } from 'vue'
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import goToTop from "./assets/images/gototop.png";


export default {
  name: 'App',
  setup() {
    const store = useStore();
    const screenWidth = computed(() => store.state.screenWidth);

    const goToTopIcon = new URL(goToTop, import.meta.url).href;
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    onMounted(() => {
      window.onresize = () => {
        return (() => {
          store.commit("setScreenWidth", document.body.clientWidth);
        })();
      };
    })



    return {
      screenWidth,
      goToTopIcon,
      scrollToTop,
    }
  },
  components:{
    Header,
    Footer,
  },
  methods: {
    
  },
 async created(){

  }
}
</script>

<style scoped lang="scss">
.f-header{
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(255,255,255,.6);
  backdrop-filter: blur(10px);

  &.mb {
    position: relative;
  }
}
.main-router{
  width: 100%;
  margin: 0 auto;

}

.go-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;

  &.mb {
    bottom: 2rem;
    right: 0.05rem;
  }

  border: none;
  background: none;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.4s ease;
  img {
    width: 50px;
    height: 50px;
  }

  &:hover {
    opacity: 1;
  }
}

</style>
