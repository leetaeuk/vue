import Vue from 'vue';
import main from '@/App.vue';

import Vuetify from 'vuetify/lib/framework';
import vuetify from '@/plugins/vuetify';

import VueRouter from "vue-router";
import router from "@/plugins/router";

import common from '@/assets/js/common';
import axios from "@/plugins/axios";

Vue.config.productionTip = false

Vue.use(common);
Vue.use(axios);
Vue.use(VueRouter);
Vue.use(Vuetify);

new Vue({
    router,
    vuetify,
    common,
    axios,
    render: h => h(main)
}).$mount('#app');