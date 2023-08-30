<template>
  <EventCard :entry="page" />
</template>

<script setup lang="ts">
const { page } = useContent();
</script>
