<script>
import AboutMe from '@/components/about/AboutMe';
import AboutCounter from '@/components/about/AboutCounter';
// import AboutClients from '@/components/about/AboutClients';
import feather from 'feather-icons';
import AboutMeAndKisk from "@/components/about/AboutMeAndKisk.vue";

export default {
	name: 'About',
	components: {
    AboutMeAndKisk,
		AboutMe,
		AboutCounter,
		// AboutClients,
	},
	data: () => {
		return {};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div>
		<!-- About me -->
		<div class="container mx-auto">
			<AboutMe />
		</div>

		<!-- About counter -->
		<AboutCounter />

		<!-- About counter -->
		<div class="container mx-auto">
<!--			<AboutClients />-->
      <AboutMeAndKisk/>
		</div>

	</div>
</template>

<style scoped></style>
