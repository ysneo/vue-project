// define the router
import { RouterOptions } from 'vue-router'
import Hello from './components/hello.vue'

const Routers: RouterOptions = {
    routes: [{ path: '/hello', component: Hello }]
}

export default Routers
