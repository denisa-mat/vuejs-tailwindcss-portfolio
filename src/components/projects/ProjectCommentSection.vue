<script>
import {defineComponent, onMounted, onUpdated} from "vue";

import Loading from "@/components/reusable/Loading.vue";
import feather from "feather-icons";
import {firebase} from "@/firebaseInit";
import {collection, addDoc, getFirestore, getDocs} from "firebase/firestore";
// import {getFirestore} from "firebase/firestore";

export default defineComponent({
  data() {
    return {
      name: '',
      message: '',
      db: getFirestore(firebase),
      pid: this.id,
      labelMessage: 'Zpráva',
      labelName: 'Jméno',
      errorMessage: '',
      errorCanNotBeEmptyMessage: 'Obě pole musí být vyplněna',
      comments: [],
      commentsEnabled: localStorage.getItem('code') === '485131',
      code: '',
      labelCode: 'Kód',
      codeStorageKey: 'code',
      errorCodeMessage: '',
      errorBadCode: 'Nesprávný kód'
    }
  },

  created() {
    this.fetchComments()
  },

  props: ['id'],
  methods: {
    verify() {
      if (this.code === '485131') {
        localStorage.setItem(this.codeStorageKey, this.code)
        this.commentsEnabled = true
        this.errorCodeMessage = ''
      }
      this.errorCodeMessage = this.errorBadCode
    },
    async sendComment() {
      if (this.message === '' || this.name === '') {
        this.errorMessage = this.errorCanNotBeEmptyMessage
      } else {
        const date = Date.now()
        try {
          const docRef = await addDoc(
              collection(this.db, "comments/data/" + this.pid)
              , {
                timeStamp: date,
                name: this.name,
                message: this.message
              });
          console.log("Document written with ID: ", docRef.id);
          this.comments.unshift({
            name: this.name,
            message: this.message,
            timeStamp: date
          })
          this.name = ""
          this.message = ""
          this.errorMessage = ""
        } catch (e) {
          this.errorMessage = e.errorMessage
          console.error("Error adding document: ", e);
        }

        console.log(this.pid)
        console.log(this.name)
        console.log(this.message)
      }
    },

    async fetchComments() {
      try {
        const querySnap = await getDocs(
            collection(this.db, "comments/data/" + this.pid)
        );
        console.log(querySnap)
        querySnap.forEach((doc) => {
          console.log(doc.data())
          this.comments.push(doc.data())
        })
        this.comments = this.comments.sort((d1, d2) => {
          return d1 - d2
        })
      } catch (e) {
        this.errorMessage = e.errorMessage
        console.error("Error adding document: ", e);
      }
      console.log('tutu')
    }

  },
  computed: {},

  components: {Loading},
  actions: {},
  setup() {

    // const data = ref([]);
    // const isLoading = ref(true);
    // const db = firebase.firestore();

    onMounted(
        feather.replace
    )

    onUpdated(
        feather.replace
    )
  },
});


</script>

<template>
  <h2
      class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
  >
    Komentáře
  </h2>

  <div v-if="!commentsEnabled">
    <v-container fluid>
      <p class="font-general-regular text-primary-dark dark:text-ternary-light"
      >K odemknutí komentářové sekce zadejte kód.</p>
      <v-row justify="center">

        <v-col cols="3">

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
                  v-model="code"
                  type="search"
                  required=""
                  :placeholder="this.labelCode"
                  aria-label="Name"
              />

            </div>

            <button @click="verify()">
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
                data-feather="unlock"
                class="text-ternary-dark dark:text-ternary-light"
            ></i>
            </span>

            </button>
          </div>

        </v-col>
      </v-row>
      <p v-if="this.errorCodeMessage !== ''" class="error">{{ this.errorCodeMessage }}</p>
    </v-container>
  </div>
  <div v-else>
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
        <v-col cols="10">
          <div>
            <label
                class="block text-lg text-primary-dark dark:text-primary-light mb-2"
                :for="textareaIdentifier"
            >{{ label }}</label
            >
            <textarea
                class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                :id="textareaIdentifier"
                :name="textareaIdentifier"
                :aria-label="textareaIdentifier"
                :placeholder="this.labelMessage"
                v-model="message"
                cols="14"
                rows="6"
            ></textarea>
          </div>
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
                  v-model="name"
                  type="search"
                  required=""
                  :placeholder="this.labelName"
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
        <p class="error">{{ this.errorMessage }}</p>
      </v-row>
    </v-container>

    <v-container fluid>
      <v-row justify="center">
        <v-col cols="10">
          <div v-for="comment in this.comments" :key="comment.id" class="mb-3">
            <v-card
                :title="comment.name"
                :subtitle="new Date(comment.timeStamp).toLocaleString()"
                :text="comment.message"
                variant="tonal"
                class="text-left text-ternary-dark dark:text-ternary-light"
            >
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.error {
  color: red
}
</style>