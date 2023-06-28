<template>
  <v-dialog v-model="dialog" max-width="500px">
    <v-card>
      <v-card-title class="text-h5">Editar Produto</v-card-title>
      <v-card-text>
        <v-form @submit="salvarProduto">
          <v-text-field v-model="produtoEditado.nome" label="Nome"></v-text-field>
          <v-text-field v-model="produtoEditado.descricao" label="Descrição"></v-text-field>
          <v-text-field v-model="produtoEditado.valor" label="Valor"></v-text-field>
          <v-btn type="submit" color="primary">Salvar</v-btn>
          <v-btn @click="fecharDialog">Cancelar</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    produto: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dialog: true,
      produtoEditado: { ...this.produto }
    };
  },
  methods: {
    salvarProduto() {
      this.$emit('produtoAtualizado', this.produtoEditado);
      this.dialog = false;
    },
    fecharDialog() {
      this.$emit('fecharDialog');
    }
  }
};
</script>
