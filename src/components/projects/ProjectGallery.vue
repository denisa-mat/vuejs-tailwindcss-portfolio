<script>
import {defineComponent, onMounted} from "vue";

import {ref} from "@vue/reactivity";
import FormTextarea from "@/components/reusable/FormTextarea.vue";
import Loading from "@/components/reusable/Loading.vue";
import feather from "feather-icons";
import {firestore} from "firebase-admin";
import {v4 as uuidv4} from 'uuid';


export default defineComponent({
  computed: {
    da() {
      return da
    }
  },
  props: ['id'],
  components: {FormTextarea, Loading},
  actions: {
    async sendMessage() {
      // await docRef.set({
      //   first: 'Ada',
      //   last: 'Lovelace',
      //   born: 1815
      // });
      console.log("sendMessage triggered")
    }
  },
  setup() {
    const data = ref([]);
    const isLoading = ref(true);

    // const fetchData = async () => {
    //   try {
    //     await apiStore.fetchData()
    //   } finally {
    //     data.value = apiStore.getData;
    //     isLoading.value = false
    //     // isLoading
    //   }

    // };

    onMounted(
        feather.replace
    )

    const sendComment = () => {
      firestore()
          .collection('comments')
          .doc('data')
          .collection(this.props.id)
          .doc(uuidv4())
      console.log("ahoj")
    }

    return {
      data,
      // fetchData,
      sendComment
    };
  },
});


</script>

<template>
  <p
      class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
  >
    Komentáře
  </p>
  <div v-if="!isLoading">

    <div v-for="item in data" :key="item.id">
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="6">
            <v-card
                class="w-full px-5 py-3 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md text-left"
                :title="item.name"
                :subtitle="item.timeStamp"
                :text="item.message"
            >
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
  <Loading v-else/>

  <v-container fluid>
    <v-row justify="center">
      <v-col cols="7">
        <FormTextarea label="zpráva"></FormTextarea>
        <div
            class="
					flex
					justify-between
					border-b border-primary-light
					dark:border-secondary-dark
					pt-3
					pb-3
					gap-2
				"
        >
          <div class="flex justify-between gap-2">
            <input
                class="font-general-medium
						pl-3
						pr-1
						sm:px-4
						py-2
						border-1 border-gray-200
						dark:border-secondary-dark
						rounded-lg
						text-sm
						sm:text-md
						bg-secondary-light
						dark:bg-ternary-dark
						text-primary-dark
						dark:text-ternary-light
						"
                id="name"
                name="name"
                type="search"
                required=""
                placeholder="Jméno"
                aria-label="Name"
            />

          </div>

          <button @click="sendComment()">
                        <span
                            class="
							hidden
							sm:block
							bg-primary-light
							dark:bg-ternary-dark
							p-2.5
							shadow-sm
							rounded-xl
							cursor-pointer
							"
                        >
            <i
                data-feather="send"
                class="text-ternary-dark dark:text-ternary-light"
            ></i>
                          					</span>

          </button>
        </div>

      </v-col>
    </v-row>
  </v-container>

</template>

<style scoped>

</style>