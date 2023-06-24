<template>
    <div>
      <v-container>
        <v-row>
          <v-col
            v-for="produto in produtos"
            :key="produto.id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-img :src="produto.imagem" height="200"></v-img>
              <v-card-title>{{ produto.nome }}</v-card-title>
              <v-card-text>
                <p>{{ produto.descricao }}</p>
                <p>R${{ produto.valor }},00</p>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click="editarProduto(produto)">
                  Editar Produto
                </v-btn>
                <v-btn color="primary" @click="excluirProduto(produto.id)">
                  Excluir Produto
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
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
        // eslint-disable-next-line no-unused-vars
        excluirProduto(produtoId) {

            axios.delete('http://localhost:8080/api/produtos/deletar_produto/${produtoId}')
                .then(() => {
                    this.listarProdutos();
                })
                .catch(error => {
                    console.error(error);
                });
        } 
    }
};
</script>