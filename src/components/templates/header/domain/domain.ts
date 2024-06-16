import { DropdownDividerOption, DropdownGroupOption, DropdownOption, DropdownRenderOption } from "naive-ui";

export const gamePassOptions = [
    {
        label: 'Assine o Game Pass',
        key: '1',
    },
    {
        label: 'Buscar jogos',
        key: '2',
    },
    {
        label: 'Game Pass Ultimate',
        key: '3',
    },
    {
        label: 'PC Game Pass',
        key: '4',
    },
    {
        label: 'Game Pass Core',
        key: '5',
    },
    {
        label: 'Ofertas com Game Pass',
        key: '6',
    },
    {
        label: 'Xbox Cloud Gaming (Beta)',
        key: '7',
    },
    
] as (DropdownOption | DropdownGroupOption | DropdownDividerOption | DropdownRenderOption)[]

export const gamesOptions = [
    {
        label: 'Pagina inicial de jogos',
        key: '1',
    },
    {
        label: 'Ver todos os jogos digitais',
        key: '2',
    },
    {
        label: 'Comprar todos os jogos para PC',
        key: '3',
    },
    {
        label: 'Cloud Gaming',
        key: '4',
    },
    {
        label: 'Jogos gratuitos',
        key: '5',
    },
    {
        label: 'Jogos otimizados',
        key: '6',
    },
    {
        label: 'Jogos compatíveis com versões anteriores',
        key: '7',
    },
    {
        label: 'Vendas e ofertas especiais',
        key: '8',
    },
    {
        label: 'Resgatar código',
        key: '9',
    }
] as (DropdownOption | DropdownGroupOption | DropdownDividerOption | DropdownRenderOption)[]

export const devicesOptions = [
    {
        label: 'Xbox Consoles',
        key: '1',
    },
    {
        label: 'Compre todos os consoles',
        key: '2',
    },
    {
        label: 'Onde comprar',
        key: '3',
    },
    {
        label: 'Xbox Séries',
        key: '4',
        children: [
            {
                label: 'Xbox Séries X',
                key: '8',
            },
            {
                label: 'Xbox Séries S',
                key: '9'
            }
        ]
    },
    {
        label: 'Compre todos os acessórios',
        key: '5',
        children: [
            {
                label: 'Controles',
                key: '99',
            },
            {
                label: 'Fones de ouvido',
                key: '98',
            },
            {
                label: 'Discos rígidos e armazenamento',
                key: '97',
            },
        ]
    },
] as (DropdownOption | DropdownGroupOption | DropdownDividerOption | DropdownRenderOption)[]

export const storeOptions = [
    {
        label: 'Comprar jogos',
        key: '1',
    },
    {
        label: 'Comprar o Game Pass',
        key: '2',
    },
    {
        label: 'Comprar consoles',
        key: '3',
    },
    {
        label: 'Compre acessórios',
        key: '4',
    },
    {
        label: 'Comprar ofertas',
        key: '5',
    }
] as (DropdownOption | DropdownGroupOption | DropdownDividerOption | DropdownRenderOption)[]

export const communityOptions = [
    {
        label: 'FanFest',
        key: '1',
    },
    {
        label: 'Notícias do Xbox',
        key: '2',
    },
    {
        label: 'Nossa filosofia',
        key: '3',
    },
    {
        label: 'Family hub',
        key: '4',
    },
    {
        label: 'Jogos acessíveis',
        key: '5',
    },
    {
        label: 'Padrões da comunidade',
        key: '6',
    },
]

export const moreOptions = [
    {
        label: 'Suporte',
        key: '171',
        children: [
            {
                label: 'Página inicial do suporte',
                key: '1',
            },
            {
                label: 'Status do Xbox',
                key: '2',
            },
            {
                label: 'Tópicos da ajuda',
                key: '3',
                children: [
                    {
                        label: 'Conta e perfil',
                        key: '0',
                    },
                    {
                        label: 'Assinaturas e cobrança',
                        key: '15',
                    },
                    {
                        label: 'Hadware e rede',
                        key: '16',
                    },
                    {
                        label: 'Família e segurança online',
                        key: '17',
                    },
                    {
                        label: 'Jogos e apps',
                        key: '18',
                    },
                    {
                        label: 'Amigos e atividade social',
                        key: '19',
                    }
                ]
            },
        ]
    },
    {
        label: 'Meu Xbox',
        key: '51',
        children: [
            {
                label: 'Início',
                key: '30',
            },
            {
                label: 'Perfil',
                key: '31',
            },
            {
                label: 'Lista de desejos',
                key: '32',
            },
        ]
    },
    {
        label: 'Desenvolvedores',
        key: '52',
        children: [
            {
                label: 'Jogos',
                key: '92',
            },
        ]
    }
] as (DropdownOption | DropdownGroupOption | DropdownDividerOption | DropdownRenderOption)[]