<template>
  <div class="main-app">
    <div class="f-header">
      <Header/>
    </div>
    <div class="main-router">
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>
<script>
import { ref,computed, onMounted } from 'vue'
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import { useStore} from 'vuex'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  setup() {
    const store = useStore();
    onMounted(() => {
      window.onresize = () => {
        return (() => {
          store.commit("setScreenWidth", document.body.clientWidth);
        })();
      };
    })
    return {
      
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
  justify-content: center; /* 水平居中 */
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff; /* 添加背景色，便于查看位置 */
  z-index: 1000;
}
.main-router{
  width: 100%;
  margin: 0 auto;
}
</style>
