<template>
    <header class="flex px-20 py-4 bg-slate-50">
        <div class="flex items-center gap-x-5">
            <img src="../../../assets/logo-microsoft.png" alt="" class="max-w-[106px]">
            <div class="w-[2px] h-[25px] bg-black"></div>
            <img src="../../../assets/logo-xbox.png" alt="" class="max-w-[70px]">
            <nav class="hidden md:flex space-x-6">
                <NavItemDropdown label="Game Pass " :options="gamePassOptions"/>
                <NavItemDropdown label="Jogos"/>
                <NavItemDropdown label="Dispositivos"/>
                <NavItemDropdown label="Jogar"/>
                <NavItemDropdown label="Loja"/>
                <NavItemDropdown label="Comunidade"/>
                <NavItemDropdown label="Suporte"/>
                <NavItemDropdown label="Mais"/>
            </nav>
        </div>
        <div class="flex px-28 items-center gap-x-5">
            <a href="#" class="hover:underline text-[13px]">Toda a Microsoft</a>
        </div>
    </header>
</template>

<script lang="ts">
import {  defineComponent, h } from 'vue';
import NavItemDropdown from '../../dropdown/NavItemDropdown.vue'
import { DropdownDividerOption, DropdownGroupOption, DropdownOption, DropdownRenderOption } from 'naive-ui';

export default defineComponent({
    name: 'Header',
    components: {
        NavItemDropdown
    },
    data(){
        return {
            gamePassOptions: [
                {
                    label: 'Assine o game pass'
                },
                {
                    label: 'Assine o game pass',
                    key:'1',
                    children:[
                        {label: 'Item teste', }
                    ]
                },
                {
                    label: 'Assine o game pass'
                }
            ] as (DropdownOption | DropdownGroupOption | DropdownDividerOption | DropdownRenderOption)[]
        }
    }
})
</script>