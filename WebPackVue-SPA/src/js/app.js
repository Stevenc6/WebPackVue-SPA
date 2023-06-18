import { createApp } from 'vue';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(fas);

//import { router } from './router'
import router from './router'
import App from '../App.vue';

require('../sass/app.scss');


//createApp(Layout).use(router).mount('#app')

const app = createApp(App);
app.use(router);
app.mount('#app');
