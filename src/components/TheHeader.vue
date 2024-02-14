<script>
import {store} from '../store'

export default {
    name: "theHeader",
    data(){
        return{
            store
        }
    }
}
</script>

<!-- -------------------------------------------------------- -->

<template>
    <header class="d-flex justify-content-between align-items-center p-3 bg-dark">
        <h1 class="text-danger">Boolflix</h1>

        <div>
            <input type="text" placeholder="Cerca titolo" v-model="store.searchTitle">
            <button @click="$emit('emitGetMovies')">cerca</button> <!-- @keyup.enter.prevent="$emit('emitGetMovies')" -->
        </div>
    </header>
</template>

<!-- -------------------------------------------------------- -->

<style lang="scss" scoped>

</style>
