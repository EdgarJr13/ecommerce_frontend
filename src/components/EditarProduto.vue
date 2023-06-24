<template>
    <div>
      <h2>Editar Produto</h2>
      <form @submit="atualizarProduto">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" v-model="produto.nome" required>
        <label for="descricao">Descrição:</label>
        <input type="text" id="descricao" v-model="produto.descricao" required>
        <label for="valor">Valor:</label>
        <input type="number" id="valor" v-model="produto.valor" required>
        <button type="submit">Salvar</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    data() {
      return {
        produto: {
          id: null,
          nome: '',
          descricao: '',
          valor: 0
        }
      };
    },
    created() {
      this.obterProduto();
    },
    methods: {
      obterProduto() {
        const id = this.$route.params.id;
        axios.get(`http://localhost:8080/api/produtos/obter_produto_id/${id}`)
          .then(response => {
            this.produto = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      },
      atualizarProduto() {
        const id = this.$route.params.id;
        axios.put(`http://localhost:8080/api/produtos/atualizar_produto/${id}`, this.produto)
          .then(() => {
            this.$router.push({ name: 'ProdutosList' });
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  };
  </script>
  