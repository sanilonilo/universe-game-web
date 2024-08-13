<template>
    <div>
        <HeaderView/>
        <BannerView/>
        <div class="w-full grid gap-x-[50px] grid-cols-3 min-[1060px]:grid-cols-8 justify-center px-[30px] min-[1060px]:px-[60px] py-[30px]">
            <div class="col-span-3 min-[1060px]:col-span-1"></div>
            <IconBarView v-for="icon in iconsBarStore" :key="icon.label" :imageUrl="icon.imageUrl" :label="icon.label" :link="icon.link"/>
            <div class="col-span-3 min-[1060px]:col-span-1"></div>
        </div>
        <GridContent/>
        <SocialNetwork/>
        <FooterComponent/>
    </div>
</template>

<script lang="ts">
import {HomeController} from '../controllers/home-controller';
export default HomeController
</script>