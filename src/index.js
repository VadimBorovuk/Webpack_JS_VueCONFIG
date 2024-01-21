// import * as Vue from 'vue';
// import App from './App.vue';
//
//
// Vue.createApp(App).mount('#app');


import { createApp } from 'vue'
import App from './App.vue';

export const eventBus = createApp(App)

createApp(App).mount('#app')