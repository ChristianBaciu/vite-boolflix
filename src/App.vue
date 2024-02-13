<script>
import CompHeader from './components/CompHeader.vue'
import CompFilm from './components/CompFilm.vue'
import axios from 'axios'

import {store} from './store'

export default {
    components:{
        CompHeader,
        CompFilm
    },
    data(){
        return{
            store
        }
    },
    mounted(){
        this.getMovies()
    },
    methods:{
        getMovies(){
            axios.get(store.MovieApiUrl).then(response =>{
                store.ArrayMovies = response.data.results
                console.log(store.ArrayMovies)
            })
        }
    },
}

</script>

<!-- -------------------------------------------------------- -->

<template>
    <CompHeader/>
    <CompFilm/>

</template>

<!-- -------------------------------------------------------- -->

<style lang="scss" scoped>

</style>
