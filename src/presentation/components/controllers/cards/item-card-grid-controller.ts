import { defineComponent } from "vue";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export const ItemCardGridController = defineComponent({
    name: 'ItemCardGrid',
    props:{
        item: Object as any
    },
    components: {
        FontAwesomeIcon
    },
    data(){
        return {
            faAngleRight
        }
    }
})