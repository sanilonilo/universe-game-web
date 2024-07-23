<template>
    <div class="w-full p-2">
        <div class="w-full grid grid-cols-2 grid-rows-[repeat(10,minmax(0,auto))] gap-1">
            <div class="col-span-1 row-span-2 ">
                <img src="../../assets/bg-1.jpg" class="w-full h-full">
            </div>
            <div class="col-span-1 row-span-1 flex bg-[#107c10] relative overflow-hidden">
                <section class="w-1/2">
                    <div class="h-full flex flex-col justify-center px-[40px] gap-y-12">
                        <span class="text-[20px]  text-slate-50 font-bold">Descubra seu próximo jogo favorito</span>
                        <p class="text-slate-50">
                            Jogue centenas de jogos por um pequeno preço mensal
                        </p>
                        <div class="inline">
                            <a href="#"
                                class="flex items-center gap-x-2 py-[6px] hover:gap-x-4 transition-[1.5s] duration-[400ms]">
                                <span
                                    class="font-bold hover:text-[#9bf00b] hover:underline decoration-2 decoration-[#9bf00b] text-slate-50">
                                    ACESSE AGORA MESMO
                                </span>
                                <FontAwesomeIcon :icon="faAngleRight"
                                    class="text-slate-50 hover:text-[#9bf00b] font-bold" />
                            </a>
                        </div>
                    </div>
                </section>
                <div class="relative w-1/2 z-0 ">
                    <img src="../../assets/card-1.jpg" alt="" class="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110" >
                </div>
            </div>
            <div class="col-span-1 row-span-2 ">
                <img src="../../assets/bg-3.jpg" alt="" class="w-full h-full">
            </div>
            <div class="col-span-1 row-span-1 flex flex-row-reverse bg-[#107c10]">
                <section class="">
                    <div class="h-full flex flex-col justify-center px-[40px] gap-y-6">
                        <a href="#"
                            class="bg-[#ffd800] w-44 flex items-center justify-center gap-x-2 hover:gap-x-4 transition-[1.5s] duration-[400ms]">
                            <span class="font-bold hover:cursor-pointer text-[#000]">CONSOLE · PC · NUVEM</span>
                        </a>
                        <span class="text-[20px]  text-slate-50 font-bold">Kunitsu-Gami: Path of the Goddess</span>
                        <p class="text-slate-50">
                            Jogue no PC Game Pass ou Ultimate
                        </p>
                        <div class="inline">
                            <a href="#"
                                class="flex items-center gap-x-2 py-[6px] hover:gap-x-4 transition-[1.5s] duration-[400ms]">
                                <span
                                    class="font-bold hover:text-[#9bf00b] hover:underline decoration-2 decoration-[#9bf00b] text-slate-50">
                                    ADQUIRA AGORA
                                </span>
                                <FontAwesomeIcon :icon="faAngleRight"
                                    class="text-slate-50 hover:text-[#9bf00b] font-bold" />
                            </a>
                        </div>
                    </div>
                </section>
                <img src="../../assets/card-2.jpg" alt="" class="w-1/2">
            </div>

            <div class="col-span-1 row-span-1 flex bg-[#107c10]">
                <section class="">
                    <div class="h-full flex flex-col justify-center px-[40px] gap-y-6">
                        <a href="#"
                            class="bg-[#ffd800] w-28 flex items-center justify-center gap-x-2 hover:gap-x-4 transition-[1.5s] duration-[400ms]">
                            <span class="font-bold hover:cursor-pointer text-[#000]">JÁ DISPONÍVEL</span>
                        </a>
                        <span class="text-[20px]  text-slate-50 font-bold">Flintlock: The Siege of Dawn</span>
                        <p class="text-slate-50">
                            Junte-se à última resistência da humanidade com o PC Game Pass ou Ultimate.
                        </p>
                        <div class="inline">
                            <a href="#"
                                class="flex items-center gap-x-2 py-[6px] hover:gap-x-4 transition-[1.5s] duration-[400ms]">
                                <span
                                    class="font-bold hover:text-[#9bf00b] hover:underline decoration-2 decoration-[#9bf00b] text-slate-50">
                                    ADQUIRA AGORA
                                </span>
                                <FontAwesomeIcon :icon="faAngleRight"
                                    class="text-slate-50 hover:text-[#9bf00b] font-bold" />
                            </a>
                        </div>
                    </div>
                </section>
                <img src="../../assets/card-3.jpg" alt="" class="w-1/2">
            </div>
            <div class="col-span-1 row-span-1 flex bg-[#107c10]">
                <section class="">
                    <div class="h-full flex flex-col justify-center px-[40px] gap-y-6">
                        <a href="#"
                            class="bg-[#ffd800] w-[5.5rem] flex items-center justify-center gap-x-2 hover:gap-x-4 transition-[1.5s] duration-[400ms]">
                            <span class="font-bold hover:cursor-pointer text-[#000]">NOVO DLC</span>
                        </a>
                        <span class="text-[20px]  text-slate-50 font-bold">FINAL FANTASY XIV: Dawntrail</span>
                        <p class="text-slate-50">
                            Mares azuis, céu limpo e possibilidades ilimitadas o aguardam.
                        </p>
                        <div class="inline">
                            <a href="#"
                                class="flex items-center gap-x-2 py-[6px] hover:gap-x-4 transition-[1.5s] duration-[400ms]">
                                <span
                                    class="font-bold hover:text-[#9bf00b] hover:underline decoration-2 decoration-[#9bf00b] text-slate-50">
                                    ADQUIRA AGORA
                                </span>
                                <FontAwesomeIcon :icon="faAngleRight"
                                    class="text-slate-50 hover:text-[#9bf00b] font-bold" />
                            </a>
                        </div>
                    </div>
                </section>
                <img src="../../assets/card-4.jpg" alt="" class="w-1/2">
            </div>

            <div class="col-span-2 row-span-2 ">
                <img src="../../assets/bg-5.jpg" alt="" class="w-full h-full">
            </div>

            <div class="col-span-1 row-span-1 flex flex-row-reverse bg-[#107c10]">
                <img src="../../assets/card-6.jpg" alt="" class="w-1/2">
                <section class="">
                    <div class="h-full flex flex-col justify-center px-[55px] gap-y-6">
                        <span class="text-[20px]  text-slate-50 font-bold">THRONE AND LIBERTY</span>
                        <div class="inline">
                            <a href="#"
                                class="flex items-center gap-x-2 py-[6px] hover:gap-x-4 transition-[1.5s] duration-[400ms]">
                                <span
                                    class="font-bold hover:text-[#9bf00b] hover:underline decoration-2 decoration-[#9bf00b] text-slate-50">
                                   PRÉ-ENCOMENDA
                                </span>
                                <FontAwesomeIcon :icon="faAngleRight"
                                    class="text-slate-50 hover:text-[#9bf00b] font-bold" />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
            <div class="col-span-1 row-span-1 flex flex-row-reverse bg-[#107c10]">
                <img src="../../assets/card-7.jpg" alt="" class="w-1/2">
                <section class="">
                    <div class="h-full flex flex-col justify-center px-[40px] gap-y-6">
                        <a href="#"
                            class="bg-[#ffd800] w-28 flex items-center justify-center gap-x-2 hover:gap-x-4 transition-[1.5s] duration-[400ms]">
                            <span class="font-bold hover:cursor-pointer text-[#000]">JÁ DISPONÍVEL</span>
                        </a>
                        <span class="text-[20px]  text-slate-50 font-bold">Dungeons of Hinterberg </span>
                        <p class="text-slate-50">
                            Domine a magia, resolva quebra-cabeças e derrote monstros com o Game Pass.
                        </p>
                        <div class="inline">
                            <a href="#"
                                class="flex items-center gap-x-2 py-[6px] hover:gap-x-4 transition-[1.5s] duration-[400ms]">
                                <span
                                    class="font-bold hover:text-[#9bf00b] hover:underline decoration-2 decoration-[#9bf00b] text-slate-50">
                                    ADQUIRA AGORA
                                </span>
                                <FontAwesomeIcon :icon="faAngleRight"
                                    class="text-slate-50 hover:text-[#9bf00b] font-bold" />
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            <div class="col-span-1 row-span-1 flex flex-row-reverse bg-slate-200">
                <section class="">
                    <div class="h-full flex flex-col justify-center px-[55px] gap-y-6">
                        <span class="text-[20px] font-bold">The Casting of Frank Stone</span>
                        <div class="inline">
                            <a href="#"
                                class="flex items-center gap-x-2 py-[6px] hover:gap-x-4 transition-[1.5s] duration-[400ms]">
                                <span
                                    class="font-bold hover:underline  decoration-2 ">
                                   PRÉ-ENCOMENDA
                                </span>
                                <FontAwesomeIcon :icon="faAngleRight"
                                    class="font-bold" />
                            </a>
                        </div>
                    </div>
                </section>
                <img src="../../assets/card-5.jpg" alt="" class="w-1/2">
            </div>

            <div class="col-span-1 row-span-2 flex  bg-slate-200">
                <img src="../../assets/bg-2.jpg" alt="" class="w-full h-full">
            </div>

            <div class="col-span-1 row-span-2 flex  bg-slate-200">
                <img src="../../assets/bg-4.jpg" alt="" class="w-full h-full">
            </div>
            <div class="col-span-1 row-span-1 flex bg-slate-200">
                <section class="">
                    <div class="h-full flex flex-col justify-center px-[40px] gap-y-6">
                        <a href="#"
                            class="bg-[#ffd800] w-48 flex items-center justify-center gap-x-2 hover:gap-x-4 transition-[1.5s] duration-[400ms]">
                            <span class="font-bold hover:cursor-pointer text-[#000]">JOGUE COM O GAME PASS</span>
                        </a>
                        <span class="text-[20px] font-bold">Jornada para Skyline Valley </span>
                        <p >
                            Explore uma nova região dos Apalaches em Fallout 76.
                        </p>
                        <div class="inline">
                            <a href="#"
                                class="flex items-center gap-x-2 py-[6px] hover:gap-x-4 transition-[1.5s] duration-[400ms]">
                                <span
                                    class="font-bold hover: hover:underline decoration-2">
                                    ADQUIRA AGORA
                                </span>
                                <FontAwesomeIcon :icon="faAngleRight"
                                    class="font-extrabold" />
                            </a>
                        </div>
                    </div>
                </section>
                <img src="../../assets/card-9.jpg" alt="" class="w-1/2">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default defineComponent({
    name: 'GridContent',
    components: {
        FontAwesomeIcon
    },
    data(){
        return {
            faAngleRight
        }
    }
})
</script>