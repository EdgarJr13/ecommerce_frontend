<template>
  <v-app>
    <Navbar />
    <router-view></router-view>
  </v-app>
</template>

<script>
import Navbar from '@/components/NavbarCommerce.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
};
</script>
