<script setup>
defineProps({
  event: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="event-card"
    @mouseover="handleMouseOver"
    @mouseout="handleMouseOut"
  >
    <div class="preview">
      <img :src="event.image" alt="Event Preview" />
      <h3>{{ event.name }}</h3>
      <p>{{ event.date }}</p>
    </div>
    <div class="reflection" v-show="hovered">
        {{ event.reflection }}
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hovered: false,
    };
  },
  methods: {
    handleMouseOver() {
      this.hovered = true;
    },
    handleMouseOut() {
      this.hovered = false;
    },
  },
};
</script>

<style scoped>
h1 {
  font-weight: bolder;
}
.event-card {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
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
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  z-index: 2;
}

img {
  max-width: 400px;
  border-radius: 1rem;
}

.event-card {
  width: 400px; /* Initial width of the card */
  height: auto;
  transition: width 0.3s ease;
}

.event-card:hover {
  width: 90vw; /* Width of the card on hover */
}

.preview {
  position: relative;
}

/* .preview img {
  width: 100%;
} */

.reflection {
  background-color: #526d82;
  color: #fff;
  padding: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
  max-width: 500px;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.event-card:hover .reflection {
  opacity: 1;
}
</style>
