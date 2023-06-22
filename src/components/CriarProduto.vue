<template>
    <div>
        <h2>Criar Novo Produto</h2>
        <form @submit="criarProduto">
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
export default {
    data() {
        return {
            produto: {
                nome: '',
                descricao: '',
                valor: 0
            }
        };
    },
    methods: {
        criarProduto() {
            axios.post('/api/produto/novo_produto', this.produto)
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