/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.Vue = require('vue');

import VueRouter from 'vue-router';

import Routes from './routes/index';
// Engage VueJs Plugins....
Vue.use(Vuex);
Vue.use(VueRouter);

const Router = new VueRouter({
  mode: 'hash',
  routes: Routes
})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.component('App', require('./App.vue').default);
Vue.prototype.$baseUrl = 'http://localhost:8000/api/v1/';

const app = new Vue({
    el: '#app',
    router: Router,
});
