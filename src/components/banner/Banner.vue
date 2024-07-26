<template>
    <div class="relative w-full h-[75vh]">
        <n-carousel show-arrow :autoplay="isAutoPlay">
            <div class="w-full bg-slate-500 h-[75vh]">
                <div class="w-full h-full">
                    <div class="w-full h-full flex justify-end bg-banner-1 bg-cover bg-no-repeat bg-left md:bg-center md:pr-[15%]">
                        <div class="w-full md:w-auto h-full flex flex-col justify-center items-center md:items-start md:px-[80px] gap-y-6">
                            <a href="#"
                                class="bg-[#ffd800] w-48 flex items-center justify-center gap-x-2 hover:gap-x-4 transition-[1.5s] duration-[400ms]">
                                <span class="font-bold hover:cursor-pointer text-[#000]">EM BREVE NO GAME PASS</span>
                            </a>
                            <span class="text-[40px] text-slate-50 font-bold leading-[50px]">Call of Duty®: <br> Black
                                Ops 6</span>
                            <div class="inline">
                                <a href="#"
                                    class="bg-[#9bf00b] w-48 flex items-center justify-center gap-x-2 py-[6px] hover:gap-x-4 transition-[1.5s] duration-[400ms]">
                                    <span
                                        class="font-bold hover:underline decoration-2 decoration-[#054b16] text-[#054b16]">PRÉ-ENCOMENDA</span>
                                    <FontAwesomeIcon :icon="faAngleRight" class="font-bold" />
                                </a>
                            </div>
                            <div class="inline">
                                <a href="#"
                                    class="flex items-center justify-center gap-x-2 py-[6px] hover:gap-x-4 transition-[1.5s] duration-[400ms]">
                                    <span
                                        class="font-bold hover:underline decoration-2 decoration-[#9bf00b] text-[#9bf00b]">COMEÇE
                                        A JOGAR AGORA MESMO
                                    </span>
                                    <FontAwesomeIcon :icon="faAngleRight" class="text-[#9bf00b] font-bold" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full bg-slate-500 h-[75vh]">
                <div class="w-full h-full">
                    <div class="w-full h-full bg-banner-2 bg-cover bg-no-repeat bg-right md:bg-center">
                        <div class="h-full flex flex-col justify-center items-center md:items-start px-[80px] gap-y-12">
                            <span class="text-4xl text-[#054b16] font-bold text-center md:text-start">Final Fantasy XIV Dawntrail</span>
                            <div class="inline">
                                <a href="#"
                                    class="bg-[#9bf00b] w-48 flex items-center justify-center gap-x-2 py-[6px] hover:gap-x-4 transition-[1.5s] duration-[400ms]">
                                    <span
                                        class="font-bold hover:underline decoration-2 decoration-[#054b16] text-[#054b16]">PRÉ-ENCOMENDA</span>
                                    <FontAwesomeIcon :icon="faAngleRight" class="font-bold" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full bg-slate-500 h-[75vh]">
                <div class="w-full h-full">
                    <div class="w-full h-full bg-banner-3 bg-cover bg-no-repeat bg-center">
                        <div class="h-full flex flex-col justify-center items-center md:items-start px-[80px] gap-y-12">
                            <span class="text-4xl text-slate-50 font-bold">NBA 2k25</span>
                            <div class="inline">
                                <a href="#"
                                    class="bg-[#9bf00b] w-48 flex items-center justify-center gap-x-2 py-[6px] hover:gap-x-4 transition-[1.5s] duration-[400ms]">
                                    <span
                                        class="font-bold hover:underline decoration-2 decoration-[#054b16] text-[#054b16]">PRÉ-ENCOMENDA</span>
                                    <FontAwesomeIcon :icon="faAngleRight" class="font-bold" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <template #arrow="{ prev, next }">
                <button type="button"
                    class="absolute w-[44px] h-[44px] rounded-full text-[20px] top-[45%] left-2 bg-[#ffffff33] z-0 text-slate-200"
                    @click="prev">
                    <div class="w-[44px] h-[44px]  rounded-full flex items-center justify-center">
                        <FontAwesomeIcon :icon="faAngleLeft" />
                    </div>
                </button>

                <button type="button"
                    class="absolute w-[44px] h-[44px] rounded-full text-[20px] top-[45%] right-2 bg-[#ffffff33] z-0 text-slate-200"
                    @click="next">
                    <div class="w-[44px] h-[44px]  rounded-full flex items-center justify-center">
                        <FontAwesomeIcon :icon="faAngleRight" />
                    </div>
                </button>
            </template>
        </n-carousel>
        <div @click="isAutoPlay = !isAutoPlay"
            class="absolute flex justify-center items-center cursor-pointer left-[35vw] sm:left-[40vw] md:left-[42vw] lg:left-[45vw]  bottom-[12px] w-8 h-8 bg-[#0000002b] text-slate-200">
            <FontAwesomeIcon :icon="isAutoPlay ? faPause : faPlay" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleRight, faAngleLeft, faPlay,faPause } from '@fortawesome/free-solid-svg-icons'


export default defineComponent({
    name: "Banner",
    components: {
        FontAwesomeIcon
    },
    data() {
        return {
            faAngleRight,
            faAngleLeft,
            faPlay,
            faPause,
            isAutoPlay: true
        }
    },
    methods: {

    }
})
</script>