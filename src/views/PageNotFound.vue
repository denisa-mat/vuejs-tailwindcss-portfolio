<script setup>
/* eslint-disable no-unused-vars */
let theme = localStorage.getItem('theme') || 'light';
</script>

<template>
  <div class="container mx-auto">
    <div class="container mx-auto">
<!--      <div class="container mx-auto">-->
      <img
          class="container mx-auto"
          v-if="this.theme === 'light'"
          src="@/assets/images/404-light.svg"
          alt="Developer"
      />
      <img
          v-else
          class="container mx-auto"
          src="@/assets/images/404.svg"
          alt="Developer"
      />
    </div>
<!--    </div>-->
  </div>
</template>

<style scoped>

</style>