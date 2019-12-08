import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageSplashComponent } from '../components/pages/splash/splash.component';
import { PageHomeComponent } from '../components/pages/home/home.component';
import { PagePlayComponent } from '../components/pages/play/play.component';

const routes: Routes = [
	{ path: '', redirectTo: '/welcome', pathMatch: 'full' },
	{ path: 'welcome', component: PageSplashComponent },
	{ path: 'home', component: PageHomeComponent },
	{ path: 'play/:vid', component: PagePlayComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
