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
    <div class="lista">
        <div class="cardMovie">  
            <div>
                <img :src="'https://image.tmdb.org/t/p/w342/' + propsItem.poster_path" alt="img">
                <div class="testoInHover p-1">

                    <h6 class="text-center p-2">{{ (propsItem.original_title) ? propsItem.original_title : propsItem.original_name }}</h6>
                    <p>{{ (propsItem.release_date) ? propsItem.release_date : propsItem.first_air_date }}</p>
                    <!-- <p class="bg-primary">{{ (propsItem.title) ? propsItem.title : propsItem.name }}</p> -->
                    <!-- <p class="bg-dark">vote</p> -->
                    <p>{{ (propsItem.overview) ? propsItem.overview : propsItem.overview }}</p>

                </div>
            </div>
        </div>
    </div>
</template>

<!-- -------------------------------------------------------- -->

<style lang="scss" scoped>

    .lista{
        border: 3px solid rgb(0, 0, 0);

        .cardMovie{
            background-color: rgb(20, 20, 20);
            width: 250px;
            position: relative;

            img{
                width: 100%;
            }
            
            .testoInHover{
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                opacity: 0;
                transform: translateY(-100%);
                background-color: rgba(0, 0, 0, 0.8);
            }

            &:hover .testoInHover{
                opacity: 1;
                transform: translateY(0);
                color: white;
            }

            p{
                font-size: 10px;
            }

        }
    }
</style>