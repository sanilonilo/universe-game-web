<template>
  <footer class="bg-gray-50 py-4">
    <div class="container mx-auto px-4 sm:px-1">
      <div class="flex flex-wrap items-center max-w-[calc(1600+10%)] sm:mx-[20px] sm:my-[18px]">
        <div class="flex flex-wrap">
          <span class="pr-3 text-black text-[15px] ">Seguir o Xbox</span>
        </div>
        <div class="flex items-start justify-start text-black text-[18px] sm:text-[20px] gap-x-3 sm:gap-x-4">
          <a href="Email" class="w-[32px] h-[32px] cursor-pointer hover:bg-slate-200 flex items-center justify-center">
            <font-awesome-icon :icon="faEnvelope"/>
          </a>
          <a href="Facebook" class="w-[32px] h-[32px] cursor-pointer hover:bg-slate-200 flex items-center justify-center">
            <font-awesome-icon :icon="faFacebookF"/>
          </a>
          <a href="Twitter" class="w-[32px] h-[32px] cursor-pointer hover:bg-slate-200 flex items-center justify-center">
            <font-awesome-icon :icon="faXTwitter"/>
          </a>
          <a href="Instagram" class="w-[32px] h-[32px] cursor-pointer hover:bg-slate-200 flex items-center justify-center">
            <font-awesome-icon :icon="faInstagram"/>
          </a>
          <a href="Whatsapp" class="w-[32px] h-[32px] cursor-pointer hover:bg-slate-200 flex items-center justify-center">
            <font-awesome-icon :icon="faWhatsapp"/>
          </a>
          <a href="TikTok" class="w-[32px] h-[32px] cursor-pointer hover:bg-slate-200 flex items-center justify-center">
            <font-awesome-icon :icon="faTiktok"/>
          </a>
          <a href="YouTube" class="w-[32px] h-[32px] cursor-pointer hover:bg-slate-200 flex items-center justify-center">
            <font-awesome-icon :icon="faYoutube"/>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
///@ts-ignore
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
///@ts-ignore
import { faXTwitter} from '@fortawesome/free-brands-svg-icons/faXTwitter';
///@ts-ignore

import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
///@ts-ignore

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
///@ts-ignore

import { faTiktok } from '@fortawesome/free-brands-svg-icons/faTiktok';

///@ts-ignore

import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';


export default defineComponent({
    name: 'SocialNetwork',
    components: {
        FontAwesomeIcon
    },
    data() {
        return {
            faEnvelope,
            faFacebookF,
            faXTwitter,
            faInstagram,
            faWhatsapp,
            faTiktok,
            faYoutube
        }
    }
})

</script>