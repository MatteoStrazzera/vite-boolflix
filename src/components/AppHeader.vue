<script>
import { state } from "../state"
export default {
    name: "AppHeader",
    data() {
        return {
            state
        }
    },
    mounted() {
        state.getMovies()
    }

}
</script>

<template>
    <div id="site_header">
        <input type="text" placeholder="inserisci nome del film">
        <button>cerca</button>
    </div>
</template>

<style></style>