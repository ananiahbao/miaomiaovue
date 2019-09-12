export default {
    path : '/movie',
    component: () => import('@/views/Movie'),
    children : [
        {
            path : 'city',
            component : () => import('@/components/City/City.vue')
        },
        {
            path : 'nowplaying',
            component : () => import('@/components/Nowplaying/Nowplay.vue')
        },
        {
            path : 'commonSoon',
            component : () => import('@/components/CommonSoon/Commin.vue')
        },
        {
            path : 'search',
            component : () => import('@/components/Search/Search.vue')
        },
        {
            path : '/movie',
            redirect : '/movie/nowplaying'
        }
    ]
}