<template>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="toggleDrawer" />
      <v-toolbar-title class="ml-2">Ecommerce</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="white" text to="/">Home</v-btn>
      <v-btn color="white" text to="/produtos">Produtos</v-btn>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    methods: {
      toggleDrawer() {
        // Aqui você pode implementar a lógica para abrir/fechar o drawer (menu lateral), se desejar.
      },
    },
  };
  </script>
  
  <style scoped>
  .v-toolbar__title {
    font-size: 20px;
  }
  </style>
  