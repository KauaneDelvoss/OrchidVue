import Vue from 'vue'
import VueRouter from 'vue-router'
import Sobrenos from '@/views/Sobrenos.vue'
import HomeOrchid from '@/views/HomeOrchid.vue'
import EquipesOrchid from '@/views/EquipesOrchid.vue'
import LoginOrchid from '@/views/LoginOrchid.vue'

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
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
