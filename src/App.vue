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
        // getImage(){
        //     if(store.searchTitle){
        //         axios.get(`${store.imgApi}?api_key=${store.apiKey}&query=${store.searchTitle}`).then(response =>{

        //         store.imgArray.length = 0; // Pulisci l'array in modo reattivo
        //         store.imgArray.push(...response.data.results); // Aggiungi nuovi elementi
        //         console.log(response.data.results);

        //         })
        //     }

        // },



        search(){ 
            // ho messo search nell'emit del bottone, per attivare la funzione di getMovies e getSeries
            this.getMovies()
            this.getSeries()
            // this.getImage()
        },
    }
}
</script>

<!-- -------------------------------------------------------- -->

<template>
    <!-- <TheHeader @emitGetMovies="getMovies"/> TheHeader è il figlio, App.vue è il padre -->
    <TheHeader @emitGetMovies="search"/>
    <listMovies/>
</template>

<!-- -------------------------------------------------------- -->

<style lang="scss" scoped>
</style>
