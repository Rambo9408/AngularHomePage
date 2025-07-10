import { Routes } from '@angular/router';
import { Header } from './header/header';
import { Home } from './home/home';
import { Signup } from './signup/signup';
import { Login } from './login/login';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { Profile } from './profile/profile';
import { Ractiveform } from './ractiveform/ractiveform';
import { About } from './about/about';

export const routes: Routes = [
    { path: '', component: Home, pathMatch: 'full' },
    {path:'header', component: Header},
    {path:'home', component: Home},
    {path:'about', component: About},
    {path:'signup', component: Signup},
    {path:'login', component: Login},
    {path:'form', component: Ractiveform},
    {path:'profile',component: Profile, data: {routName: 'Ananya Pandey',routeAge:35}},
    {path:'**',component: Pagenotfound}
    //we must put pagenotfound rout in the last as when we put it the first and if no link is matched then it will show page not found on every case. hence this is called wildcard Route
];
