<script>
import movies from './Movies.vue'
import {store} from '../../store'

export default {
    name: "listMovies",
    components:{
        movies
    },
    
    data(){
        return{
            store
        }
    }
}

</script>

<!-- -------------------------------------------------------- -->

<template>
    <h1 class="p-3">Films</h1>
    <div class="d-flex scroll">
        <movies v-for="(film, index) in store.moviesArray" :key="index" :propsItem="film"/>
    </div>


    <h1 class="p-3">Serie Tv</h1>
    <div class="d-flex scroll">
        <movies v-for="(serie, index) in store.seriesArray" :key="index" :propsItem="serie"/>
    </div>
</template>

<!-- -------------------------------------------------------- -->

<style lang="scss" scoped>
    .scroll{
        overflow-x: auto;
        scrollbar-color: green orange;
        scrollbar-width: thin;
    }
</style>
