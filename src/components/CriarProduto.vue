<template>
    <div>
        <h2>Criar Novo Produto</h2>
        <v-form class="mt-10">
            <v-text-field label="Nome" v-model="nome" class="form-field"></v-text-field>
            <v-text-field label="Descrição" v-model="descricao" class="form-field"></v-text-field>
            <v-text-field label="Valor" v-model="valor" class="form-field"></v-text-field>
            <!-- <v-select label="Tamanho" v-model="tamanho" class="form-field" :items="tamanhos"></v-select> -->
            <div class="text-center">
                <v-btn @click="criarProduto">Salvar</v-btn>
            </div>
        </v-form>
    </div>
</template>

<style>
.form-field {
    width: 400px;
    margin: 0 auto;
}
</style>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            nome: '',
            descricao: '',
            valor: 0,
            // tamanho: '',
            // tamanhos: ['P', 'M', 'G', 'GG']
        }
    },
    methods: {
        criarProduto() {
            if (!this.nome || !this.descricao || !this.valor) {
                alert('Preencha todos os campos antes de salvar o produto.');
                return;
            }

            const novoProduto = {
                nome: this.nome,
                descricao: this.descricao,
                valor: this.valor
            };

            axios.post('http://localhost:8080/api/produtos/novo_produto', novoProduto)
                // .then(() => {
                //     this.$router.push({ name: 'ProdutosList' });
                // })
                .then(() => 
                    this.nome = '',
                    this.descricao = '',
                    this.valor = '',
                    // this.categoria = '',
                    alert("Produto criado com sucesso!")
                )
                .catch(error => {
                    console.error(error);
                });
        }
    }
};

</script>