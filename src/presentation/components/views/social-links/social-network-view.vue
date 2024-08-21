<template>
    <footer class="bg-gray-50 py-4">
        <div class="container mx-auto px-4 sm:px-1">
            <div class="flex flex-wrap items-center max-w-[calc(1600+10%)] sm:mx-[20px] sm:my-[18px]">
                <div class="flex flex-wrap">
                    <span class="pr-3 text-black text-[15px] ">Seguir o Xbox</span>
                </div>
                <div class="flex items-start justify-start text-black text-[18px] sm:text-[20px] gap-x-3 sm:gap-x-4">
                    <a v-for="item in socialNetworkStore" :key="item.link" :href="item.link"
                        class="w-[32px] h-[32px] cursor-pointer hover:bg-slate-200 flex items-center justify-center">
                        <font-awesome-icon :icon="item.icon" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import {SocialNetworkController} from '../../controllers/social-links/social-network-controller'
export default SocialNetworkController
</script>