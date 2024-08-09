<template>
    <header class="flex py-2 md:py-0 items-center gap-x-5 overflow-x-hidden px-2 md:px-20 bg-slate-50">
        <div class="flex items-center md:hidden w-1/12 gap-x-2">
            <div>
                <div v-if="!isShowMenuMobile">
                    <button @click="toggleMenuMobile" v-if="!isShowInputSearch"
                        class=" w-[45px] h-[45px] flex items-center justify-center hover:bg-slate-200 hover:border-slate-800 border-[#ffffff00] border-2">
                        <FontAwesomeIcon :icon="faBars" class="text-[18px]" />
                    </button>
                </div>
                <button @click="toggleMenuMobile" v-if="isShowMenuMobile"
                    class="w-[45px] h-[45px] flex items-center justify-center hover:bg-slate-200 hover:border-slate-800 border-[#ffffff00] border-2">
                    <FontAwesomeIcon :icon="faXmark" class="text-[22px]" />
                </button>
                <div v-if="isShowMenuMobile" class="block flex-col absolute left-0 w-[100%] z-[9999999]">
                    <n-collapse v-for="item in moreOptions2" accordion arrow-placement="right">
                        <n-collapse-item v-if="(item.children as []).length > 0" :title="item.label"  class="p-3 border-t border-b border-slate-200 bg-slate-50 hover:border-slate-800 hover:border-dashed cursor-pointer" name="1">
                            <n-collapse v-for="item_level_2 in item.children" accordion arrow-placement="right" >
                                <n-collapse-item v-if="(item_level_2?.children as [])?.length > 0" :title="item_level_2.label"  class="p-3 border-t border-b border-slate-200" name="1">
                                    <n-collapse v-for="item_level_3 in item_level_2.children" accordion arrow-placement="right" >
                                        <div class="border-t border-slate-200 p-3">{{ item_level_3.label }}</div>
                                    </n-collapse>
                                </n-collapse-item>
                                <div v-if="!((item_level_2?.children as [])?.length > 0)" class="border-t border-slate-200 p-3 bg-slate-50">{{ item_level_2.label }}</div>
                            </n-collapse>
                        </n-collapse-item>
                        <div v-if="!((item.children as []).length > 0)" class="border-t border-slate-200 p-3 bg-slate-50">{{ item.label }}</div>
                    </n-collapse>
                </div>
                <button v-if="isShowInputSearch" @click="hideInputSearch"
                    class=" w-[45px] h-[45px] flex items-center justify-center hover:bg-slate-200 hover:border-slate-800 border-[#ffffff00] border-2">
                    <FontAwesomeIcon :icon="faArrowLeft" class="text-[18px]" />
                </button>
            </div>
            <div v-if="!isShowInputSearch">
                <button @click="showInputSearch">
                    <FontAwesomeIcon :icon="faMagnifyingGlass" class="rotate-90 text-[16px]" />
                </button>
            </div>
        </div>

        <div v-if="isShowInputSearch" class="flex md:hidden w-full gap-x-2">
            <div class="relative w-full ">
                <n-input class="pl-6 border-black border-[2px] hover:border-[#0067b8]" type="text"
                    placeholder="Medium Input" />
                <div class="absolute top-2 left-3">
                    <button>
                        <FontAwesomeIcon :icon="faMagnifyingGlass" class="rotate-90 text-[16px]" />
                    </button>
                </div>
            </div>
        </div>

        <div v-if="!isShowInputSearch" class="w-10/12 flex justify-center items-center md:w-auto md:block">
            <img src="../../../../assets/logo-microsoft.png" alt="" class="max-w-[108px]">
        </div>
        <div v-if="!isShowInputSearch" class="hidden md:block">
            <div class="w-[2px] h-[25px] bg-black"></div>
        </div>
        <div v-if="!isShowInputSearch" class="hidden md:block">
            <img src="../../../../assets/logo-xbox.png" alt="" class="max-w-[70px]">
        </div>

        <div v-if="isShowInputSearch" class="hidden md:flex w-full py-2 gap-x-2">
            <div class="relative w-full ">
                <n-input class=" border-black border-[2px] hover:border-[#0067b8]" type="text"
                    placeholder="Medium Input" />
                <div class="absolute top-2 right-3">
                    <button>
                        <FontAwesomeIcon :icon="faMagnifyingGlass" class="rotate-90 text-[16px]" />
                    </button>
                </div>
            </div>
            <button @click="hideInputSearch" class="py-1 px-3 border-slate-800 border-[1px] ">
                Cancelar
            </button>
        </div>

        <nav v-if="!isShowInputSearch" class="hidden md:flex ">
            <NavItemDropdown v-if="dimensionX > 850" label="Game Pass" :options="gamePassOptions" />
            <NavItemDropdown v-if="dimensionX > 925" label="Jogos" :options="gamesOptions" />
            <NavItemDropdown v-if="dimensionX > 1020" label="Dispositivos" :options="devicesOptions" />
            <NavItemDropdown v-if="dimensionX > 1220" label="Jogar" />
            <NavItemDropdown v-if="dimensionX > 1200" label="Loja" :options="storeOptions" />
            <NavItemDropdown v-if="dimensionX > 1260" label="Comunidade" :options="communityOptions" />
            <NavItemDropdown label="Mais" :options="moreOptions" />
        </nav>

        <div v-if="!isShowInputSearch" class="flex w-1/12 md:flex-1 justify-end px-2 items-center gap-x-2 md:gap-x-5">
            <button class="hidden md:flex">
                <NavItemDropdown label="Toda a Microsoft" :options="moreOptions" />
            </button>
            <div class="pl-4 hidden md:block">
                <button @click="showInputSearch">
                    <FontAwesomeIcon :icon="faMagnifyingGlass" class="rotate-90 text-[16px]" />
                </button>
            </div>
            <div class="pl-4">
                <button>
                    <FontAwesomeIcon :icon="faCartShopping" class="text-[14px]" />
                </button>
            </div>
            <div class="pl-4">
                Entrar
            </div>
        </div>
    </header>
    <SubHeaderCollapse v-show="!isShowMenuMobile" class="block md:hidden"></SubHeaderCollapse>
</template>

<script lang="ts">
import {HeaderController} from '../../controllers/layouts/header-controller'
export default HeaderController
</script>