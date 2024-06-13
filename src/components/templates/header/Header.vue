<template>
    <header class="flex px-20 py-4 bg-slate-50">
        <div class="flex items-center gap-x-5">
            <img src="../../../assets/logo-microsoft.png" alt="" class="max-w-[100px]">
            <div class="w-[2px] h-[25px] bg-black"></div>
            <img src="../../../assets/logo-xbox.png" alt="" class="max-w-[70px]">
            <nav class="hidden md:flex space-x-6">
                <NavItemDropdown label="Game Pass " :options="gamePassOptions" />
                <NavItemDropdown label="Jogos" />
                <NavItemDropdown label="Dispositivos" />
                <NavItemDropdown label="Jogar" />
                <NavItemDropdown label="Loja" />
                <NavItemDropdown label="Comunidade" />
                <NavItemDropdown label="Suporte" />
                <NavItemDropdown label="Mais" />
            </nav>
        </div>
        <div class="flex px-28 items-center gap-x-5">
            <a href="#" class="hover:underline text-[13px] text-nowrap">Toda a Microsoft</a>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavItemDropdown from '../../dropdown/NavItemDropdown.vue'
import {gamePassOptions} from './domain/domain'

export default defineComponent({
    name: 'Header',
    components: {
        NavItemDropdown
    },
    data() {
        return {
            gamePassOptions
        }
    }
})
</script>