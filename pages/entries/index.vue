<template>
  <div class="container">
    <template v-for="idx in [...Array(10)].fill(0)" :key="idx">
      <div class="cards-holder" v-for="entry in entries" :key="entry._id">
        <EventCard :entry="entry" />
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
const entries = await queryContent('entries').find();
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}
.cards-holder {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px;
}
</style>
