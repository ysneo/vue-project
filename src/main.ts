import Vue, { ComponentOptions } from 'vue'
import VueRouter, { RouterOptions } from 'vue-router'
import App from './components/app.vue'
import routers from './router'

Vue.use(VueRouter)

const router = new VueRouter(routers)

new Vue({
    // router,
    render: h => h(App)
} as ComponentOptions<Vue>).$mount('#app')
