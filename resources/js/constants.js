export const IMAGES = {
    LOGO: 'https://static.wixstatic.com/media/530d98_a4c9ad39e94f4a9b86ad4aaf803ba1e6~mv2.png/v1/fill/w_195,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0222_flame_logotipo_02.png'
}

export const NAV_HEADER = [
    {
        title: 'Home',
        icon: 'Home',
        href: '#'
    }
]

export const NAV_MAIN = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        subnav: []
    },
    {
        title: 'Visores',
        href: '#',
        subnav: [
            {
                title: 'En vivo',
                href: '#'
            },
            {
                title: 'Histórico',
                href: '#'
            },
            {
                title: 'Tabular',
                href: '#'
            }
        ]
    },
    {
        title: 'Reportes',
        href: '#',
        subnav: [
            {
                title: 'Georeferencia',
                href: '#'
            },
            {
                title: 'Sobrevelocidad',
                href: '#'
            }
        ]
    },
    {
        title: 'Georeferencias',
        href: '#',
        subnav: [
            {
                title: 'Mapa',
                href: '#'
            },
            {
                title: 'Tabular',
                href: '#'
            }
        ]
    },
    {
        title: 'Configuración',
        href: '#',
        subnav: [
            {
                title: 'Móviles',
                href: '#'
            },
            {
                title: 'Móviles > Grupos',
                href: '#'
            },
            {
                title: 'Dispositivos',
                href: '#'
            },
            {
                title: 'Dispositivos > Eventos',
                href: '#'
            },
            {
                title: 'Dispositivos > Tipos',
                href: '/app/tracking/configurations/devices-types'
            },
            {
                title: 'Dispositivos > Modelos',
                href: '#'
            },
            {
                title: 'Dispositivos > Marcas',
                href: '#'
            },
            {
                title: 'Eventos > Tipos',
                href: '#'
            }
        ]
    }
]
