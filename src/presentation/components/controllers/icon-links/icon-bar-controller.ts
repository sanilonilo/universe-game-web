import { defineComponent } from "vue";

export const IconBarController = defineComponent({
    name: 'IconBar',
    props:{
        imageUrl: String,
        label: String,
        link: String
    }
})