import {defineComponent, ref} from 'vue'

export const FooterController = defineComponent({
    name: 'Footer',
    setup() {
        const links = [
            'Entre em contato com a Microsoft',
            'Privacidade e Cookies',
            'Gerenciar cookies',
            'Ética e Compliance',
            'Nota Legal',
            'Marcas',
            'Avisos de terceiros',
            'Sobre os nossos anúncios'
        ]
    
    const currentYear = ref(new Date().getFullYear())
    
    return { 
        links, 
        currentYear 
    }
  }
})