<template>
    <div>
        <HeaderView/>
        <BannerView/>
        <div class="w-full grid gap-x-[50px] grid-cols-3 min-[1060px]:grid-cols-8 justify-center px-[30px] min-[1060px]:px-[60px] py-[30px]">
            <div class="col-span-3 min-[1060px]:col-span-1"></div>
            <IconBarView v-for="icon in iconsBarStore" :key="icon.label" :image="icon.image" :label="icon.label" :link="icon.link"/>
            <div class="col-span-3 min-[1060px]:col-span-1"></div>
        </div>
        <div class="w-full p-2">
            <div class="w-full grid grid-cols-2 md:grid-rows-[repeat(10,minmax(0,auto))] gap-1">
                <ItemCardGridView v-for="item in gridDataStore" :key="item.img" :item="item"/>
            </div>
        </div>
        <SocialNetworkView/>
        <FooterView/>
    </div>
</template>

<script lang="ts">
import {HomeController} from '../controllers/home-controller';
export default HomeController
</script>