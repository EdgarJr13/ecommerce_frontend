<template>
    <div class="lista-produtos-page">
        <v-container>
            <v-row>
                <v-col v-for="produto in produtos" :key="produto.id" cols="12" sm="8" md="6">
                    <v-card class="mb-4">
                        <v-card-title>{{ produto.nome }}</v-card-title>
                        <v-card-text>{{ produto.descricao }}</v-card-text>
                        <v-card-text>R${{ produto.valor }}</v-card-text>
                        <v-card-actions>
                            <v-btn color="primary" @click="adicionarAoCarrinho()">
                                <v-icon>mdi-cart</v-icon>
                                Adicionar ao Carrinho
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
  </template>
  
<script>
import { mapGetters } from 'vuex';

export default {
    methods: {
        adicionarAoCarrinho() {
            alert("A funcionalidade de adicionar ao carrinho será implementada futuramente.");
        }
    },
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
  