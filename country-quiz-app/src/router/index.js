import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Quiz from '@/views/Quiz/Quiz.vue';
import QuizResults from '@/views/Quiz/QuizResults.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/quiz/:pattern',
    name: 'Quiz',
    component: Quiz,
  },
  {
    path: '/quiz/results',
    name: 'Results',
    component: QuizResults,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
