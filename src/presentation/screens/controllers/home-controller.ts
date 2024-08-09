import { defineComponent } from "vue";
import HeaderView from "../../components/views/layout/header-view.vue"
import Banner from '../../../components/banner/Banner.vue'
import Icons from '../../../components/icons/Icons.vue'
import GridContent from '../../../components/grid-content/GridContent.vue'
import SocialNetwork from '../../../components/social/SocialNetwork.vue'
import FooterComponent from "../../../components/footer/FooterComponent.vue"

export const HomeController = defineComponent({
    name: 'Home',
    components: {
        HeaderView,
        Banner,
        Icons,
        GridContent,
        SocialNetwork,
        FooterComponent
    },
    data(){
        return {}
    }
})