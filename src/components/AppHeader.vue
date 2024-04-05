<script>
import { state } from "../state"
export default {
    name: "AppHeader",
    data() {
        return {
            state
        }
    },
    methods: {
        searchMovie() {
            console.log('film cercato', this.state.userInput);
            state.getMovies()
        }
    },
    mounted() {
        state.getMovies()
    }

}
</script>

<template>
    <div id="site_header">
        <input type="text" v-model="state.userInput" @keyup.enter="searchMovie()" placeholder="inserisci nome del film">
        <button @click="searchMovie()">cerca</button>
    </div>
</template>

<style></style>