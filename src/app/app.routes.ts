import { Routes } from '@angular/router';
import { SemakanSamanComponent } from './semakan-saman/semakan-saman.component';
import { PagetestComponent } from './pagetest/pagetest.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'semakansaman',
        pathMatch: 'full'
    },
    {
        path: 'semakansaman',
        component: SemakanSamanComponent
    },
    {
        path: 'acap',
        component: PagetestComponent
    }
];
