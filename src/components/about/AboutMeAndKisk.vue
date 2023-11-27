<script>
export default {
  name: "AboutMeAndKisk",
  setup() {
    return {
      kisk: [
        {
          id: 1,
          kiskParagraph:
              'Proč KISK?'

        },
        {
          id: 2,
          kiskParagraph:
              'Když se s někým bavím a říkám, že jsem studovala matematiku a informatiku ve vzdělávání, tak hned po vysvětlení, že to nebylo na pedagogické fakultě, ale na fakultě informatiky a ústavu matematiky na přírodovědecké fakultě. Následuje otázka, jak jsem se ocitla na filosofické fakultě, takže odpověď mám celkem natrénovanou.'
        },
        {
          id: 3,
          kiskParagraph:
              'Moje cesta vysokoškolským vzděláváním není úplně přímočará. Po dvou letech studia sociální informatiky, kde jsem doufala v propojení právě informatiky s humanitními vědami a nedostala ho, jsem změnila obor a začala znovu na dvouoboru se zaměřením na vzdělávání.'
        },
        {
          id: 4,
          kiskParagraph:
              'Mohla jsem pokračovat v učitelství, měla jsem ale pocit, že bych se spíš trápila a zároveň, že bych ráda získala jinou perspektivu. Začala jsem se rozhlížet kam dál. Nechtěla jsem od informatiky odejít, ale nechtěla jsem ani zůstat, zároveň se stále nevzdávám myšlenky propojení technologií a lidí. O KISKu jsem věděla již několik let a po prozkoumání webu jsem byla přesvědčená, že tohle chci zažít. Později jsem se na dozvěděla o možnosti získat pedagogické minimum a to mě v rozhodnutí jen  utvrdilo.'
        },
        {
          id: 5,
          kiskParagraph:
              'Od studia očekávám především jiný úhel pohledu na informatiku a její zasazení do širšího kontextu informační vědy. Ráda bych se pohybovala na pomezí profilací datový management a technologie ve vzdělávání, ale celkem snadno se nadchnu do něčeho nového, takže to možná dopadne úplně jinak. Chtěla bych si také po dokončení magisterského studia dodělat zmíněné pedagogické minimum.'
        },
      ],
    };
  },
}
</script>

<template>
  <div class="mt-10 sm:mt-20 w-full text-left">
    <p
        v-for="kisk in kisk"
        :key="kisk.id"
        class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
    >
      {{ kisk.kiskParagraph }}
    </p>
  </div>
</template>

<style scoped>

</style>