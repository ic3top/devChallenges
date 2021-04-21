import { createApp } from 'vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faList, faAngry, faCoins, faShoppingCart, faHamburger, faHandPointer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPhone, faList, faAngry, faCoins, faShoppingCart, faHamburger, faHandPointer);
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
