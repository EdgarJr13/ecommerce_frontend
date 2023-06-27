import { createStore } from "vuex";
import axios from 'axios';

const store = createStore({
    state: {
        produtos: []
    },
    mutations: {
        SET_PRODUTOS(state, produtos) {
            state.produtos = produtos;
        },
    },
    actions: {
        async buscarProdutos({ commit }, searchTerm) {
            try {
                const response = await axios.get('http://localhost:8080/api/produtos/buscar?search=' + searchTerm);
                const produtos = response.data;

                commit('SET_PRODUTOS', produtos);
            } catch (error) {
                console.error(error);
            }
        },
    },
    getters: {
        getProdutos(state) {
            return state.produtos;
        },
    },
});

export default store;