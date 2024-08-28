import { defineComponent, ref } from "vue";
import {ComponentsViews} from '../../components/views'
import { IconBarService } from "../../../services/icon-bars.service";
import { GridContentService } from "../../../services/grid-content.service";

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
            iconsBarStore: ref<any[]>([]),
            gridDataStore: ref<any[]>([])
        }
    },
    mounted(){
        IconBarService.getIconBarContent().then(response => this.iconsBarStore = response)
        GridContentService.getGridContent().then(response => this.gridDataStore = response)
    }
})