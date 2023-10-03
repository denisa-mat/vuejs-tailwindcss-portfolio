<script>
export default {
  props: ['img', 'title', 'subtitle'],
};
</script>

<template>
  <div class="container mx-auto">
    <div class="mb-7">
      <p
          class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
      >
        {{ title }}
      </p>
      <p
          class="font-general-regular text-primary-dark dark:text-ternary-light"
      >
        {{ subtitle }}
      </p>
    </div>
    <img
        class="mx-auto"
        :src="require('@/assets/images/' + img + '')"
        :alt="title"
    />
  </div>
</template>

<style scoped>

</style>