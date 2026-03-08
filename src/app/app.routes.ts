import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome';
import { MenusComponent } from './pages/menus/menus'

export const routes: Routes = [
    { path: '', component: WelcomeComponent},
    { path: 'menus', component: MenusComponent}
];
