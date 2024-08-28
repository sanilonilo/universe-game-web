<template>
    <div :class="[{
                'col-span-2 lg:col-span-1  lg:row-span-2': item.cols == 1 && item.rows == 2,
                'col-span-2 lg:col-span-1 lg:row-span-1 flex flex-col-reverse  overflow-hidden': item.cols == 1 && item.rows == 1,
                'lg:flex-row': item.cols == 1 && item.rows == 1 && !item.reverse,
                'lg:flex-row-reverse': item.cols == 1 && item.rows == 1 && item.reverse,
                'col-span-2 row-span-2': item.cols == 2 && item.rows == 2,
            }]"
            :style="{'background-color': `${item.bgColor}`}"
            >
                <img v-if="item.cols == 1 && item.rows == 2" :src="item.image" class="w-full lg:h-full">
                <img v-if="item.cols == 2 && item.rows == 2" :src="item.image" class="hidden w-full h-full lg:block">
                <div  v-if="item.cols == 2 && item.rows == 2" class="w-full h-[40vh] sm:h-[50vh] md:h-[60vh]  bg-cover bg-no-repeat lg:hidden" :style="{'background-image': `url(${item.image})`}"></div>
                <div v-if="item.cols == 2 && item.rows == 2" class="w-full min-h-10 p-10 bg-slate-800 text-center lg:hidden">
                    <span class="text-slate-50 text-2xl font-semibold ">{{item.card_title}}</span>
                </div>
                <section v-if="item.cols == 1 && item.rows == 1" class="w-full lg:w-1/2">
                    <div class="w-full h-full flex flex-col justify-center p-[40px] md:px-[20px] gap-y-5 md:gap-y-3 lg:gap-y-8" :class="[item.textColor || 'text-slate-50']">
                        <span class="text-[1.4rem] lg:text-[1.2rem]  font-bold">{{ item.card_title }}</span>
                        <p class="">
                            {{ item.card_description }}
                        </p>
                        <div class="inline hover:text-[#9bf00b]">
                            <a href="#"
                                class="flex items-center gap-x-2 py-[6px] hover:gap-x-4 transition-[1.5s] duration-[400ms]">
                                <span
                                    class="font-bold hover:underline decoration-2 decoration-[#9bf00b] ">
                                    {{ item.action_title }}
                                </span>
                                <FontAwesomeIcon :icon="faAngleRight"
                                    class="  font-bold" />
                            </a>
                        </div>
                    </div>
                </section>
                <div v-if="item.cols == 1 && item.rows == 1" class="w-full lg:w-1/2 z-0 ">
                    <div :class="`${item.bgClass}`" class=" bg-cover  lg:bg-center bg-no-repeat zoom-effect" :style="{'background-image': `url(${item.image})`}">
                        <img :src="item.image" alt="" class="opacity-0 w-full h-[30vh] md:h-[80vh] lg:h-full ">
                    </div>
                </div>
            </div>
</template>
<script lang="ts">
import {ItemCardGridController} from '../../controllers/cards/item-card-grid-controller'
export default ItemCardGridController
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