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
    },
    methods:{
        changeFlags(language){

            switch(language){
                case 'en':
                    return 'us'

                default:
                    return 'language'   
            }
        }, 
        
    },
}
</script>

<!-- -------------------------------------------------------- -->

<template>
    <div class="lista">
        <div class="cardMovie">  
            <div>
                <img class="imgCopertina" :src="'https://image.tmdb.org/t/p/w342/' + propsItem.poster_path" alt="img">
                <div class="testoInHover p-1">

                    <h6 class="text-center p-2">{{ (propsItem.original_title) ? propsItem.original_title : propsItem.original_name }}</h6>
                    <p>{{ (propsItem.release_date) ? propsItem.release_date : propsItem.first_air_date }}</p>
                    <p>{{ (propsItem.overview) ? propsItem.overview : propsItem.overview }}</p>

                    <span class="bg-primary ms-1" v-for="(element, index) in 5">
                    
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    
                    </span>

                    <p>{{ (propsItem.vote_average) ? (propsItem.vote_average / 2) : (propsItem.vote_average / 2) }}</p>
                    
                    
                    <figure class="flag">
                        <img :src="`https://flagsapi.com/${ changeFlags(propsItem.original_language).toUpperCase() }/flat/24.png`" alt="">
                    </figure>







                    <!-- <div>
                        <span>
                            stella piena 
                            <i class="fa-solid fa-star"></i>
                        </span>

                        <span>
                            stella vuota
                            <i class="fa-regular fa-star"></i>

                        </span>
                    </div> -->

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

            .imgCopertina{
                width: 100%;
            }
            
            .testoInHover{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
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