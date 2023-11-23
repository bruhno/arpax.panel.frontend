import { createRouter, createWebHistory } from 'vue-router';
import ScoreboardConfigurationView from '@/views/ScoreboardConfigurationView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ScoreboardConfigurationView,
    },

    {
      path: '/submit-re-examination',
      name: 'SubmitReexamination',
      component: () => import('../views/SubmitReexaminationView.vue'),
    },
    {
      path: '/invite-to-inspection-area',
      name: 'InviteToInspectionArea',
      component: () => import('../views/InviteToInspectionAreaView.vue'),
    },
    {
      path: '/deliver-re-examination-fts',
      name: 'DeliverReexaminationFTS',
      component: () => import('../views/DeliverReexaminationFtsView.vue'),
    },
    {
      path: '/return-reexamination',
      name: 'ReturnReexamination',
      component: () => import('../views/ReturnReexaminationView.vue'),
    },
  ],
});

export default router;
