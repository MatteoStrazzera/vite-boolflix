<script>
import { state } from '../state';
export default {
    name: "AppMain",
    data() {
        return {
            state,
            languages: ['it', 'en', 'de', 'fr', 'sp', 'us']
        }
    },
    methods: {
        getFlags(lang) {
            if (this.languages.includes(lang)) {
                return true;
            }
            return false;
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
                <div class="language" v-if="getFlags(movie.original_language)">
                    <img width="20" :src="'../public/images/' + movie.original_language + '.png'" alt="">
                </div>
                <div v-else>
                    Language: {{ movie.original_language }}
                </div>
                <div class="rating">{{ movie.vote_average }}</div>
            </li>
        </ul>
    </div>
</template>

<style></style>