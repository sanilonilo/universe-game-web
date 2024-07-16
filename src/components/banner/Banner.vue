<template>
    <n-carousel show-arrow autoplay>
        <div class="w-full bg-slate-500 h-[75vh]">
            <div class="w-full h-full">
                <div class="w-full h-full bg-banner-1 bg-cover bg-no-repeat bg-center">
                    <div class="h-full flex flex-col justify-center px-[80px] gap-y-12">
                        <span class="text-4xl text-slate-50 font-bold">NBA 2k25</span>
                       <div class="inline">
                            <a href="#" class="bg-[#9bf00b] px-7 py-[6px] hover:space-x-2">
                                <span class="font-bold hover:underline decoration-2 decoration-[#054b16] text-[#054b16]">PRÉ-ENCOMENDA</span>
                                <span> > </span>
                            </a>
                       </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- <template #arrow="{ prev, next }">
            <img 
        class="w-full h-[900px]" 
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
        >
        <div class="custom-arrow">
            <button type="button" class="custom-arrow--left" @click="prev">
            <n-icon><ArrowBack /></n-icon>
            </button>
            <button type="button" class="custom-arrow--right" @click="next">
            <n-icon><ArrowForward /></n-icon>
            </button>
        </div>
        </template> -->
        
    </n-carousel>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name:"Banner",
    data(){
        return {

        }
    },
    methods:{

    }
})
</script>