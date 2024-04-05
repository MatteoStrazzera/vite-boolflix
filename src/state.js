import { reactive } from "vue"
import axios from "axios"

export const state = reactive({

    urlGetMovies: "https://api.themoviedb.org/3/search/movie",
    api_key: "b84b0dc233a3a63bb4f4eb7d6c877a78",
    userInput: "",
    movies: [],
    urlGetSeries: "https://api.themoviedb.org/3/search/tv",
    series: [],


    getMovies() {
        axios.get(`${this.urlGetMovies}?api_key=${this.api_key}&query=${this.userInput}`)
            .then(response => {
                // console.log(response.data.results);
                this.movies = response.data.results
                console.log(this.movies);

            })
            .catch(err => {
                console.log(err);
                console.error(err.message);
            })
    },
    getSeries() {
        axios.get(`${this.urlGetSeries}?api_key=${this.api_key}&query=${this.userInput}`)
            .then(response => {
                // console.log(response.data.results);
                this.series = response.data.results
                console.log(this.series);

            })
            .catch(err => {
                console.log(err);
                console.error(err.message);
            })
        this.userInput = ""
    }
})