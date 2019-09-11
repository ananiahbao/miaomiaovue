export default {
    path : '/movie',
    component: () => import('@/views/Movie'),
    children : [
        {
            path : 'city',
            component : () =>import('@/components/City')
        },
        {
            path : 'nowplaying',
            component : () =>import('@/components/Nowplaying')
        },
        {
            path : 'commonSoon',
            component : () =>import('@/components/CommonSoon')
        },
        {
            path : 'search',
            component : () =>import('@/components/Search')
        },
    ]
}