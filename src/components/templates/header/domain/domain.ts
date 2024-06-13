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

export const jogosOption = [
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

export const dispositivosOptions = [
    {
        label: 'Assine o game pass | nivel 1',
        key: '1',
        children: [
            {
                label: 'Assine o game pass | nivel 1',
                key: '6',
                children: [
                    { label: 'Item teste'}
                ]
            },
        ]
    },
    {
        label: 'Assine o game pass | nivel 2',
        key: '2',
        children: [
            {
                label: 'Assine o game pass | nivel 2',
                key: '7',
                children: [
                    { label: 'Item teste'}
                ]
            },
        ]
    },
    {
        label: 'Assine o game pass | nivel 3',
        key: '3',
        children: [
            {
                label: 'Assine o game pass | nivel 3',
                key: '8',
                children: [
                    { label: 'Item teste'}
                ]
            },
        ]
    },
    {
        label: 'Assine o game pass | nivel 4',
        key: '4',
        children: [
            {
                label: 'Assine o game pass | nivel 4',
                key: '9',
                children: [
                    { label: 'Item teste'}
                ]
            },
        ]
    },
    {
        label: 'Assine o game pass | nivel 5',
        key: '5',
        children: [
            {
                label: 'Assine o game pass | nivel 5',
                key: '10',
                children: [
                    { label: 'Item teste'}
                ]
            },
        ]
    }
] as (DropdownOption | DropdownGroupOption | DropdownDividerOption | DropdownRenderOption)[]

export const lojaOptions = [
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

export const suporteOptions = [
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
    {
        label: 'Assine o game pass | nivel 4',
        key: '4',
    },
    {
        label: 'Assine o game pass | nivel 5',
        key: '5',
    }
] as (DropdownOption | DropdownGroupOption | DropdownDividerOption | DropdownRenderOption)[]

export const maisOptions = [
    {
        label: 'Meu Xbox',
        key: '1',
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
        key: '2',
        children: [
            {
                label: 'Jogos',
                key: '0',
            },
        ]
    }
] as (DropdownOption | DropdownGroupOption | DropdownDividerOption | DropdownRenderOption)[]