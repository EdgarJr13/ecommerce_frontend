<template>
  <div class="gerenciar-produtos-page">
    <v-container>
      <h1 class="text-center">Produtos em estoque</h1>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6" v-for="produto in produtos" :key="produto.id">
          <v-card class="mb-4">
            <v-card-title>{{ produto.nome }}</v-card-title>
            <v-card-text>
              <p>{{ produto.descricao }}</p>
              <p>R${{ produto.valor }},00</p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="editarProduto(produto)">
                <v-icon left>mdi-pencil</v-icon>
                Editar
              </v-btn>
              <v-btn color="primary" @click="excluirProduto(produto.id)">
                <v-icon left>mdi-delete</v-icon>
                Deletar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-btn fab color="primary" class="fab-button" @click="dialogCriarProduto = true">
        <v-icon>mdi-plus</v-icon>
      </v-btn>

      <v-dialog v-model="dialogCriarProduto" max-width="500px">
        <v-card>
          <v-card-title class="text-h5">Criar novo Produto</v-card-title>
          <v-card-text>
            <CriarProduto @produtoCriado="listarProdutos" />
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="dialogCriarProduto = false">Fechar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
import CriarProduto from './CriarProduto.vue'
import axios from 'axios';

export default {
  components: {
    CriarProduto
  },
    data() {
        return {
            produtos: [],
            dialogCriarProduto: false
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

<style>
.gerenciar-produtos-page {
  margin-top: 70px;
}
</style>