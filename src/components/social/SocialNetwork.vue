<template>
  <footer class="bg-gray-50 py-6">
    <div class="relative container mx-auto px-8">
      <div class="flex items-center space-x-2">
        <span class="text-black text-[15px] pr-[12px]">Seguir o Xbox</span>
        <div class="flex items-start justify-start text-black text-[20px] pr-[12px] space-x-4">
          <a href="Email" class="w-[32px] h-[32px] cursor-pointer">
            <font-awesome-icon :icon="faEnvelope"/>
          </a>
          <a href="Facebook" class=" w-[32px] h-[32px] cursor-pointer">
            <font-awesome-icon :icon="faFacebookF"/>
          </a>
          <a href="Twitter" class="w-[32px] h-[32px] cursor-pointer">
            <font-awesome-icon :icon="faXTwitter"/>
          </a>
          <a href="Instagram" class="w-[32px] h-[32px] cursor-pointer">
            <font-awesome-icon :icon="faInstagram"/>
          </a>
          <a href="Whatsapp" class="w-[32px] h-[32px] cursor-pointer">
            <font-awesome-icon :icon="faWhatsapp"/>
          </a>
          <a href="TikTok" class="w-[32px] h-[32px] cursor-pointer">
            <font-awesome-icon :icon="faTiktok"/>
          </a>
          <a href="YouTube" class="w-[32px] h-[32px] cursor-pointer">
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
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faXTwitter} from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { faTiktok } from '@fortawesome/free-brands-svg-icons/faTiktok';
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