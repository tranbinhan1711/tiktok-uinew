import config from '~/config';

import { HeaderOnly }from '~/Layouts'

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Live from '~/pages/Live';
import Search from '~/pages/Search';



// PublicRoutes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.live, component: Live },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },

    




];

const privateRoutes = [
    
];

export  { publicRoutes, privateRoutes };