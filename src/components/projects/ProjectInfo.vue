<!--<script>-->
<!--import feather from 'feather-icons';-->

<!--export default {-->
<!--	props: ['projectInfo'],-->

<!--	// mounted() {-->
<!--	// 	feather.replace();-->
<!--	// },-->
<!--	// updated() {-->
<!--	// 	feather.replace();-->
<!--	// },-->
<!--};-->
<!--</script>-->
<script setup>
import {defineProps, onMounted, onUpdated} from "vue";
import feather from "feather-icons";

const props = defineProps({
  projectInfo: {}
})

onUpdated(
    feather.replace
)

onMounted(
    feather.replace
)

props.projectInfo
// co
</script>

<template>
  <div class="block sm:flex gap-0 sm:gap-10 mt-14">
    <!-- Single project left section details -->
    <div class="w-full sm:w-1/3 text-left">
      <!-- Single project client details -->
      <div class="mb-7">
        <p
            class="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2"
        >
          {{ projectInfo.about }}
        </p>
        <ul class="leading-loose">
          <li
              v-for="info in projectInfo.aboutDetail"
              :key="info"
              class="font-general-regular text-ternary-dark dark:text-ternary-light"
          >
            <span>{{ info.title }}: </span>
            <a v-if="info.link"
               :href="info.url"
               target="_blank"
               :class="
								info.title === 'Website' || info.title === 'Phone'
									? 'hover:underline cursor-pointer'
									: ''
							"
               aria-label="Project Website and Phone"
            >
              {{ info.detail }}
              <i
                  data-feather="external-link"
                  class="w-3 h-3 text-ternary-dark dark:text-ternary-light"
                  style="display: inline-block;"
              />
            </a>
            <a v-else :id="'info'+info.title"> {{ info.detail }} </a>
          </li>
        </ul>
      </div>

      <!-- Single project objectives -->
      <div class="mb-7">
        <p
            class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
        >
          {{ projectInfo.descriptionHeading }}
        </p>
        <p
            class="font-general-regular text-primary-dark dark:text-ternary-light"
        >
          {{ projectInfo.descriptionDetail }}
        </p>
      </div>

      <!-- Single project technologies -->
      <div class="mb-7">
        <p
            class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
        >
          {{ projectInfo.toolsHeading }}
        </p>
        <p
            class="font-general-regular text-primary-dark dark:text-ternary-light"
        >
          {{ projectInfo.toolsDetail.join(', ') }}
        </p>
      </div>
    </div>

    <!-- Single project right section details -->
    <div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
      <p
          class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"
      >
        {{ projectInfo.projectDetailsHeading }}
      </p>
      <p
          v-for="projectDetail in projectInfo.projectDetails"
          :key="projectDetail.id"
          class="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
      >
        {{ projectDetail.details }}
      </p>

      <div v-for="section in projectInfo.content"
           :key="section.sectionId"
           class="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
      >
        <p
            class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-2"
        >
          {{ section.sectionHeading }}
        </p>
        <p
          class="font-general-light mb-4 text-sm text-secondary-dark dark:text-secondary-light"
        >
          {{section.sectionDate}}
        </p>
        <p
            v-for="paragraph in section.sectionParagraphs"
            :key="paragraph.id"
            class="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
        >
          {{ paragraph.details }}
        </p>
      </div>


    </div>
  </div>
</template>

<style scoped>

</style>
