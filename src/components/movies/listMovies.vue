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
<!-- v-for="(element, index) in ArrayMovies" :key="index" :propsElement="element"  -->
    <!-- <div class="ciao d-flex">
        <movies v-for="(element, index) in store.ArrayMovies" :propsElement="element" :key="index"/>
    </div> -->
 
</template>

<!-- -------------------------------------------------------- -->

<style lang="scss" scoped>
    // .ciao{
    //     overflow-x: auto;
    //     scrollbar-color: red orange;
    //     scrollbar-width: thin;
    // }
</style>
