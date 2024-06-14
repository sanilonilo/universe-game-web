<template>
    <header class="flex px-20 bg-slate-50">
        <div class="flex items-center gap-x-5">
            <img src="../../../assets/logo-microsoft.png" alt="" class="max-w-[100px]">
            <div class="w-[2px] h-[25px] bg-black"></div>
            <img src="../../../assets/logo-xbox.png" alt="" class="max-w-[70px]">
            <nav class="hidden md:flex space-x-6">
                <NavItemDropdown label="Game Pass" :options="gamePassOptions" />
                <NavItemDropdown label="Jogos" :options="jogosOption"/>
                <NavItemDropdown label="Dispositivos" :options="dispositivosOptions"/>
                <NavItemDropdown label="Jogar" />
                <NavItemDropdown label="Loja" :options="lojaOptions"/>
                <NavItemDropdown label="Comunidade" />
                <NavItemDropdown label="Suporte" :options="suporteOptions"/>
                <NavItemDropdown label="Mais" :options="maisOptions"/>
            </nav>
        </div>
        <div class="flex px-28 items-center gap-x-5">
            <!-- <a href="#" class="hover:underline text-[13px] text-nowrap">Toda a Microsoft</a> -->
            <nav class="hidden md:flex space-x-6">
                <NavItemDropdown label="Toda a Microsoft" />
            </nav>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavItemDropdown from '../../dropdown/NavItemDropdown.vue'
import { 
    gamePassOptions,
    jogosOption,
    dispositivosOptions,
    lojaOptions,
    suporteOptions,
    maisOptions
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
            dispositivosOptions,
            lojaOptions,
            suporteOptions,
            maisOptions
        }
    }
})
</script>