import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { defineComponent, ref } from "vue";
import { faAngleRight, faAngleLeft, faPlay,faPause } from '@fortawesome/free-solid-svg-icons'
import { CarouselService } from "../../../../services/carousel.service";

export const MainCarouselController = defineComponent({
    name: 'MainCarousel',
    components: {
        FontAwesomeIcon
    },
    setup(){
        return{
            carouselContent: ref<any[]>([])
        }
    },
    data() {
        return {
            faAngleRight,
            faAngleLeft,
            faPlay,
            faPause,
            isAutoPlay: true
        }
    },
    mounted(){
        CarouselService.getCarouselContent().then(response => this.carouselContent = response)
    }
})