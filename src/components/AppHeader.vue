<script>
import { state } from "../state.js"
export default {
    name: "AppHeader",
    data() {
        return {
            state
        }
    },

}
</script>

<template>
    <div id="site_header">
        <input type="text" placeholder="inserisci nome del film">
        <button>cerca</button>
    </div>
</template>

<style></style>