<template>
    <div class="home-page">
        <v-container class="home-container">
            <v-row justify="center">
                <v-img
                max-width="500"
                cover
                src="../assets/logo.png"
                class="logo-image"
                ></v-img>
            </v-row>
            <v-row>
                <v-text-field
                    v-model="searchQuery"
                    label="Buscar Produtos"
                    append-icon="mdi-magnify"
                    @keydown.enter="searchProducts"
                ></v-text-field>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-spacer></v-spacer>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="4">
                    <v-card>
                    <v-card-title>CPU e Memória</v-card-title>
                    <v-card-text>
                        <p>Placa-mãe</p>
                        <p>Processador</p>
                        <p>Cooler</p>
                    </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="4">
                    <v-card>
                    <v-card-title>Armazenamento</v-card-title>
                    <v-card-text>
                        <p>SSD</p>
                        <p>Pendrive</p>
                        <p>HD Sata</p>
                    </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="4">
                    <v-card>
                    <v-card-title>Software</v-card-title>
                    <v-card-text>
                        <p>Sistema Operacional</p>
                        <p>Aplicativo</p>
                        <p>Jogos</p>
                    </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            searchQuery: '',
        };
    },
    methods: {
        searchProducts() {
            this.$store.dispatch('buscarProdutos', this.searchQuery);
            this.$router.push('/lista-produtos')
        },
    },
};
</script>

<style scoped>
@import "@/assets/styles.css";

.home-page {
  background-color: #FFFFFF; /* Cor branca */
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.home-container {
  text-align: center;
}

.home-card {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.home-title {
  font-size: 32px;
  color: #6A1B9A; /* Cor lilás */
  margin-bottom: 20px;
}

.logo-image {
    margin-bottom: 100px;
}

.button-primary {
  background-color: #6A1B9A; /* Cor lilás */
  color: #FFFFFF; /* Cor branca */
}
</style>