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

<script>
import {defineComponent, onMounted, onUpdated, ref} from "vue";
import feather from "feather-icons";
import {ElementTypeEnum} from "@/model/ElementTypeEnum.ts";


export default defineComponent({
  computed: {
    ElementTypeEnum() {
      return ElementTypeEnum
    }
  },
  data() {
    return {
      state: ref(Array(this.projectInfo.content.length).fill(false)),
    }
  },
  props: ['projectInfo'],
  methods: {
    showHide(sectionId) {
      this.state[sectionId] = !this.state[sectionId]
    }
  },
  setup() {

    onMounted(
        feather.replace
    )

    onUpdated(
        feather.replace
    )
  },

})

// const props = defineProps({
//   projectInfo: {}
// })

// onUpdated(
//     feather.replace
// )
//
// onMounted(
//     feather.replace
// )

// const a = ref(true)
// a
//
// function showHide() {
//   // var section = props.projectInfo.content.find(s => s.id === sectionId)
//   // section.sectionVisible = !section.sectionVisible
//   a.value = !a.value
// }
//
// showHide
// props.projectInfo
// ElementTypeEnum.Link

// co
</script>

<template>

  <div class="block sm:flex gap-0 sm:gap-10 mt-14">
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
        <v-row @click="showHide(section.sectionId)"
          class="border-t-4 border-ternary-light dark:border-ternary-dark mb-10 rounded-lg hover:bg-ternary-light dark:hover:bg-ternary-dark" style="cursor:pointer;"
        >

          <h2
              class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-2 ml-2 mt-2"
          >
            {{ section.sectionHeading }}
          </h2>
          <v-spacer />
          <div style="{text-align:right}"></div>
          <p v-if="this.state[section.sectionId]"
              class="mb-2 mr-2 mt-2"
              >&#9650;</p>
          <p v-else
             class="mb-2 mr-2 mt-2"
            >&#9660;</p>
<!--          <i-->
<!--              v-if="this.state[section.sectionId]"-->
<!--              data-feather="chevron-down"-->
<!--              class="w-3 h-3 text-ternary-dark dark:text-ternary-light"-->
<!--              style="display: inline-block;"-->
<!--          />-->
<!--          <i-->
<!--              v-else-->
<!--              data-feather="chevron-up"-->
<!--              class="w-3 h-3 text-ternary-dark dark:text-ternary-light"-->
<!--              style="display: inline-block;"-->
<!--          />-->

        </v-row>
        <!--          <i-->
        <!--              data-feather="external-link"-->
        <!--              class="w-3 h-3 text-ternary-dark dark:text-ternary-light"-->
        <!--              style="display: inline-block;"-->
        <!--          />-->
        <!--        </v-row>-->

        <div v-if="this.state[section.sectionId]">

        <p
            class="font-general-light mb-4 text-sm text-secondary-dark dark:text-secondary-light mt-5"
        >
          {{ section.sectionDate }}
        </p>



          <div
              v-for="paragraph in section.sectionParagraphs"
              :key="paragraph.id"
              class="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
          >
            <p v-if="(paragraph.type !== undefined
          && paragraph.type === ElementTypeEnum.Text) || paragraph.type === undefined">
              {{ paragraph.details }}
            </p>
            <img
                v-else-if="paragraph.type === ElementTypeEnum.Image"
                :src="paragraph.details"
                alt="foto k odstavci"
            />
            <a v-else-if="paragraph.type === ElementTypeEnum.Link"
               :href="paragraph.details"
               target="_blank"
               :class="'hover:underline cursor-pointer'"
            >{{ paragraph.linkName }}
              <i
                  data-feather="external-link"
                  class="w-3 h-3 text-ternary-dark dark:text-ternary-light"
                  style="display: inline-block;"
              />
            </a>
          </div>
        </div>


      </div>


    </div>

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

  </div>
</template>

<style>

</style>
