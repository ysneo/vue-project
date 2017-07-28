import Vue, { ComponentOptions } from 'vue'
import VueRouter, { RouterOptions } from 'vue-router'
import routers from './router'


Vue.use(VueRouter)

const RouterConfig: RouterOptions = {
    routes: routers
}

const router = new VueRouter(RouterConfig)

new Vue({
    el: '#app',
    router,
    render: h => h()
} as ComponentOptions<Vue>)