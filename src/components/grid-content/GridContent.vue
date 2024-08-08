<template>
    <div class="w-full p-2">
        <div class="w-full grid grid-cols-2 md:grid-rows-[repeat(10,minmax(0,auto))] gap-1">
            
            <div 
            v-for="item in gridData" :key="item.img" 
            :class="[{
                'col-span-2 lg:col-span-1  lg:row-span-2': item.cols == 1 && item.rows == 2,
                'col-span-2 lg:col-span-1 lg:row-span-1 flex flex-col-reverse  overflow-hidden': item.cols == 1 && item.rows == 1,
                'lg:flex-row': item.cols == 1 && item.rows == 1 && !item.reverse,
                'lg:flex-row-reverse': item.cols == 1 && item.rows == 1 && item.reverse,
                'col-span-2 row-span-2': item.cols == 2 && item.rows == 2,
            },item.bgColor]"

            
            >
                <img v-if="item.cols == 1 && item.rows == 2" :src="'/src/assets/' + item.img" class="w-full lg:h-full">
                <img v-if="item.cols == 2 && item.rows == 2" :src="'/src/assets/' + item.img" class="hidden w-full h-full lg:block">
                <div  v-if="item.cols == 2 && item.rows == 2" class="w-full h-[40vh] sm:h-[50vh] md:h-[60vh]  bg-cover bg-no-repeat  bg-card-10 lg:hidden"></div>
                <div v-if="item.cols == 2 && item.rows == 2" class="w-full min-h-10 p-10 bg-slate-800 text-center lg:hidden">
                    <span class="text-slate-50 text-2xl font-semibold ">Assassin's Creed</span>
                </div>
                <section v-if="item.cols == 1 && item.rows == 1" class="w-full lg:w-1/2">
                    <div class="w-full h-full flex flex-col justify-center p-[40px] md:px-[20px] gap-y-5 md:gap-y-3 lg:gap-y-8" :class="[item.textColor || 'text-slate-50']">
                        <span class="text-[1.4rem] lg:text-[1.2rem]  font-bold">Descubra seu próximo jogo favorito</span>
                        <p class="">
                            Jogue centenas de jogos por um pequeno preço mensal
                        </p>
                        <div class="inline hover:text-[#9bf00b]">
                            <a href="#"
                                class="flex items-center gap-x-2 py-[6px] hover:gap-x-4 transition-[1.5s] duration-[400ms]">
                                <span
                                    class="font-bold hover:underline decoration-2 decoration-[#9bf00b] ">
                                    ACESSE AGORA MESMO
                                </span>
                                <FontAwesomeIcon :icon="faAngleRight"
                                    class="  font-bold" />
                            </a>
                        </div>
                    </div>
                </section>
                <div v-if="item.cols == 1 && item.rows == 1" class="w-full lg:w-1/2 z-0 ">
                    <div :class="`${item.bgClass}`" class=" bg-cover  lg:bg-center bg-no-repeat zoom-effect">
                        <img :src="'/src/assets/'+ item.img" alt="" class="opacity-0 w-full h-[30vh] md:h-[80vh] lg:h-full ">
                    </div>
                </div>
            </div>

            <!-- <div class="col-span-2 lg:col-span-1 lg:row-span-1 flex flex-col-reverse lg:flex-row bg-[#107c10] overflow-hidden">
                <section class="w-full lg:w-1/2">
                    <div class="w-full h-full flex flex-col justify-center p-[40px] gap-y-5 lg:gap-y-12">
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
                <div class="w-full lg:w-1/2 z-0 ">
                    <div class="bg-card-2 bg-cover lg:bg-center bg-no-repeat zoom-effect">
                        <img src="/src/assets/card-2.jpg" alt="" class="opacity-0 w-full h-full ">
                    </div>
                </div>
            </div> -->


        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default defineComponent({
    name: 'GridContent',
    components: {
        FontAwesomeIcon
    },
    data() {
        return {
            faAngleRight,
            gridData: [
                {
                    cols: 1,
                    rows: 2,
                    img: 'bg-1.jpg'
                },
                {
                    cols: 1,
                    rows: 1,
                    reverse: false,
                    bgClass: 'bg-card-1',
                    img: 'card-1.jpg',
                    bgColor: 'bg-[#107c10]'
                },
                {
                    cols: 1,
                    rows: 2,
                    img: 'bg-2.jpg'
                },
                {
                    cols: 1,
                    rows: 1,
                    reverse: true,
                    bgClass: 'bg-card-2',
                    img: 'card-2.jpg',
                    bgColor: 'bg-[#107c10]'
                },
                {
                    cols: 1,
                    rows: 1,
                    reverse: false,
                    bgClass: 'bg-card-3',
                    img: 'card-3.jpg',
                    bgColor: 'bg-[#107c10]'
                },
                {
                    cols: 1,
                    rows: 1,
                    reverse: false,
                    bgClass: 'bg-card-5',
                    img: 'card-5.jpg',
                    bgColor: 'bg-[#107c10]'
                },
                {
                    cols: 2,
                    rows: 2,
                    img: 'bg-5.jpg'
                },
                {
                    cols: 1,
                    rows: 1,
                    reverse: false,
                    bgClass: 'bg-card-6',
                    img: 'card-6.jpg',
                    bgColor: 'bg-[#107c10]'
                },
                {
                    cols: 1,
                    rows: 1,
                    reverse: false,
                    bgClass: 'bg-card-7',
                    img: 'card-7.jpg',
                    bgColor: 'bg-[#107c10]'
                },
                {
                    cols: 1,
                    rows: 1,
                    reverse: true,
                    textColor:'text-slate-700',
                    bgClass: 'bg-card-8',
                    img: 'card-8.jpg',
                    bgColor: 'bg-slate-50'
                },
                {
                    cols: 1,
                    rows: 2,
                    img: 'bg-3.jpg'
                },
                {
                    cols: 1,
                    rows: 2,
                    img: 'bg-4.jpg'
                },
                {
                    cols: 1,
                    rows: 1,
                    reverse: false,
                    textColor:'text-slate-700',
                    bgClass: 'bg-card-9',
                    img: 'card-9.jpg',
                    bgColor: 'bg-slate-50'
                }
            ]
        }
    }
})
</script>

<style scoped>
@keyframes card-animation {
    10% {
        background-size: 101% 101%;
    }

    20% {
        background-size: 102% 102%;
    }

    30% {
        background-size: 103% 103%;
    }

    40% {
        background-size: 104% 104%;
    }

    50% {
        background-size: 105% 105%;
    }

    60% {
        background-size: 106% 106%;
    }

    70% {
        background-size: 107% 107%;
    }

    80% {
        background-size: 108% 108%;
    }

    90% {
        background-size: 109% 109%;
    }

    100% {
        background-size: 110% 110%;
    }
}

@keyframes contract {
    0% {
        background-size: 110% 110%;
    }

    10% {
        background-size: 109% 109%;
    }

    20% {
        background-size: 108% 108%;
    }

    30% {
        background-size: 107% 107%;
    }

    40% {
        background-size: 106% 106%;
    }

    50% {
        background-size: 105% 105%;
    }

    60% {
        background-size: 104% 104%;
    }

    70% {
        background-size: 103% 103%;
    }

    80% {
        background-size: 102% 102%;
    }

    90% {
        background-size: 101% 101%;
    }

    100% {
        background-size: cover;
    }

    /* Ou o tamanho inicial desejado */
}

.zoom-effect {}

.zoom-effect:hover {}

.zoom-effect:not(:hover) {}

@media screen and (min-width: 1024px) {
    .zoom-effect {
        background-size: cover;
    }

    .zoom-effect:hover {
        -webkit-animation: card-animation 150ms linear forwards;
        animation: card-animation 150ms linear forwards;
    }

    .zoom-effect:not(:hover) {
        -webkit-animation: contract 150ms linear forwards;
        animation: contract 150ms linear forwards;
    }
}
</style>