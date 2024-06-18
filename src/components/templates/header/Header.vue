<template>
    <header class="flex overflow-x-hidden px-20 bg-slate-50">
        <div class="flex items-center gap-x-5">
            <img src="../../../assets/logo-microsoft.png" alt="" class="max-w-[108px]">
            <div class="w-[2px] h-[25px] bg-black"></div>
            <img src="../../../assets/logo-xbox.png" alt="" class="max-w-[70px]">
            <nav class="hidden md:flex ">
                <NavItemDropdown label="Game Pass" :options="gamePassOptions" />
                <NavItemDropdown label="Jogos" :options="gamesOptions"/>
                <NavItemDropdown label="Dispositivos" :options="devicesOptions"/>
                <NavItemDropdown label="Jogar" />
                <NavItemDropdown label="Loja" :options="storeOptions"/>
                <NavItemDropdown label="Comunidade" :options="communityOptions"/>
                <NavItemDropdown label="Mais" :options="moreOptions"/>
            </nav>
        </div>
        <div class="flex px-2 items-center gap-x-5 ml-16">
            <!-- <a href="#" class="hover:underline text-[13px] text-nowrap">Toda a Microsoft</a> -->
            <button class="hidden md:flex">
                <NavItemDropdown label="Toda a Microsoft" :options="moreOptions" />
            </button>
            <div class="pl-4">
                <button>
                    <FontAwesomeIcon :icon="faMagnifyingGlass" class="rotate-90 text-[16px]"/>
                </button>
            </div>
            <div class="pl-4">
                <button>
                    <FontAwesomeIcon :icon="faCartShopping" class="text-[14px]"/>
                </button>
            </div>
            <!-- class="text-sm md:hidden lg:text-2xl xl:text-4xl" -->
            <div class="pl-4">
                Entrar
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import NavItemDropdown from '../../dropdown/NavItemDropdown.vue'
import { 
    gamePassOptions,
    gamesOptions,
    devicesOptions,
    storeOptions,
    moreOptions,
    communityOptions
 } from './domain/domain'

export default defineComponent({
    name: 'Header',
    components: {
        NavItemDropdown,
        FontAwesomeIcon,
    },
    data() {
        return {
            gamePassOptions, 
            gamesOptions, 
            devicesOptions,
            storeOptions,
            moreOptions,
            communityOptions,
            faMagnifyingGlass,
            faCartShopping
        }
    }
})
</script>