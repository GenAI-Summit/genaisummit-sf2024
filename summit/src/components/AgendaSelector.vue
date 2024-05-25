<template>
  <div
    class="agenda-selector"
    :class="screenWidth < 600 ? 'mb' : ''"
  >
    <div
      class="room"
      v-for="(room, index) in rooms"
      :key="index"
    >
      <div
        class="header"
        @click="handleRoomClick(room)"
      >
        <div
          class="name"
        >
          {{ room.name }}
        </div>
        <img
          class="arrow"
          :src="getArrow(room.show)"
          alt="arrow"
          @click="handleRoomClick(room)"
        />
      </div>
      <div
        class="items"
        v-if="room.show"
      >
        <AgendaItem
          v-for="(item, index) in items[index]"
          :key="index"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

import AgendaItem from "./AgendaItem.vue";

import downArrow from "../assets/images/arrow_down.png";
import upArrow from "../assets/images/arrow_up.png";

export default {
  props: ["items"],
  setup(props) {
    const store = useStore();
    const screenWidth = computed(() => store.state.screenWidth);

    const rooms = ref([
      {
        name: "GPT Stage",
        show: false,
      },
      {
        name: "AGI Stage",
        show: false,
      },
      {
        name: "Align Stage",
        show: false,
      },
      {
        name: "Prompt Space",
        show: false,
      },
      {
        name: "Transformer Room",
        show: false,
      },
      {
        name: "Launchpad Stage",
        show: false,
      },
      {
        name: "Workshop Room",
        show: false,
      },
    ]);

    const items = ref([
      props.items.filter((item) => item.room === rooms.value[0].name),
      props.items.filter((item) => item.room === rooms.value[1].name),
      props.items.filter((item) => item.room === rooms.value[2].name),
      props.items.filter((item) => item.room === rooms.value[3].name),
      props.items.filter((item) => item.room === rooms.value[4].name),
      props.items.filter((item) => item.room === rooms.value[5].name),
      props.items.filter((item) => item.room === rooms.value[6].name),
    ]);

    const handleRoomClick = (room) => {
      room.show = !room.show;
    };

    const getArrow = (show) => {
      return show ? 
        new URL(upArrow, import.meta.url).href :
        new URL(downArrow, import.meta.url).href;
    };

    return {
      screenWidth,
      items,
      rooms,
      handleRoomClick,
      getArrow,
    };
  },
};
</script>

<style scoped lang="scss">
.room {
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 0.2rem 0;
    font-family: HarmonyOS Sans SC Bold;

    .name {
      font-size: 0.4rem;
    }

    &:hover {
      color: #008aff;
    }

    .arrow {
      background-color: #f1f3f4;
      border-radius: 50%;
      width: 0.4rem;
      padding: 0.1rem;
    }
  }
}
</style>
