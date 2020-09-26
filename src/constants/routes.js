const publicRoutes = {
    LOGIN: '/ingreso',
    REGISTER: '/registro',
    APPOINTMENTS: '/citas',
    USERS: '/usuarios',
    USERS_ID: `/usuario/:id`,
    HOME: '/',
    ABOUT: '/acerca-de',
    ANTD: '/antd'
};

const privateRoutes = {
    LOGOUT: '/logout',
    PRIVATE: '/privada',
    ARTICLE_ID: '/articulo/:id'
};

const Routes = {
    ...publicRoutes,
    ...privateRoutes
};
export default Routes;