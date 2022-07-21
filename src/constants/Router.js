export const ROUTES = {
    DASHBOARD: {
        path: '/',
        exact: true,
    },
    BRAND: {
        path: '/admin/brand',
        sub_path: {
            dior: '/admin/brand/dior',
            chanel: '/admin/brand/chanel',
            gucci: '/admin/brand/gucci',
            prada: '/admin/brand/prada',
            ysl: '/admin/brand/ysl',
            versace: '/admin/brand/versace',
            other: '/admin/brand/other',
        },
        exact: false,
    },
    PRODUCT: {
        path: '/admin/products',
        exact: true,
    },
    ORDER: {
        path: '/admin/orders',
        exact: true,
    },
    USER: {
        path: '/admin/users',
        exact: true,
    },
    SETTING: {
        path: '/admin/setting',
        exact: false,
    },
}