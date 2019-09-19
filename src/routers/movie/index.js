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
            path : 'detail/1/:movieId',
            // 命名视图写成components
            components : {
                default : ()=>import('@/components/Nowplaying/Nowplay.vue'),
                detail : ()=> import('@/views/Movie/details')
            },
            // props解耦
            props : {
                detail : true
            }
        },
        {
            path : 'detail/2/:movieId',
            // 命名视图写成components
            components : {
                default : ()=>import('@/components/CommonSoon/Commin.vue'),
                detail : ()=> import('@/views/Movie/details')
            },
            // props解耦
            props : {
                detail : true
            }
        },
        {
            path : '/movie',
            redirect : '/movie/nowplaying'
        }
    ]
}