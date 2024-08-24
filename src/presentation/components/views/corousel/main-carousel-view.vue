<template>
    <div class="relative w-full h-[75vh]">
        <n-carousel show-arrow :autoplay="isAutoPlay">

            <div v-for="item in carouselContent" :key="item.title" class="w-full bg-slate-500 h-[75vh]">
                <div class="w-full h-full">
                    <div  :style="{'background-image': `url(${item.image})`}" class="w-full h-full flex bg-cover bg-no-repeat md:bg-center md:pr-[15%]" :class="{'bg-left': !item.positionStart, 'bg-right': item.positionStart,'justify-end': !item.positionStart}">
                        <div class="w-full md:w-auto h-full flex flex-col justify-center items-center  md:px-[80px] gap-y-6" :class="{'md:items-start': item.positionStart, 'md:items-end': !item.positionStart}">
                            <a v-if="item.accentTitle" href="#"
                                class="bg-[#ffd800] w-48 flex items-center justify-center gap-x-2 hover:gap-x-4 transition-[1.5s] duration-[400ms]">
                                <span class="font-bold hover:cursor-pointer text-[#000]">{{ item.accentTitle }}</span>
                            </a>
                            <span class="text-[40px]  font-bold leading-[50px]" :class="{'text-slate-50': !item.titleColor}" :style="{'color': item.titleColor}" v-html="item.title"></span>
                            <div class="inline">
                                <a href="#"
                                    class="bg-[#9bf00b] w-48 flex items-center justify-center gap-x-2 py-[6px] hover:gap-x-4 transition-[1.5s] duration-[400ms]">
                                    <span
                                        class="font-bold hover:underline decoration-2 decoration-[#054b16] text-[#054b16]">{{ item.subLinkTitle }}</span>
                                    <FontAwesomeIcon :icon="faAngleRight" class="text-[#054b16] font-bold" />
                                </a>
                            </div>
                            <div class="inline">
                                <a :href="item.link"
                                    class="flex items-center justify-center gap-x-2 py-[6px] hover:gap-x-4 transition-[1.5s] duration-[400ms]">
                                    <span
                                        class="font-bold hover:underline decoration-2 decoration-[#9bf00b] text-[#9bf00b]">
                                        {{ item.mainLinkTitle }}
                                    </span>
                                    <FontAwesomeIcon :icon="faAngleRight" class="text-[#9bf00b] font-bold" />
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
import {MainCarouselController} from '../../controllers/corousel/main-carousel-controller'
export default MainCarouselController
</script>