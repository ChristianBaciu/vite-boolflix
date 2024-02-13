<script>
import TheHeader from './components/TheHeader.vue'
import listMovies from './components/movies/listMovies.vue'
import axios from 'axios'

import {store} from './store'

export default {
    components:{
        TheHeader,
        listMovies
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


                // cerca il titolo
                // if(store.searchTitle){
                //     store.ArrayMovies += `?title${store.searchTitle}`
                // }





            })
        }
    },
}

</script>

<!-- -------------------------------------------------------- -->

<template>
    <TheHeader @chiCercaTrova="getMovies"/> <!-- figlio -->
    <listMovies/>
</template>

<!-- -------------------------------------------------------- -->

<style lang="scss" scoped>

</style>
