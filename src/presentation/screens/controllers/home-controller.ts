import { defineComponent } from "vue";
import {ComponentsViews} from '../../components/views'
import {iconsBarStore} from '../../../data/store/icons-bar-store'
import { gridDataStore } from "../../../data/store/grid-data-store";

export const HomeController = defineComponent({
    name: 'Home',
    components: {
        HeaderView: ComponentsViews.HeaderView,
        BannerView: ComponentsViews.BannerView,
        IconBarView: ComponentsViews.IconBarView,
        ItemCardGridView: ComponentsViews.ItemCardGridView,
        SocialNetworkView: ComponentsViews.SocialNetworkView,
        FooterView: ComponentsViews.FooterView
    },
    data(){
        return {
            iconsBarStore,
            gridDataStore,
        }
    }
})