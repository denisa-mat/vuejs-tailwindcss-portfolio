<script>
export default {
  setup() {
    return {
      bios: [
        {
          id: 1,
          bio:
              'Ahoj. 👋'

        },
        {
          id: 2,
          bio:
              'Jmenuji se Denisa. Jsem studentka, lektorka 🏫, datová analytička 📈 a nadšenec do vzdělávání dětí. 🚀'

        },
        {
          id: 3,
          bio:
              'Mezi mé koníčky patří především čtení knih. Dokumentace je též zábavné čtení, ' +
              'ale obyčejně se tam nedočtete o\xa0dracích, hobitech nebo čarodějkách. 🦄'
        },
      ],
    };
  },
};
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img
          src="@/assets/images/profile.svg"
          class="rounded-xl w-96"
          alt=""
      />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 text-left">
      <p
          v-for="bio in bios"
          :key="bio.id"
          class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
      >
        {{ bio.bio }}
      </p>
    </div>
  </div>
</template>
