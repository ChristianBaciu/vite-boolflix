<script>
import TheHeader from './components/TheHeader.vue'
import ListMovies from './components/movies/ListMovies.vue'
import axios from 'axios'
import {store} from './store'

export default {
    components:{
        TheHeader,
        ListMovies
    },
    data(){
        return{
            store
        }
    },
    mounted(){
        // this.getMovies(),
        // this.getSeries()
    },
    methods:{

        getMovies(){
            if(store.searchTitle){
                axios.get(`${store.endPointMovies}?api_key=${store.apiKey}&query=${store.searchTitle}`).then(response =>{

                    store.moviesArray = (response.data.results)
                    console.log(response.data.results)
                })
            }
        },

        getSeries(){
            if(store.searchTitle){
                axios.get(`${store.endPointSeries}?api_key=${store.apiKey}&query=${store.searchTitle}`).then(response =>{

                    store.seriesArray = (response.data.results)
                    console.log(response.data.results)
                })
            }
        },

        search(){ 
            // ho messo search nell'emit del bottone, per attivare la funzione di getMovies e getSeries
            this.getMovies()
            this.getSeries()
        },
    }
}
</script>

<!-- -------------------------------------------------------- -->

<template>
    <!-- <TheHeader @emitGetMovies="getMovies"/> TheHeader è il figlio, App.vue è il padre -->
    <TheHeader @emitGetMovies="search"/>
    <ListMovies/>
</template>

<!-- -------------------------------------------------------- -->

<style lang="scss" scoped>

</style>
