<template>
  <div ref="slick" class="slick-carousel">
    <template v-for="(list,index) in spearkSList" :key="index">
        <PersionItem :item="list"/>
    </template>
  </div>
</template>

<script>
import { ref, computed, watch,onMounted } from 'vue';
import { useStore} from 'vuex'
import $ from 'jquery'; // 引入 jQuery
import PersionItem from './PersionItem.vue'
import speakersNewly from '../utils/speakerNewly'
import EventBus from "../utils/EventBus.js";

export default {
  name: '',
  setup() {
    const store = useStore();
    //适配
    const screenWidth = computed(() => {
      return store.state.screenWidth;
    });
    const spearkSList = ref(speakersNewly)
    const pageSize = ref(Math.floor(screenWidth.value/400) == 0 ? 1 : Math.floor(screenWidth.value/400))
    const nowPage = ref(1)
    const total = spearkSList.value.length
    const pages = ref(Math.ceil(total/pageSize.value))
    const options = {
        autoplaySpeed: 5000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: pageSize.value,
        slidesToScroll: pageSize.value,
        
    }
    onMounted(() => {
        $(".slick-carousel").slick(options);
        $('.slick-carousel').on('afterChange', function(slick, currentSlide,index){
            nowPage.value = index/pageSize.value + 1
            sutmitPageInfo()
        });
        sutmitPageInfo()
    })
    const sutmitPageInfo = () => {
        EventBus.$emit("pageInfo", {
            nowPage: nowPage.value,
            pages: pages.value
        });
    }
    const slickNext = () => {
        $('.slick-carousel').slick('slickNext');
    }
    const slickPrev = () => {
        $('.slick-carousel').slick('slickPrev');
    }
    return {
        spearkSList,
        slickNext,
        slickPrev,
        screenWidth
    } 
  },
  components: {
    PersionItem
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
.slick-carousel{
    width: 100%;
}
</style>