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
          url: 'https://www.google.com/maps/place/Brno/'
        },
        {
          id: 2,
          name: 'ddmatatkova@gmail.com',
          icon: 'mail',
          url: 'mailto:ddmatatkova@gmail.com'
        },
        {
          id: 3,
          name: 'LinkedIn',
          icon: 'linkedin',
          url: 'https://www.linkedin.com/in/matatkova/'
        }
        // {
        //   id: 4,
        //   name: '123456789',
        //   icon: 'phone',
        //   url: 'callto:+420123456789'
        // },
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
