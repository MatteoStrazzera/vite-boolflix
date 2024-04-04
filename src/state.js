import { reactive } from "vue";
import axios from "axios";

export const state = reactive({

    urlGetMovies: "https://api.themoviedb.org/3/search/movie",
    api_key: "b84b0dc233a3a63bb4f4eb7d6c877a78",
    userInput: "",

    getMovies() {
        axios.get()
            .then()
    }
})