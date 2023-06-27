import { createRouter, createWebHistory } from 'vue-router';
import GerenciarProdutos from '@/components/GerenciarProdutos.vue';
import CriarProduto from '@/components/CriarProduto.vue';
import EditarProduto from '@/components/EditarProduto.vue';
import HomePage from '@/components/HomePage.vue';
import ListaProdutos from '@/components/ListaProdutos.vue';

const routes = [
    {path: '/', component: HomePage, name: "Home" },
    {path: '/produtos', component: GerenciarProdutos, name: 'GerenciarProdutos' },
    {path: '/produtos/criar', component: CriarProduto, name: 'CriarProduto' },
    {path: '/produtos/editar/:id', component: EditarProduto, name: 'EditarProduto' },
    {path: '/lista-produtos/', component: ListaProdutos, name: 'ListaProdutos' },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;