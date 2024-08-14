import { defineComponent } from "vue";
import HeaderView from "../../components/views/layout/header-view.vue"
import BannerView from '../../components/views/corousel/main-carousel-view.vue'
import IconBarView from '../../components/views/icon-links/icon-bar-view.vue'
import ItemCardGridView from '../../components/views/cards/item-card-grid-view.vue'
import SocialNetwork from '../../../components/social/SocialNetwork.vue'
import FooterView from "../../components/views/layout/footer-view.vue"
import {iconsBarStore} from '../../../data/store/icons-bar-store'
import { gridDataStore } from "../../../data/store/grid-data-store";

export const HomeController = defineComponent({
    name: 'Home',
    components: {
        HeaderView,
        BannerView,
        IconBarView,
        ItemCardGridView,
        SocialNetwork,
        FooterView
    },
    data(){
        return {
            iconsBarStore,
            gridDataStore
        }
    }
})