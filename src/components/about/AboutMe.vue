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
              'Jmenuji se Denisa, jsem studentka KISKu, lektorka v Czechitas 🏫, datový analytik 📈 a nadšenec do vzdělávání dětí. 🚀'

        },
        {
          id: 3,
          bio:
              'Aktuálně studuji první ročník navazujícího studia Informačních studií a knihovnictví na Masarykově univerzitě. ' +
              'Zajímají mě především oblasti technologií ve vzdělávání a datového managementu. ' +
              'Nejraději bych obě tyto oblasti propojila, tak uvidíme kam mě studium zavane.'
        },
        {
          id: 4,
          bio:
              'Bakalářské vzdělání mám z dvouoborového studia matematiky a informatiky ve vzdělávání na Přf a FI MUNi. ' +
              'Už v\xa0průběhu studia jsem začala vést v organizaci Czechitas kroužky, tábory i jednorázové kurzy pro děti zaměřené na programování ve Scratchi, ale i robotiku a další. ' +
              'Zároveň pracuju v korporátu jako datový analytik, kde vytvářím interní reporty v Power BI dle požadavků jednotlivých oddělení.'
        },
        // {
        //   id: 5,
        //   bio:
        //       'Mezi mé koníčky patří především čtení knih, které jsem bohužel v posledních letech vyměnila za čtení technické dokumentace a skript z matematiky. ' +
        //       'Občas je to také zábavné čtení, ale o\xa0dracích, hobitech nebo čarodějkách se tam obvykle nedočtu. 🦄 ' +
        //       'Doufám, že bude prostor zase začít číst více. '
        // },
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

