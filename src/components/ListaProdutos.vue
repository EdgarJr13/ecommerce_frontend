<template>
    <div class="lista-produtos-page">
        <v-container>
            <v-row>
                <v-col v-for="produto in produtos" :key="produto.id" cols="12" sm="6" md="4" lg="3">
                    <v-card>
                        <v-card-title>{{ produto.nome }}</v-card-title>
                        <v-card-text>{{ produto.descricao }}</v-card-text>
                        <v-card-text>R${{ produto.valor }},00</v-card-text>
                        <v-card-actions>
                            <v-btn color="primary" @click="adicionarAoCarrinho()">
                                Adicionar ao Carrinho
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <!-- <h2>Lista de Produtos</h2>
        <ul>
            <li v-for="produto in produtos" :key="produto.id">
                <h3>{{ produto.nome }}</h3>
                <p>{{ produto.descricao }}</p>
                <p>{{ produto.valor }}</p>
                <button @click="adicionarAoCarrinho(produto)">Adicionar ao Carrinho</button>
            </li>
        </ul> -->
    </div>
  </template>
  
<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['getProdutos']),
        produtos() {
            return this.getProdutos;
        },
    },
};
</script>
  

<style>
.lista-produtos-page {
  margin-top: 90px; /* Altura da navbar, ajuste conforme necessário */
}
</style>
  