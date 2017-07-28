<template>
    <div>
        <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>

<script lang="ts">

import Vue, { ComponentOptions } from 'vue'

interface Hello extends Vue {
    initialEnthusiasm: number
    enthusiasm: number
}

export default {

    props: ['name', 'initialEnthusiasm'],
    data() {
        return {
            enthusiasm: this.initialEnthusiasm,
        }
    },
    methods: {
        increment() { this.enthusiasm++; },
        decrement() {
            if (this.enthusiasm > 1) {
                this.enthusiasm--;
            }
        },
    },
    computed: {
        exclamationMarks(): string {
            return Array(this.enthusiasm + 1).join('!');
        }
    }
} as ComponentOptions<Hello>

</script>

<style lang="scss">
$primary-color: #242424;

body {
    color: white;
    background: $primary-color;
}
</style>


<style lang="scss" scoped>
.greeting {
    font-size: 20px;
}
</style>



