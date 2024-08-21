import { defineComponent } from "vue";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export const ItemCardGridController = defineComponent({
    name: 'ItemCardGrid',
    components: {
        FontAwesomeIcon
    },
    props: {
        item: Object as any
    },
    data(){
        return {
            faAngleRight
        }
    }
})