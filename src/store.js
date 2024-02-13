import {reactive} from 'vue'

export const store = reactive({
    // MovieApiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=ritorno+al+futuro',

    MovieApiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=255b2505b0081841872d9c58b9c22e1b&query=movies',
    ArrayMovies: [],
})