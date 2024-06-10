<script lang="ts">
import Header from "./components/templates/header/Header.vue"
import { defineComponent } from "vue";

export default defineComponent({
    name: 'App',
    components: {
        Header,
    }
})
</script>

<template>
    <n-message-provider>
        <Header/>
    </n-message-provider>
</template>

