import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { defineComponent } from "vue";
import { faAngleRight, faAngleLeft, faPlay,faPause } from '@fortawesome/free-solid-svg-icons'

export const MainCarouselController = defineComponent({
    name: 'MainCarousel',
    components: {
        FontAwesomeIcon
    },
    data() {
        return {
            faAngleRight,
            faAngleLeft,
            faPlay,
            faPause,
            isAutoPlay: true
        }
    }
})