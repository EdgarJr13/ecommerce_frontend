import { createRouter, createWebHistory } from 'vue-router';
import ProdutosList from '@/components/ProdutosList.vue';
import CriarProduto from '@/components/CriarProduto.vue';
import EditarProduto from '@/components/EditarProduto.vue';
import HomePage from '@/components/HomePage.vue';

const routes = [
    {path: '/', component: HomePage, name: "Home" },
    {path: '/produtos', component: ProdutosList, name: 'ProdutosList' },
    {path: '/produtos/criar', component: CriarProduto, name: 'CriarProduto' },
    {path: '/produtos/editar/:id', component: EditarProduto, name: 'EditarProduto' },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;