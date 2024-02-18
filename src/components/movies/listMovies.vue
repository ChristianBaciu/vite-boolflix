<script>
import movies from './Movies.vue'
import {store} from '../../store'

export default {
    name: "ListMovies",
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
    <h4 class="p-3 text-light">Films</h4>
    <div class="scroll d-flex">
        <movies v-for="(film, index) in store.moviesArray" :key="index" :propsItem="film"/>
    </div>

    <h4 class="p-3 text-light">Serie Tv</h4>
    <div class="scroll d-flex mb-5">
        <movies v-for="(serie, index) in store.seriesArray" :key="index" :propsItem="serie"/>
    </div>
</template>

<!-- -------------------------------------------------------- -->

<style lang="scss" scoped>

    .scroll{
        overflow-x: auto;
        scrollbar-width: thin;
        scrollbar-color: rgb(90, 90, 90) #212529;
    }
</style>
