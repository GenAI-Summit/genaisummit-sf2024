<template>
  <div
    class="card"
    :class="[roomClass, screenWidth < 600 ? 'mb' : '']"
  >
    <div class="left">
      <div class="topic strong">
        <span class="type">
          {{ item.type }}
        </span>
        |
        <span class="topic">
          {{ item.topic }}
        </span>
      </div>
      <span class="info"> {{ item.room }} | {{ item.time }}</span>
      <!--<p class="abstract">{{ item.abstract }}</p>-->
    </div>
    <div class="right">
      <div class="people">
        <!--
        <div v-if="item.moderators.length > 0">
          <span v-if="item.moderators.length > 1" class="strong">
            Moderators:
          </span>
          <span v-else class="strong">
            Moderator:
          </span>
          <span
            class="moderator"
            v-for="moderator in item.moderators"
            :key="moderator[0]"
            @click="openModal(moderator[0])"
          >
            {{ moderator[1] }}
          </span>
        </div>
        -->
      </div>
      <div class="people">
        <div v-if="item.speakers.length > 0">
          <span v-if="item.speakers.length > 1" class="strong">
            Speakers:
          </span>
          <span v-else class="strong">
            Speaker:
          </span>
          <span
            class="speaker"
            v-for="speaker in item.speakers"
            :key="speaker[0]"
            @click="openModal(speaker[0])"
          >
            {{ speaker[1] }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

import EventBus from "../utils/EventBus.js";

export default {
  name: 'AgendaItem',
  props: ['item'],

  setup(props) {
    const store = useStore();
    const screenWidth = computed(() => store.state.screenWidth);
    const item = ref(props.item);

    const openModal = (id) => {
      EventBus.$emit('handleModalById', id);
    }

    return { 
      item,
      openModal,
      screenWidth,
    }
  },
  computed: {
    roomClass() {
      const roomMap = {
        "GPT Stage (Palace Of Fine Arts)": "gpt-stage",
        "AGI Stage (Palace Of Fine Arts Theatre)": "agi-stage",
        "Align Stage": "align-stage",
        "Launchpad Stage": "launchpad-stage",
        "Workshop Room": "workshop-room",
        "Breakout Room 7": "breakout-room-7"
      };
      return roomMap[this.item.room] || '';
    }
  }
}
</script>

<style scoped lang="scss">

.strong {
  font-family: HarmonyOS Sans SC Bold;
}

.card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.2rem;
  line-height: 0.39rem;

  font-family: HarmonyOS Sans SC Regular;

  border-radius: 0.3rem;
  overflow: hidden;

  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  }

  .left {
    margin: 0.2rem;

    max-width: 70%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .topic {
      margin-bottom: 0.1rem;
    }
  }

  .right {
    max-width: 35%;
    margin: 0.2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .people {
      margin-bottom: 0.1rem;
      text-align: right;

      font-size: 0.21rem;
    
      .speaker {
        display: inline-block;

        cursor: pointer;
        color: #008aff;
        margin-right: 0.1rem;
      
        border-radius: 0.8rem;
        padding: 0.08rem;
      
        transition: background-color 0.3s, color 0.3s;
      
        &:hover {
          background-color: #008aff;
          color: white;
        }
      }
      
      .moderator {
        display: inline-block;


        cursor: pointer;
        color: #008aff;
        margin-right: 5px;
      
        border-radius: 0.8rem;
        padding: 0.08rem;
      
        &:hover {
          background-color: #008aff;
          color: white;
        }
      }
    }
  }

  &.mb {
    display: flex;
    flex-direction: column;

    .left {
      max-width: 100%;
      margin-top: 0.2rem;
      margin-right: 0.2rem;
      margin-left: 0.2rem;
      margin-bottom: 0;
    }

    .right {
      max-width: 100%;
      .people {
        text-align: left;
      }
    }
  }
}

.gpt-stage { background-color: #e1f5fe; }
.agi-stage { background-color: #ede7f6; }
.align-stage { background-color: #e0f7fa; }
.launchpad-stage { background-color: #fff9c4; }
.workshop-room { background-color: #f1f8e9; }
.breakout-room-7 { background-color: #ffe0b2; }

</style>
