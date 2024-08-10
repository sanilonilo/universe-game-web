import { defineComponent } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleUp,faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { moreOptions2 } from '../../../../data/store/header-store'

export const XboxNavController = defineComponent({
    name: "XboxNav",
    components:{
        FontAwesomeIcon
    },
    data(){
        return {
            faAngleUp,
            faAngleDown,
            showItemsCollapse: false,
            moreOptions2
        }
    }
})