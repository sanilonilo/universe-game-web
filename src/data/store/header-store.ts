import { DropdownDividerOption, DropdownGroupOption, DropdownOption, DropdownRenderOption } from "naive-ui";
import { randomInteger } from "../../utils/random-data";

export const dynamicNavItemsKeys = {
    community: randomInteger(9999,99999999),
    store: randomInteger(9999,99999999),
    player: randomInteger(9999,99999999),
    devices: randomInteger(9999,99999999),
    games: randomInteger(9999,99999999),
    gamePass: randomInteger(9999,99999999)
}

export const gamePassOptions = [
    {
        label: 'Assine o Game Pass',
        key: randomInteger(9999,99999999),
    },
    {
        label: 'Buscar jogos',
        key: randomInteger(9999,99999999),
    },
    {
        label: 'Game Pass Ultimate',
        key: randomInteger(9999,99999999),
    },
    {
        label: 'PC Game Pass',
        key: randomInteger(9999,99999999),
    },
    {
        label: 'Game Pass Core',
        key: randomInteger(9999,99999999),
    },
    {
        label: 'Ofertas com Game Pass',
        key: randomInteger(9999,99999999),
    },
    {
        label: 'Xbox Cloud Gaming (Beta)',
        key: randomInteger(9999,99999999),
    },
    
] as (DropdownOption | DropdownGroupOption | DropdownDividerOption | DropdownRenderOption)[]

export const gamesOptions = [
    {
        label: 'Pagina inicial de jogos',
        key: randomInteger(9999,99999999),
    },
    {
        label: 'Ver todos os jogos digitais',
        key: randomInteger(9999,99999999),
    },
    {
        label: 'Comprar todos os jogos para PC',
        key: randomInteger(9999,99999999),
    },
    {
        label: 'Cloud Gaming',
        key: randomInteger(9999,99999999),
    },
    {
        label: 'Jogos gratuitos',
        key: randomInteger(9999,99999999),
    },
    {
        label: 'Jogos otimizados',
        key: randomInteger(9999,99999999),
    },
    {
        label: 'Jogos compatíveis com versões anteriores',
        key: randomInteger(9999,99999999),
    },
    {
        label: 'Vendas e ofertas especiais',
        key: randomInteger(9999,99999999),
    },
    {
        label: 'Resgatar código',
        key: randomInteger(9999,99999999),
    }
] as (DropdownOption | DropdownGroupOption | DropdownDividerOption | DropdownRenderOption)[]

export const devicesOptions = [
    {
        label: 'Xbox Consoles',
        key: randomInteger(9999,99999999),
    },
    {
        label: 'Compre todos os consoles',
        key: randomInteger(9999,99999999),
    },
    {
        label: 'Onde comprar',
        key: randomInteger(9999,99999999),
    },
    {
        label: 'Xbox Séries',
        key: randomInteger(9999,99999999),
        children: [
            {
                label: 'Xbox Séries X',
                key: randomInteger(9999,99999999),
            },
            {
                label: 'Xbox Séries S',
                key: randomInteger(9999,99999999)
            }
        ]
    },
    {
        label: 'Compre todos os acessórios',
        key: randomInteger(9999,99999999),
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
        key: randomInteger(9999,99999999),
    },
    {
        label: 'Comprar o Game Pass',
        key: randomInteger(9999,99999999),
    },
    {
        label: 'Comprar consoles',
        key: randomInteger(9999,99999999),
    },
    {
        label: 'Compre acessórios',
        key: randomInteger(9999,99999999),
    },
    {
        label: 'Comprar ofertas',
        key: randomInteger(9999,99999999),
    }
] as (DropdownOption | DropdownGroupOption | DropdownDividerOption | DropdownRenderOption)[]

export const communityOptions = [
    {
        label: 'FanFest',
        key: randomInteger(9999,99999999),
    },
    {
        label: 'Notícias do Xbox',
        key: randomInteger(9999,99999999),
    },
    {
        label: 'Nossa filosofia',
        key: randomInteger(9999,99999999),
    },
    {
        label: 'Family hub',
        key: randomInteger(9999,99999999),
    },
    {
        label: 'Jogos acessíveis',
        key: randomInteger(9999,99999999),
    },
    {
        label: 'Padrões da comunidade',
        key: randomInteger(9999,99999999),
    },
]

export const moreOptions = [
    {
        label: 'Suporte',
        key: '171',
        children: [
            {
                label: 'Página inicial do suporte',
                key: randomInteger(9999,99999999),
            },
            {
                label: 'Status do Xbox',
                key: randomInteger(9999,99999999),
            },
            {
                label: 'Tópicos da ajuda',
                key: randomInteger(9999,99999999),
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

export const moreOptions2 = [
    {
        "label": "Suporte",
        "key": "171",
        "children": [
            {
                "label": "Página inicial do suporte",
                "key": 72347020
            },
            {
                "label": "Status do Xbox",
                "key": 6326299
            },
            {
                "label": "Tópicos da ajuda",
                "key": 62847408,
                "children": [
                    {
                        "label": "Conta e perfil",
                        "key": "0"
                    },
                    {
                        "label": "Assinaturas e cobrança",
                        "key": "15"
                    },
                    {
                        "label": "Hadware e rede",
                        "key": "16"
                    },
                    {
                        "label": "Família e segurança online",
                        "key": "17"
                    },
                    {
                        "label": "Jogos e apps",
                        "key": "18"
                    },
                    {
                        "label": "Amigos e atividade social",
                        "key": "19"
                    }
                ]
            }
        ]
    },
    {
        "label": "Meu Xbox",
        "key": "51",
        "children": [
            {
                "label": "Início",
                "key": "30"
            },
            {
                "label": "Perfil",
                "key": "31"
            },
            {
                "label": "Lista de desejos",
                "key": "32"
            }
        ]
    },
    {
        "label": "Desenvolvedores",
        "key": "52",
        "children": [
            {
                "label": "Jogos",
                "key": "92"
            }
        ]
    },
    {
        "key": 9794673,
        "label": "Comunidade",
        "children": [
            {
                "label": "FanFest",
                "key": 22931427
            },
            {
                "label": "Notícias do Xbox",
                "key": 9528883
            },
            {
                "label": "Nossa filosofia",
                "key": 78430031
            },
            {
                "label": "Family hub",
                "key": 69534849
            },
            {
                "label": "Jogos acessíveis",
                "key": 69720718
            },
            {
                "label": "Padrões da comunidade",
                "key": 4446752
            }
        ]
    },
    {
        "key": 61659445,
        "label": "Loja",
        "children": [
            {
                "label": "Comprar jogos",
                "key": 2754742
            },
            {
                "label": "Comprar o Game Pass",
                "key": 78580277
            },
            {
                "label": "Comprar consoles",
                "key": 99970286
            },
            {
                "label": "Compre acessórios",
                "key": 71196128
            },
            {
                "label": "Comprar ofertas",
                "key": 62378495
            }
        ]
    },
    {
        "key": 68861608,
        "label": "Jogar",
        "children": []
    },
    {
        "key": 28638375,
        "label": "Dispositivos",
        "children": [
            {
                "label": "Xbox Consoles",
                "key": 45706076
            },
            {
                "label": "Compre todos os consoles",
                "key": 51328739
            },
            {
                "label": "Onde comprar",
                "key": 16811212
            },
            {
                "label": "Xbox Séries",
                "key": 64783984,
                "children": [
                    {
                        "label": "Xbox Séries X",
                        "key": 31345853
                    },
                    {
                        "label": "Xbox Séries S",
                        "key": 77871106
                    }
                ]
            },
            {
                "label": "Compre todos os acessórios",
                "key": 5046452,
                "children": [
                    {
                        "label": "Controles",
                        "key": "99"
                    },
                    {
                        "label": "Fones de ouvido",
                        "key": "98"
                    },
                    {
                        "label": "Discos rígidos e armazenamento",
                        "key": "97"
                    }
                ]
            }
        ]
    },
    {
        "key": 1141181,
        "label": "Jogos",
        "children": [
            {
                "label": "Pagina inicial de jogos",
                "key": 11783922
            },
            {
                "label": "Ver todos os jogos digitais",
                "key": 35877701
            },
            {
                "label": "Comprar todos os jogos para PC",
                "key": 69692280
            },
            {
                "label": "Cloud Gaming",
                "key": 4874621
            },
            {
                "label": "Jogos gratuitos",
                "key": 27467994
            },
            {
                "label": "Jogos otimizados",
                "key": 38095801
            },
            {
                "label": "Jogos compatíveis com versões anteriores",
                "key": 28553399
            },
            {
                "label": "Vendas e ofertas especiais",
                "key": 90875164
            },
            {
                "label": "Resgatar código",
                "key": 51384126
            }
        ]
    },
    {
        "key": 21710803,
        "label": "Game Pass",
        "children": [
            {
                "label": "Assine o Game Pass",
                "key": 77188841
            },
            {
                "label": "Buscar jogos",
                "key": 10250434
            },
            {
                "label": "Game Pass Ultimate",
                "key": 56716780
            },
            {
                "label": "PC Game Pass",
                "key": 24419888
            },
            {
                "label": "Game Pass Core",
                "key": 23160006
            },
            {
                "label": "Ofertas com Game Pass",
                "key": 61760418
            },
            {
                "label": "Xbox Cloud Gaming (Beta)",
                "key": 59115030
            }
        ]
    }
].reverse() as any