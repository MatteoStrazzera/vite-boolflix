<script>
import { state } from '../state';
export default {
    name: "AppMain",
    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <div id="site_main">
        <ul>
            <li v-for="movie in state.movies">
                <div class="title">{{ movie.title }}</div>
                <div class="original_title">{{ movie.original_title }}</div>
                <div class="language">{{ movie.original_language }}</div>
                <div class="rating">{{ movie.vote_average }}</div>
            </li>
        </ul>
    </div>
</template>

<style></style>