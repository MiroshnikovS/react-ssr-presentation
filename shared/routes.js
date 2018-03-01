import Layout from './Components/Layout';
import Home from './Components/Home';
import Clicker from './Components/Clicker';
import NotFound from './Components/NotFound';

const routes = [
    {
        component: Layout,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home
            },
            {
                path: '/home',
                component: Home
            },
            {
                path: '/clicker/:clicks',
                component: Clicker
            },
            {
                path: '/clicker',
                component: Clicker
            },
            {
                component: NotFound
            },
        ]
    }
];

export default routes;
