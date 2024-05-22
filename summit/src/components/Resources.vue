<template>
  <div
  >
    <div v-if="resources.length === 0">
      <p>Will be provided soon.</p>
    </div>
    <div
      v-else
      class="resources"
    >
      <div
        class="resource-card"
        :class="screenWidth < 600 ? 'mb' : ''"
      >
        <div
          class="resource-name"
          @click="openModal()"
        >
          Modal
        </div>
      </div>
      <div
        class="resource-card"
        :class="screenWidth < 600 ? 'mb' : ''"
        v-for="resource in resources"
        :key="resource.id"
      >
        <div
          class="resource-name"
          @click="openUrl(resource.url)"
        >
          {{ resource.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import resourceData from "../utils/resource.json";

export default {
  name: "Resources",
  setup() {
    const store = useStore();
    const screenWidth = computed(() => store.state.screenWidth);
    const resources = ref(resourceData);

    const openModal = () => {
      console.log("Modal opened");
    };
    const openUrl = (url) => {
      window.open(url, "_blank");
    };
    return {
      screenWidth,
      openUrl,
      openModal,
      resources,
    };
  },
  components: {
  },
  methods: {
  },
  mounted() {
  },
  unmounted() {
  }
};
</script>

<style scope lang="scss">
.resources {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.35rem;

  .resource-card {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    border: 2px solid #008aff;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
    height: 0.8rem;
    margin-top: 0.15rem;
    margin-left: 0.15rem;
    text-align: center;
    border-radius: 1rem;
    color: #008aff;
    padding: 0.1rem 0.2rem;
  
    .resource-name {
      font-size: 0.3rem;
      font-weight: bold;
      color: #008aff;
    }
  
    &:hover {
      border: 2px solid #008aff;
      background: #008aff;
      color: #ffffff;
      transform: translateY(-5px);
  
      .resource-name {
        color: #ffffff;
      }
    }
  
  }
}
</style>
