<template>
  <v-app>
    <Navbar />
    <router-view></router-view>
  </v-app>
</template>

<script>
import Navbar from '@/components/navbar/NavbarCommerce.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
};
</script>
