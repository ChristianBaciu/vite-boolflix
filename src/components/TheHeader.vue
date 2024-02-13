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
    <header class="d-flex justify-content-between p-3">
        <h1 class="text-danger">Boolflix</h1>

        <div>
            <input type="text" placeholder="Cerca titolo" v-model="store.searchTitle">
            
            <button @click.prevent="$emit('chiCercaTrova')">cerca</button>
        </div>
    </header>
</template>

<!-- -------------------------------------------------------- -->

<style lang="scss" scoped>

</style>
