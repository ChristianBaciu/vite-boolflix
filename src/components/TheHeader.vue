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

        <img src="../assets/img/Boolflix.png" width="140" alt="">

        <div class="d-flex">



            <div class="form-floating me-3">
                <input type="text" class="form-control" id="floatingInputGroup1" placeholder="..." v-model="store.searchTitle">
                <label for="floatingInputGroup1">Cerca titolo</label>
            </div>
            
            <button class="btn btn-light" @click="$emit('emitGetMovies')">cerca</button> <!-- @keyup.enter.prevent="$emit('emitGetMovies')" -->

        
        

        </div>

    </header>
</template>

<!-- -------------------------------------------------------- -->

<style lang="scss" scoped>

</style>
