<script setup>
defineProps({
  entry: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="event-card" 
      @click="handleCardClick" 
      :class="['event-card', { 'expanded': showReflection }]">

    <div class="card-layout">
      <div class="preview" :class="['preview', { 'move': showReflection }]">
        <img class="event-image" :src="entry?.previewImage" alt="Event Image" :class="['event-image', { 'grow': showReflection }]"/>
        <p class="event-title" :class="['event-title', { 'resize': showReflection }]">{{ entry.title }}</p>
        <p class="event-date" :class="['event-date', { 'resize': showReflection }]">{{ entry.createdAt }}</p>
      </div>
    <!--TODO: I should make this transition more dynamic and fade in the content -->
    <!-- * Commenting this out for now to simulate click event -->
    <div class="reflection-container">
      <div v-if="showReflection">
        <ContentRenderer :class="{'content-format': showReflection}" :value="entry" />
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hovered: false,
      showReflection: false,
    };
  },
  methods: {
    handleCardClick() {
      if (this.$route.path == this.entry._path) {
        this.showReflection = !this.showReflection;
      }
      else {
        return this.$router.push(`${this.entry._path}`);
      }
    },
  },
};
</script>

<style scoped>
/* initial states of the elements */

.event-card {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  padding: 20px;
  cursor: pointer;
  border: 1px solid #39495c;
  font-family: monospace;
  background: white;
  border-radius: 1rem;
  width: 250px; /* Initial width of the card */
  height: 225px;
  box-shadow: none;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  overflow: hidden;
  transition: 
    scale 0.3s ease, 
    height 0.3s ease-in-out, 
    box-shadow 0.3s ease, 
    width 0.3s ease-in-out, 
    align-items 0.3s ease, 
    justify-content 0.3s ease; 
}

.preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: relative;
  transition: 
    align-items 0.3s ease-in-out, 
    justify-content 0.3s ease-in-out, 
    flex-direction 0.3s ease-in-out,
    gap 0.3s ease-in-out;
}

.event-title {
  font-weight: bolder;
  font-size: 0.8rem;
  transition: font-size 0.3s ease-in-out;
}

.event-date {
  font-size: 0.8rem;
  transition: font-size 0.3s ease-in-out;
}

.event-image {
  width: 250px;
  border-radius: 1rem;
  transition: width 0.3s ease-in-out;
}

.reflection-container {
  margin-top: 20px;
}

/* next states of the elements */
.event-card:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  scale: 1.05; /* Width of the card on hover */
}

.event-card.expanded {
  height: 500px;
  width: 1200px;

}

.preview.move {
  flex-direction: row;
  gap: 20px;
}

.event-image.grow {
  width: 400px;
}

.event-title.resize {
  font-weight: bolder;
  font-size: 2rem;
}

.event-date.resize {
  font-size: 20px;
}
</style>
