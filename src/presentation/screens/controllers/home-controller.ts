import { defineComponent } from "vue";
import HeaderView from "../../components/views/layout/header-view.vue"
import BannerView from '../../components/views/corousel/main-carousel-view.vue'
import IconBarView from '../../components/views/icon-links/icon-bar-view.vue'
import GridContent from '../../../components/grid-content/GridContent.vue'
import SocialNetwork from '../../../components/social/SocialNetwork.vue'
import FooterComponent from "../../../components/footer/FooterComponent.vue"
import {iconsBarStore} from '../../../data/store/icons-bar-store'

export const HomeController = defineComponent({
    name: 'Home',
    components: {
        HeaderView,
        BannerView,
        IconBarView,
        GridContent,
        SocialNetwork,
        FooterComponent
    },
    data(){
        return {
            iconsBarStore
        }
    }
})