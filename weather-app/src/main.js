import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import store from './store';
import 'primeflex/primeflex.css';
import 'primevue/resources/themes/arya-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

createApp(App)
  .use(store)
  .use(PrimeVue, { ripple: true })
  .mount('#app');
