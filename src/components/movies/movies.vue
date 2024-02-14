<script>
import {store} from '../../store'

export default {
    name: "Movies",
    props: [
        'propsItem'
    ],
    data(){
        return{
            store
        }
    }
}
</script>

<!-- -------------------------------------------------------- -->

<template>
    <div class="lista text-light">
        <div class="cardMovie">  
            <div>
                <img :src="'https://image.tmdb.org/t/p/w342/' + propsItem.poster_path" alt="img">
                <div class="testoInHover">
                    <h6 class="bg-danger">{{ (propsItem.original_title) ? propsItem.original_title : propsItem.original_name }}</h6>
                    <h6 class="bg-primary">{{ (propsItem.title) ? propsItem.title : propsItem.name }}</h6>
                    <p class="bg-secondary">{{ (propsItem.overview) ? propsItem.overview : propsItem.overview }}</p>
                    <p class="bg-dark">vote</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .lista {
        display: flex;
        flex-direction: row;
        border: 1px solid lime;
        .cardMovie{
            background-color: rgb(48, 48, 48);
            width: 200px;
            img{
                width: 100%;
            }
        }
    }
</style>