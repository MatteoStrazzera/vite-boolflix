import { reactive } from "vue"
import axios from "axios"

export const state = reactive({

    urlGetMovies: "https://api.themoviedb.org/3/search/movie",
    api_key: "b84b0dc233a3a63bb4f4eb7d6c877a78",
    userInput: "Fight club",

    getMovies() {
        axios.get(`${this.urlGetMovies}?api_key=${this.api_key}&query=${this.userInput}`)
            .then(response => {
                console.log(response.data.results);

            })
            .catch(err => {
                console.log(err);
                console.error(err.message);
            })
    }
})