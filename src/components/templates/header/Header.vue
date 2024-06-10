<template>
    <header class="flex px-20 py-4 bg-slate-50">
        <div class="flex items-center gap-x-5">
            <img src="../../../assets/logo-microsoft.png" alt="" class="max-w-[106px]">
            <div class="w-[2px] h-[25px] bg-black"></div>
            <img src="../../../assets/logo-xbox.png" alt="" class="max-w-[70px]">
            <nav class="hidden md:flex space-x-6">
                <NavItemDropdown/>
            </nav>
        </div>
        <div class="flex px-28 items-center gap-x-5">
            <a href="#" class="hover:underline text-[13px]">Toda a Microsoft</a>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavItemDropdown from '../../dropdown/NavItemDropdown.vue'

export default defineComponent({
    name: 'Header',
    components: {
        NavItemDropdown
    }
})
</script>