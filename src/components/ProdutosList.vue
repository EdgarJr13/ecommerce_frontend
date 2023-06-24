<template>
    <div>
        <h2>Lista de Produtos</h2>
        <ul>
            <li v-for="produto in produtos" :key="produto.id">
                {{  produto.nome }} - {{  produto.descricao }} - {{ produto.valor }}
                <button @click="editarProduto(produto)">Editar</button> 
                <button @click="excluirProduto(produto.id)">Excluir</button> 
            </li>
        </ul>
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