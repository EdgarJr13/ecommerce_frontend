<template>
  <v-container>
    <h1 class="text-center">Lista de Produtos</h1>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6" v-for="produto in produtos" :key="produto.id">
        <v-card class="mb-4">
          <v-card-title>{{ produto.nome }}</v-card-title>
          <v-card-text>
            <p>{{ produto.descricao }}</p>
            <p>{{ produto.valor }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="adicionarAoCarrinho(produto)">
              <v-icon left>mdi-cart</v-icon>
              Adicionar ao Carrinho
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            produtos: []
        };
    },
    mounted() {
        this.listarProdutos();
    },
    methods: {
        listarProdutos() {
            axios.get('http://localhost:8080/api/produtos')
                .then(response => {
                    this.produtos = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        editarProduto(produto) {
            this.$router.push({ name: 'EditarProduto', params: { id: produto.id } });
        },
        excluirProduto(produtoId) {
            axios.delete('http://localhost:8080/api/produtos/deletar_produto/' + produtoId)
                .then(() => {
                    alert('Produto deletado com sucesso.');
                    this.listarProdutos();
                })
                .catch(error => {
                    console.error(error);
                });
        } 
    }
};
</script>