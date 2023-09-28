<script>
import AppHeaderLinksLink from "@/components/shared/AppHeaderLinksLink.vue";

export default {
  components: {AppHeaderLinksLink},
  props: ['showModal', 'isOpen'],
};
</script>

<template>
  <!-- Header links -->
  <div
      :class="isOpen ? 'block' : 'hidden'"
      class="m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
  >
    <AppHeaderLinksLink aria_label="Projects" label="KISK" route="/kisk"/>
    <AppHeaderLinksLink aria_label="Projects" label="Projekty" route="/projects"/>
    <AppHeaderLinksLink aria_label="About Me" label="O mně" route="/about"/>
    <AppHeaderLinksLink aria_label="Contact" label="Kontakt" route="/contact"/>
    <!--		<div-->
    <!--			class="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark"-->
    <!--		>-->
    <!--			<button-->
    <!--				class="font-general-medium sm:hidden block text-left text-md font-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-500"-->
    <!--				@click="showModal()"-->
    <!--				aria-label="Hire Me Button"-->
    <!--			>-->
    <!--				Hire Me-->
    <!--			</button>-->
    <!--		</div>-->
  </div>
</template>

<style lang="scss" scoped></style>
