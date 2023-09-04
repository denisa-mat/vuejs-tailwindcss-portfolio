<script>
import feather from 'feather-icons';
// import ContactForm from '@/components/contact/ContactForm.vue';
import ContactDetails from '@/components/contact/ContactDetails.vue';
import Avatar from "../components/Avatar.vue";

export default {
	components: {
    Avatar,
		// ContactForm,
		ContactDetails,
	},
	data: () => {
		return {
			contacts: [
				{
					id: 1,
					name: 'Brno, Česká republika',
					icon: 'map-pin',
				},
				{
					id: 2,
					name: 'ddmatatkova@gmail.com',
					icon: 'mail',
				},
				{
					id: 3,
					name: '605 953 459',
					icon: 'phone',
				},
			],
		};
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
	<div
		class="container d-flex justify-center mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"
	>

		<!-- Contact form -->
<!--		<ContactForm />-->

		<!-- Contact details -->
		<ContactDetails :contacts="contacts" />
    <avatar/>
	</div>
</template>
