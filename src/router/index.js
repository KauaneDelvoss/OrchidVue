import Vue from 'vue'
import VueRouter from 'vue-router'
import Sobrenos from '@/views/Sobrenos.vue'
import HomeOrchid from '@/views/HomeOrchid.vue'
import EquipesOrchid from '@/views/EquipesOrchid.vue'
import LoginOrchid from '@/views/LoginOrchid.vue'
import CadastroOrchid from '@/views/CadastroOrchid.vue'
import ContatoOrchid from '@/views/ContatoOrchid.vue'
import CriarEquipe from '@/views/CriarEquipe.vue'
import EntrarEquipe from '@/views/EntrarEquipe.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/DefaultOrchid.vue"),
    children: [
      {
        path: "/",
        component: HomeOrchid,
      },
      {
        path: "/sobrenos",
        component: Sobrenos,
        props: true,
      },
      {
        path: '/equipes',
        component: EquipesOrchid,
      },
      {
        path: '/contato',
        component: ContatoOrchid
      },    
    ],
  },
  {
    path: "",
    name: "blank",
    component: () => import("@/layouts/BlankOrchid.vue"),
    children: [
      {
        path: '/login',
        component: LoginOrchid,
        
      },
      {
        path: '/cadastro',
        component: CadastroOrchid
      },
      {
        path: '/criarequipe',
        component: CriarEquipe
      },
      {
        path: '/entrarequipe',
        component: EntrarEquipe
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
