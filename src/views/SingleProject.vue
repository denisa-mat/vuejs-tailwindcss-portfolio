<script setup>
/* eslint-disable no-unused-vars */

import {defineProps} from "vue";
import projects from "@/data/projects";
import ProjectHeader from "@/components/projects/ProjectHeader.vue";
import ProjectInfo from "@/components/projects/ProjectInfo.vue";
import ProjectCommentSection from "@/components/projects/ProjectCommentSection.vue";
import PlaceHolder from "@/components/reusable/PlaceHolder.vue";
// import {defineProps} from "vue"

const props = defineProps({
  id: String
})
// const proj = computed(() => {projects.find(p => {return p.id === Number(props.id)})})
const p = projects.find(p => {return p.id === Number(props.id)})
// console.log(proj)
// console.log(p)
/* eslint-disable no-unused-vars */
</script>

<template>
  <div v-if="p !== undefined" class="container mx-auto mt-10 sm:mt-20">
    <!-- Project header -->
    <ProjectHeader :singleProjectHeader="
		{
      singleProjectTitle: p.title,
      singleProjectDate: p.createdDate,
      singleProjectTag: p.tag
    }"
    />

    <!-- Project gallery -->
    <!--		<ProjectGallery :projectImages="projectImages" />-->

    <!-- Project information -->
    <ProjectInfo :projectInfo="p" />

    <!-- Project related projects -->
    <!--		<ProjectRelatedProjects :relatedProject="relatedProject" />-->
    <project-comment-section :id="props.id"/>
  </div>
  <div v-else>
    <PlaceHolder img="blank-canvas.svg" title="Tento příspěvek ještě neexistuje."/>
  </div>
</template>

<style scoped></style>
