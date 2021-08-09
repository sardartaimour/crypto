import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
	{ 
		path: 'admin', 
		loadChildren: () => import(`./admin/admin.module`).then(m => m.AdminModule) 
	},
	{
		path: 'home',
		loadChildren: () => import(`./home/home.module`).then(m=> m.HomeModule)
	},
	{
		path: 'user',
		loadChildren: () => import(`./user/user.module`).then(m=> m.UserModule)
	},
	{
		path: '**', 
		redirectTo: '/home', 
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
