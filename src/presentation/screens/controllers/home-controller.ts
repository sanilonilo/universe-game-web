import { defineComponent, ref } from "vue";
import {ComponentsViews} from '../../components/views'
import { gridDataStore } from "../../../data/store/grid-data-store";
import { IconBarService } from "../../../services/icon-bars.service";

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
    setup(){
        return {
            iconsBarStore: ref<any[]>([])
        }
    },
    data(){
        return {
            gridDataStore,
        }
    },
    mounted(){
        IconBarService.getIconBarContent().then(response => this.iconsBarStore = response)
    }
})