import Vue from 'vue'
import VueRouter from 'vue-router'
import Sobrenos from '@/views/Sobrenos.vue'
import HomeOrchid from '@/views/HomeOrchid.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/',
    component: () => import('../layouts/DefaultOrchid.vue'),
  children: [{
    path: '/sobrenos',
    component: Sobrenos

  },
  {path: '',
  component: HomeOrchid},
]
}]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
