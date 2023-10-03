<script setup>
/* eslint-disable no-unused-vars */
import PlaceHolder from "@/components/reusable/PlaceHolder.vue";

let theme = localStorage.getItem('theme') || 'light';
</script>

<template>
  <div class="container mx-auto">
    <PlaceHolder img="404.svg" title="Stránka neexistuje"/>

  </div>
</template>

<style scoped>

</style>