import { defineComponent, ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleUp,faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { HeaderService } from '../../../../services/header.service'

export const XboxNavController = defineComponent({
    name: "XboxNav",
    components:{
        FontAwesomeIcon
    },
    setup(){
        return {
            menuNavOptions: ref([])
        }
    },
    data(){
        return {
            faAngleUp,
            faAngleDown,
            showItemsCollapse: false
        }
    },
    mounted(){
        HeaderService.getMenuNavContent().then(response => this.menuNavOptions = response)
    }
})