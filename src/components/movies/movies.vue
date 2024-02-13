<script>
import {store} from '../../store'

export default {
    name: "movies",
    props: [
        'propsElement'
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
    <header class="scroll text-light">
             <div class="movie">  
                <div>
                    <h6>{{propsElement.title}}</h6>
                    <h6>{{propsElement.original_title}}</h6>
                    <p>Overview</p>
                    <p>{{propsElement.vote_average}}</p>
                </div>
            </div>
    </header>
</template>

<style lang="scss" scoped>
    .scroll {
        display: flex;
        flex-direction: row;
        border: 1px solid lime;
        .movie{
            width: 200px;
            background-color: black;
        }
    }

</style>