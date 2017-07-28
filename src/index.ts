import Vue, { ComponentOptions } from 'vue'
import HelloComponent from './components/hello.vue'


const vm = new Vue({
    el: '#app',
    template: `
    <div>
        Name: <input v-model="name" type="text">
        <HelloComponent :name = "name" :initialEnthusiasm="5" ></HelloComponent>
    </div>`,
    data() {
        return {
            name: 'world'
        }
    },
    components: { HelloComponent }
} as ComponentOptions<Vue>);