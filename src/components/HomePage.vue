<template>
    <div class="home-page">
        <v-container class="home-container">
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="6" lg="4">
                    <v-card class="home-card">
                        <v-card-title class="home-title">
                            <h6>Bem-vindo à nossa loja de blusas de time!</h6>
                        </v-card-title>
                        <v-card-text>
                            <p>
                                Aqui você encontra uma variedade de blusas de times para os apaixonados por futebol.
                            </p>
                        </v-card-text>
                        <v-card-actions align="center">
                            <v-col cols="12" sm="6" md="4">
                                <v-btn class="button-primary">Ver Produtos</v-btn>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-btn class="button-primary" to="/produtos/criar">Inserir novo Produto</v-btn>
                            </v-col>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
  
<script>
export default {
name: 'HomePage',
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

.button-primary {
  background-color: #6A1B9A; /* Cor lilás */
  color: #FFFFFF; /* Cor branca */
}
</style>