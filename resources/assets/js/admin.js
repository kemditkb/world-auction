
require('./bootstrap');
require('admin-lte');
require('bootstrap-datepicker')

import Vue from 'vue'

import router from './components/admin/router'

import App from "./components/admin/app"

const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
