<script>
import CompHeader from './components/CompHeader.vue'
import CompFilm from './components/CompFilm.vue'

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
    methods:{
        getMovies(){
            axios.get(store.MovieApiUrl).then(response =>{
                console.log()
            })
        }
    },
    mounted(){
        this.getMovies
    }
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
