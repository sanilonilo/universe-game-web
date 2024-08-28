<template>
    <a href="#" class="col-span-1 flex items-center flex-col mb-10 min-[1060px]:mb-0 hover:underline decoration-4 decoration-[#054b16]">
            <img :src="image" alt="" class="w-[60px] sm:w-[70px] md:w-[80px]">
            <p class="inline-block text-center text-[0.64rem] md:text-[1rem] font-semibold  text-[#054b16]">{{ label }}</p>
        </a>
</template>
<script lang="ts">
import {IconBarController} from '../../controllers/icon-links/icon-bar-controller'
export default IconBarController
</script>