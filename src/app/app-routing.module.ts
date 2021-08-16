import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutesGuard } from './app.routes.guard';


const routes: Routes = [
	{ 
		path: 'admin', 
		loadChildren: () => import(`./admin/admin.module`).then(m => m.AdminModule),
		data: {role: 'admin'},
		canLoad: [AdminRoutesGuard]
	},
	{
		path: 'user',
		loadChildren: () => import(`./user/user.module`).then(m=> m.UserModule),
		data: {role: 'User'},
		canLoad: [AdminRoutesGuard]
	},
	{
		path: '**', 
		redirectTo: '/admin/dashboard', 
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
