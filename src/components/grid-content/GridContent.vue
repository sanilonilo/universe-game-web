<template>
    <div class="w-full p-2">
        <div class="w-full grid grid-cols-2 grid-rows-[repeat(10,minmax(0,auto))] gap-1">
            <div class="col-span-1 row-span-2 ">
                <img src="../../assets/bg-1.jpg" class="w-full h-full">
            </div>
            <div class="col-span-1 row-span-1 flex flex-row-reverse bg-green-500">
                <img src="../../assets/card-1.jpg" alt="" class="w-1/2">
            </div>
            <div class="col-span-1 row-span-2 ">
                <img src="../../assets/bg-3.jpg" alt="" class="w-full h-full">
            </div>
            <div class="col-span-1 row-span-1 flex bg-green-500">
                <img src="../../assets/card-2.jpg" alt="" class="w-1/2">
            </div>

            <div class="col-span-1 row-span-1 flex flex-row-reverse bg-green-500">
                <img src="../../assets/card-3.jpg" alt="" class="w-1/2">
            </div>
            <div class="col-span-1 row-span-1 flex flex-row-reverse bg-green-500">
                <img src="../../assets/card-4.jpg" alt="" class="w-1/2">
            </div>

            <div class="col-span-2 row-span-2 ">
                <img src="../../assets/bg-5.jpg" alt="" class="w-full h-full">
            </div>

            <div class="col-span-1 row-span-1 flex flex-row-reverse bg-green-500">
                <img src="../../assets/card-6.jpg" alt="" class="w-1/2">
            </div>
            <div class="col-span-1 row-span-1 flex flex-row-reverse bg-green-500">
                <img src="../../assets/card-7.jpg" alt="" class="w-1/2">
            </div>

            <div class="col-span-1 row-span-1 flex  bg-slate-200">
                <img src="../../assets/card-5.jpg" alt="" class="w-1/2">
            </div>

            <div class="col-span-1 row-span-2 flex  bg-slate-200">
                <img src="../../assets/bg-2.jpg" alt="" class="w-full h-full">
            </div>

            <div class="col-span-1 row-span-2 flex  bg-slate-200">
                <img src="../../assets/bg-4.jpg" alt="" class="w-full h-full">
            </div>
            <div class="col-span-1 row-span-1 flex flex-row-reverse bg-slate-200">
                <img src="../../assets/card-9.jpg" alt="" class="w-1/2">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: 'GridContent',
    data(){
        return {

        }
    }
})
</script>