import { defineComponent } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'

export const NavItemController = defineComponent({
    name: 'NavItem',
    props: {
        label: String,
        options: Array
    },
    components:{
        FontAwesomeIcon
    },
    data() {
        return {
            faAngleDown
        }
    },
})