import { defineComponent } from 'vue'

export const MenuNavController = defineComponent({
    name: 'MenuNav',
    props:{
        isMenuMode: Boolean,
        options: Array
    }
})