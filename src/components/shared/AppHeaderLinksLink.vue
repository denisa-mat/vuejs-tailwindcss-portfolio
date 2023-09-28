<script>
export default {
  props: ['aria_label', 'route', 'label'],
};
</script>

<template>
    <router-link
        :to="route"
        class="font-general-medium block text-left text-lg font-medium text-primary-dark
        dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300
        sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
        :aria-label="aria_label"
    >{{label}}</router-link>
</template>

<style lang="scss" scoped></style>
