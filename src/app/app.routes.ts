import { Routes } from '@angular/router';
import { SemakanSamanComponent } from './semakan-saman/semakan-saman.component';
import { PagetestComponent } from './pagetest/pagetest.component';
import { DirektoriComponent } from './direktori/direktori.component';
import { ChangePasswordComponent } from './kata-laluan/kata-laluan.component';
import { KemasKiniComponent } from './kemas-kini/kemas-kini.component';
import { LesenkenderaanComponent } from './lesenkenderaan/lesenkenderaan.component';
import { PaparanUtamaComponent } from './paparan-utama/paparan-utama.component';
import { PembaharuanLesenComponent } from './pembaharuan-lesen/pembaharuan-lesen.component';
import { PemilikanComponent } from './pemilikan/pemilikan.component';
import { PetiMasukComponent } from './peti-masuk/peti-masuk.component';
import { ProfilComponent } from './profil/profil.component';

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
    },
    {
        path: 'direktori',
        component: DirektoriComponent
    },
    {
        path: 'katalaluan',
        component: ChangePasswordComponent
    },
    {
        path: 'kemaskini',
        component: KemasKiniComponent
    },
    {
        path: 'lesenkenderaan',
        component: LesenkenderaanComponent
    },
    {
        path: 'paparanutama',
        component: PaparanUtamaComponent
    },
    {
        path: 'pembaharuanlesen',
        component: PembaharuanLesenComponent
    },
    {
        path: 'pemilikan',
        component: PemilikanComponent
    },
    {
        path: 'petimasuk',
        component: PetiMasukComponent
    },
    {
        path: 'profil',
        component: ProfilComponent
    },
];
