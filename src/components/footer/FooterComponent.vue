
<template>
    <footer class="bg-gray-100 py-8">
        <div class="container mx-auto px-4">
            <div class="flex flex-wrap items-start justify-start -m-2">
                <div class="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                    <h2 class="font-semibold text-[#616161] mb-4">Navegue</h2>
                    <ul class="text-[11px]">
                        <li><a href="#" class="text-[#616161] hover:text-gray-800">Xbox consoles</a></li>
                        <li><a href="#" class="text-[#616161] hover:text-gray-800">Jogos Xbox</a></li>
                        <li><a href="#" class="text-[#616161] hover:text-gray-800">Xbox Game Pass</a></li>
                        <li><a href="#" class="text-[#616161] hover:text-gray-800">Acessórios do Xbox</a></li>
                    </ul>
                </div>
                <div class="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                    <h2 class="font-semibold text-[#616161] mb-4">Recursos</h2>
                    <ul class=text-[11px]>
                        <li><a href="#" class="text-[#616161] hover:text-gray-800">Notícias do Xbox</a></li>
                        <li><a href="#" class="text-[#616161] hover:text-gray-800">Suporte do Xbox</a></li>
                        <li><a href="#" class="text-[#616161] hover:text-gray-800">Feedback</a></li>
                        <li><a href="#" class="text-[#616161] hover:text-gray-800">Padrões da Comunidade</a></li>
                        <li><a href="#" class="text-[#616161] hover:text-gray-800">Aviso de potenciais convulsões por
                                fotosensibilidade</a></li>
                    </ul>
                </div>
                <div class="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                    <h2 class="font-semibold text-[#616161] mb-4">Microsoft Store</h2>
                    <ul class=text-[11px]>
                        <li><a href="#" class="text-[#616161] hover:text-gray-800">Conta Microsoft</a></li>
                        <li><a href="#" class="text-[#616161] hover:text-gray-800">Suporte da Microsoft Store</a></li>
                        <li><a href="#" class="text-[#616161] hover:text-gray-800">Devoluções</a></li>
                        <li><a href="#" class="text-[#616161] hover:text-gray-800">Rastreamento de pedidos</a></li>
                    </ul>
                </div>
                <div class="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                    <h2 class="font-semibold text-[#616161] mb-4">Para desenvolvedores</h2>
                    <ul class=text-[11px]>
                        <li><a href="#" class="text-[#616161] hover:text-gray-800">Jogos</a></li>
                    </ul>
                </div>
            </div>
            <div class="mt-6 border-t pt-6 text-center md:text-left">
                <div class="flex flex-col md:flex-row justify-between items-center text-[11px]">
                    <div class="text-[#616161] mb-4 md:mb-0">Português (Brasil)</div>
                    <div class="flex space-x-4 text-[#616161]">
                        <a href="#" class="hover:text-gray-800">Suas opções de privacidade</a>
                        <a href="#" class="hover:text-gray-800">Privacidade dos Dados de Saúde do Consumidor</a>
                        <a href="#" class="hover:text-gray-800">Privacidade e Cookies</a>
                        <a href="#" class="hover:text-gray-800">Gerenciar cookies</a>
                        <a href="#" class="hover:text-gray-800">Ética e Compliance</a>
                        <a href="#" class="hover:text-gray-800">Nota Legal</a>
                        <a href="#" class="hover:text-gray-800">Marcas</a>
                        <a href="#" class="hover:text-gray-800">Avisos de terceiros</a>
                        <a href="#" class="hover:text-gray-800">Sobre os nossos anúncios</a>
                    </div>
                </div>
                <div class="text-[#616161] mt-4 md:mt-0">
                    <p> &copy; Microsoft <span id="year"></span></p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang=ts>
import {defineComponent} from 'vue'

export default defineComponent({
    name: 'FooterComponent',

    methods: {
        getFullYear(): void {
            const year = document.getElementById('year');
            const currentYear = new Date()
                if(year) {
                    year.innerHTML = currentYear.getFullYear().toString()
                }
        }
    },
    mounted() {
        this.getFullYear()
    }
})

</script>