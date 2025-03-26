import { Routes } from '@angular/router';
import { SemakanSamanComponent } from './semakan-saman/semakan-saman.component';
import { PagetestComponent } from './pagetest/pagetest.component';
import { DirektoriComponent } from './direktori/direktori.component';
import { ChangePasswordComponent } from './kata-laluan/kata-laluan.component';
import { KemasKiniComponent } from './kemas-kini/kemas-kini.component';
import { LesenkenderaanComponent } from './lesenkenderaan/lesenkenderaan.component';
import { HomeComponent } from './home/home.component';
import { PembaharuanLesenComponent } from './pembaharuan-lesen/pembaharuan-lesen.component';
import { PemilikanComponent } from './pemilikan/pemilikan.component';
import { PetiMasukComponent } from './peti-masuk/peti-masuk.component';
import { ProfilComponent } from './profil/profil.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';
import { DetailNegeriComponent } from './detail-negeri/detail-negeri.component';


export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'semakansaman', component: SemakanSamanComponent },
    { path: 'acap', component: PagetestComponent },
    { path: 'direktori', component: DirektoriComponent },
    { path: 'katalaluan', component: ChangePasswordComponent },
    { path: 'kemaskini', component: KemasKiniComponent },
    { path: 'lesenkenderaan', component: LesenkenderaanComponent },
    { path: 'pembaharuanlesen', component: PembaharuanLesenComponent },
    { path: 'pemilikan', component: PemilikanComponent },
    { path: 'peti-masuk', component: PetiMasukComponent },
    { path: 'profil', component: ProfilComponent },
    { path: 'detail-negeri',component: DetailNegeriComponent },
];
    