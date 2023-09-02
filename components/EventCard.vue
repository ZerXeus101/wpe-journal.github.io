<script setup>
defineProps({
  entry: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="event-card" @click="handleCardClick" :class="['event-card', { 'expanded': showContent }]">
    <div class="preview">
      <img :src="entry?.previewImage" alt="Event Image" />
      <div>{{ entry.createdAt }}</div>
      <h1>{{ entry.title }}</h1>
      <transition name="fade">
      <div v-if="showContent">
        <ContentRenderer :class="{'content-format': showContent}" :value="entry" />
      </div>
    </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hovered: false,
      showContent: false,
    };
  },
  methods: {
    handleCardClick() {
      this.showContent = true;
      this.$router.push(`${this.entry._path}`);
    },
  },
};
</script>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out; 
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transition-delay: 0.2s ease-in-out;
}
.event-card.expanded {
  width: 80vw;
  transition: width 0.3s ease-in-out, scale 0.4s ease-in-out; 
}

h1 {
  font-weight: bolder;
}
.event-card {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height:fit-content;
}

.event-card {
  padding: 20px;
  cursor: pointer;
  border: 1px solid #39495c;
  font-family: monospace;
  background: white;
  border-radius: 1rem;
}
.event-card:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  z-index: 2;
}

img {
  max-width: 250px;
  border-radius: 1rem;
}

.event-card {
  width: 250px; /* Initial width of the card */
  height: auto;
  transition: scale 0.3s ease, height 0.3s ease-in-out;
}

.event-card:hover {
  scale: 1.05; /* Width of the card on hover */
}

.preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: relative;
}

</style>
