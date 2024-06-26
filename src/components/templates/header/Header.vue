<template>
    <header class="flex py-2 md:py-0 items-center gap-x-5 overflow-x-hidden px-2 md:px-20 bg-slate-50">
        <!-- DIV USADA PARA MOSTRAR NO MOBILE OS ICONES DA ESQUERDA -->
        <div class="flex items-center md:hidden w-1/12 gap-x-2"> 
            <div >
                <button class=" w-[45px] h-[45px] flex items-center justify-center hover:bg-slate-200 hover:border-slate-800 border-[#ffffff00] border-2">
                    <FontAwesomeIcon :icon="faBars" class="text-[18px]"/>
                </button>
            </div>
            <div>
                <button>
                    <FontAwesomeIcon :icon="faMagnifyingGlass" class="rotate-90 text-[16px]"/>
                </button>
            </div>
        </div>

        <!-- ESSA DIV IRA OCUPAR 80% DA TELA SOMENTE NO MOBILE, CASO O TAMANHO SEJA MAIOR OU IGUAL A UM TABLET , ELA OCUPARA O ESPAÇO DA IMAGEM -->
        <div class="w-10/12 flex justify-center items-center md:w-auto md:block">
            <img src="../../../assets/logo-microsoft.png" alt="" class="max-w-[108px]">
        </div>
        <div class="hidden md:block">
            <div class="w-[2px] h-[25px] bg-black"></div>
        </div>
        <div class="hidden md:block">
            <img src="../../../assets/logo-xbox.png" alt="" class="max-w-[70px]">
        </div>

        <!-- NO MOBILE ESSES ITENS DA NAV BAR NAO DEVEM APARECER -->
        <nav class="hidden md:flex ">
            <NavItemDropdown v-if="dimensionX > 850"  label="Game Pass" :options="gamePassOptions" />
            <NavItemDropdown v-if="dimensionX > 925" label="Jogos" :options="gamesOptions"/>
            <NavItemDropdown v-if="dimensionX > 1020" label="Dispositivos" :options="devicesOptions"/>
            <NavItemDropdown v-if="dimensionX > 1220" label="Jogar" />
            <NavItemDropdown  v-if="dimensionX > 1200" label="Loja" :options="storeOptions"/>
            <NavItemDropdown  v-if="dimensionX > 1260"  label="Comunidade" :options="communityOptions"/>
            <NavItemDropdown label="Mais" :options="moreOptions"/>
        </nav>

        <div class="flex w-1/12 md:flex-1 justify-end px-2 items-center gap-x-2 md:gap-x-5">
            <button class="hidden md:flex">
                <NavItemDropdown label="Toda a Microsoft" :options="moreOptions" />
            </button>
            <div class="pl-4 hidden md:block">
                <button>
                    <FontAwesomeIcon :icon="faMagnifyingGlass" class="rotate-90 text-[16px]"/>
                </button>
            </div>
            <div class="pl-4">
                <button>
                    <FontAwesomeIcon :icon="faCartShopping" class="text-[14px]"/>
                </button>
            </div>
            <div class="pl-4">
                Entrar
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass, faCartShopping , faBars} from '@fortawesome/free-solid-svg-icons'
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
            dimensionX: 1280,
            gamePassOptions, 
            gamesOptions, 
            devicesOptions,
            storeOptions,
            moreOptions,
            communityOptions,
            faMagnifyingGlass,
            faCartShopping,
            faBars
        }
    },
    methods:{
        onResize(resize: number): void{
            this.dimensionX = resize
        },
        getCurrentWidthScreen(): number{
            return document.documentElement.clientWidth
        }
    },
    mounted(){
        addEventListener('resize', () => this.onResize(this.getCurrentWidthScreen()))
    },
    unmounted(){
        removeEventListener('resize', () => this.onResize(this.getCurrentWidthScreen()))
    }
})
</script>