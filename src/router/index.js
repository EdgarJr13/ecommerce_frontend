import { createRouter, createWebHistory } from 'vue-router';
import GerenciarProdutos from '@/components/GerenciarProdutos.vue';
import CriarProdutoDialog from '@/components/dialogs/CriarProdutoDialog.vue';
import EditarProdutoDialog from '@/components/dialogs/EditarProdutoDialog.vue';
import HomePage from '@/components/HomePage.vue';
import ListaProdutos from '@/components/ListaProdutos.vue';

const routes = [
    {path: '/', component: HomePage, name: "Home" },
    {path: '/gerenciar-produtos', component: GerenciarProdutos, name: 'GerenciarProdutos' },
    {path: '/produtos/criar', component: CriarProdutoDialog, name: 'CriarProdutoDialog' },
    {path: '/produtos/editar/:id', component: EditarProdutoDialog, name: 'EditarProdutoDialog' },
    {path: '/lista-produtos/', component: ListaProdutos, name: 'ListaProdutos' },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;