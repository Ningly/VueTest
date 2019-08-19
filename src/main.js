import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import app from './App.vue'
import router from './router.js'

import './lib/mui/css/mui.css'

import {
    Header
} from 'mint-ui';
Vue.component(Header.name, Header);


var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})