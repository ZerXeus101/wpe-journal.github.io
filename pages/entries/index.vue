<template>
  <div v-for="entry in entries" :key="entry._id">
    <EventCard :entry="entry" />
  </div>
</template>

<script lang="ts" setup>
const entries = await queryContent('entries').find();
</script>

<style lang="postcss">
* {
  color: white;
}
</style>
