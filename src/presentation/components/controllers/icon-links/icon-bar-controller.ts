import { defineComponent } from "vue";

export const IconBarController = defineComponent({
    name: 'IconBar',
    props:{
        image: String,
        label: String,
        link: String
    }
})