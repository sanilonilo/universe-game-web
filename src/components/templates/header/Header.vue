<template>
    <header class="flex px-20 bg-slate-50">
        <div class="flex items-center gap-x-5">
            <img src="../../../assets/logo-microsoft.png" alt="" class="max-w-[100px]">
            <div class="w-[2px] h-[25px] bg-black"></div>
            <img src="../../../assets/logo-xbox.png" alt="" class="max-w-[70px]">
            <nav class="hidden md:flex space-x-6">
                <NavItemDropdown label="Game Pass" :options="gamePassOptions" />
                <NavItemDropdown label="Jogos" :options="jogosOption"/>
                <NavItemDropdown label="Dispositivos" :options="devicesOptions"/>
                <NavItemDropdown label="Jogar" />
                <NavItemDropdown label="Loja" :options="storeOptions"/>
                <NavItemDropdown label="Comunidade" :options="communityOptions"/>
                <NavItemDropdown label="Suporte" :options="supportOptions"/>
                <NavItemDropdown label="Mais" :options="maisOptions"/>
            </nav>
        </div>
        <div class="flex px-28 items-center gap-x-5">
            <!-- <a href="#" class="hover:underline text-[13px] text-nowrap">Toda a Microsoft</a> -->
            <button class="hidden md:flex space-x-6">
                <NavItemDropdown label="Toda a Microsoft" />
            </button>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavItemDropdown from '../../dropdown/NavItemDropdown.vue'
import { 
    gamePassOptions,
    jogosOption,
    devicesOptions,
    storeOptions,
    supportOptions,
    maisOptions,
    communityOptions
 } from './domain/domain'

export default defineComponent({
    name: 'Header',
    components: {
        NavItemDropdown
    },
    data() {
        return {
            gamePassOptions, 
            jogosOption, 
            devicesOptions,
            storeOptions,
            supportOptions,
            maisOptions,
            communityOptions
        }
    }
})
</script>