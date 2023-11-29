import { createRouter, createWebHistory } from 'vue-router';
import ScoreboardConfigurationView from '@/views/ScoreboardConfigurationView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'Табло информирования',
      },
      component: ScoreboardConfigurationView,
    },

    {
      path: '/submit-re-examination',
      name: 'SubmitReexamination',
      meta: {
        title: 'Информационное табло 1',
      },
      component: () => import('../views/SubmitReexaminationView.vue'),
    },
    {
      path: '/return-reexamination',
      name: 'ReturnReexamination',
      meta: {
        title: 'Информационное табло 2',
      },
      component: () => import('../views/ReturnReexaminationView.vue'),
    },
    {
      path: '/invite-to-inspection-area',
      name: 'InviteToInspectionArea',
      meta: {
        title: 'Информационное табло 3',
      },
      component: () => import('../views/InviteToInspectionAreaView.vue'),
    },
    {
      path: '/deliver-re-examination-fts',
      name: 'DeliverReexaminationFTS',
      meta: {
        title: 'Информационное табло 4',
      },
      component: () => import('../views/DeliverReexaminationFtsView.vue'),
    },
  ],
});

export default router;
