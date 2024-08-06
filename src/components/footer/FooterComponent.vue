
<template>
    <footer class="bg-gray-100 py-8">
        <div class="container mx-auto px-4">
            <div class="flex flex-wrap items-start justify-start -m-2">
                <div class="w-full md:w-[17%] px-4 mb-4 md:mb-0">
                    <h2 class="font-semibold text-[#616161] mb-4">Navegue</h2>
                    <ul class="text-[11px] space-y-3">
                        <li><a href="#" class="text-[#616161] hover:text-gray-800">Xbox consoles</a></li>
                        <li><a href="#" class="text-[#616161] hover:text-gray-800">Jogos Xbox</a></li>
                        <li><a href="#" class="text-[#616161] hover:text-gray-800">Xbox Game Pass</a></li>
                        <li><a href="#" class="text-[#616161] hover:text-gray-800">Acessórios do Xbox</a></li>
                    </ul>
                </div>
                <div class="w-full md:w-[17%] px-4 mb-4 md:mb-0">
                    <h2 class="font-semibold text-[#616161] mb-4">Recursos</h2>
                    <ul class="text-[11px] space-y-3">
                        <li><a href="#" class="text-[#616161] hover:text-gray-800">Notícias do Xbox</a></li>
                        <li><a href="#" class="text-[#616161] hover:text-gray-800">Suporte do Xbox</a></li>
                        <li><a href="#" class="text-[#616161] hover:text-gray-800">Feedback</a></li>
                        <li><a href="#" class="text-[#616161] hover:text-gray-800">Padrões da Comunidade</a></li>
                        <li><a href="#" class="text-[#616161] hover:text-gray-800">Aviso de potenciais convulsões por
                                fotosensibilidade</a></li>
                    </ul>
                </div>
                <div class="w-full md:w-[17%] px-4 mb-4 md:mb-0">
                    <h2 class="font-semibold text-[#616161] mb-4">Microsoft Store</h2>
                    <ul class="text-[11px] space-y-3">
                        <li><a href="#" class="text-[#616161] hover:text-gray-800">Conta Microsoft</a></li>
                        <li><a href="#" class="text-[#616161] hover:text-gray-800">Suporte da Microsoft Store</a></li>
                        <li><a href="#" class="text-[#616161] hover:text-gray-800">Devoluções</a></li>
                        <li><a href="#" class="text-[#616161] hover:text-gray-800">Rastreamento de pedidos</a></li>
                    </ul>
                </div>
                <div class="w-full md:w-[17%] px-4 mb-4 md:mb-0">
                    <h2 class="font-semibold text-[#616161] mb-4">Para desenvolvedores</h2>
                    <ul class=text-[11px]>
                        <li><a href="#" class="text-[#616161] hover:text-gray-800">Jogos</a></li>
                    </ul>
                </div>
            </div>
            <div class="flex-col justify-items-start md:flex pt-[30px] pb-[16px] pr-[5px] pl-[5px] text-[11px] max-w-[calc(1600px+10%)] text-gray-600 border-gray-200">
                <div class=" justify-start md:flex flex-wrap space-x-4">
                    <div class="flex items-center space-x-1 mr-4 cursor-pointer">
                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                        </svg>
                        <a class="hover:underline">Português (Brasil)</a>
                    </div>

                    <div class="flex items-center space-x-1 mr-4 cursor-pointer">
                        <img src="../../assets/privacy-icon.png" class="w-10 h-4" alt="">
                        <a class="hover:underline">Suas opções de privacidade</a>
                    </div>
                    <div class="flex items-center space-x-1 cursor-pointer mr-4">
                        <a class="hover:underline">Privacidade dos Dados de Saúde do Consumidor</a>
                    </div>
                </div>
                <div v-for="(link, index) in links" :key="index"  class="flex md:inline-block pr-6 pb-[4px] mt-1"> 
                    <a href="#" class="hover:underline">{{ link }}</a>
                </div>

                <span class="mt-3px">© Microsoft {{ currentYear }}</span>
            </div>
        </div>
    </footer>
</template>

<script lang=ts>
import {defineComponent, ref} from 'vue'

export default defineComponent({
    name: 'FooterComponent',

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

</script>