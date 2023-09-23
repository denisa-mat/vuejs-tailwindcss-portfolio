<script>
import ProjectsGrid from '../components/projects/ProjectsGrid.vue';

export default {
  name: 'Projects',
  components: {
    ProjectsGrid,
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
};
</script>

<template>
  <div>{{ currentRouteName }}</div>
  <div class="container mx-auto">
    <ProjectsGrid />
  </div>
</template>

<style scoped></style>
