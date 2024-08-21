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
import { socialNetworkStore } from '../../../../data/store/social-network-store';

export const SocialNetworkController = defineComponent({
    name: 'SocialNetwork',
    components: {
        FontAwesomeIcon
    },
    data() {
        return {
            socialNetworkStore
        }
    }
})