import {reactive} from 'vue'

export const store = reactive({
    searchTitle: '',

    // la mia apikey
    apiKey: '255b2505b0081841872d9c58b9c22e1b',
    
    // per Film
    endPointMovies: 'https://api.themoviedb.org/3/search/movie',
    moviesArray: [],

    // per Serie TV
    endPointSeries: 'https://api.themoviedb.org/3/search/tv',
    seriesArray: [],

    // esempio
    // 'https://api.themoviedb.org/3/search/movie   ?api_key=   e99307154c6dfb0b4750f6603256716d   &query=   ritorno+al+futuro',
})