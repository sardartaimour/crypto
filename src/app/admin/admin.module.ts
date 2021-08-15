import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { PTCoreModule } from '../core/core.module';
import { MaterialModule } from '../material.module';
import { AdminRoutesGuard } from './admin.routes.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { AddProfitComponent } from './profit/profit.component';
import { PendingRequestsComponent } from './requests/requests.component';
import { WithDrawRequestsComponent } from './widthdraw-requests/withdraw.requests.component';


const routes: Routes = [
	{ 
		path: '', 
		component: MainComponent,
		children:[
			{
				path: 'dashboard',
				component: DashboardComponent,
				canActivate: [AdminRoutesGuard],
			},
			{ 
				path: 'add-profit', 
				component: AddProfitComponent ,
				canActivate: [AdminRoutesGuard],
			},
			{ 
				path: 'users-requests', 
				component: PendingRequestsComponent,
				canActivate: [AdminRoutesGuard],
			},
			{ 
				path: 'withdraw-requests', 
				component: WithDrawRequestsComponent,
				canActivate: [AdminRoutesGuard],
			},
			{ 
				path: '',
				pathMatch: 'full',
				redirectTo: '/admin/dashboard',
				canActivate: [AdminRoutesGuard]
			},
			{ 
				path: '**', 
				pathMatch: 'full',
				redirectTo: '/admin/dashboard',
				canActivate: [AdminRoutesGuard]
			},
		]
	},	
	
	{ path: '**', redirectTo: '' }
];

@NgModule({
	declarations: [
		MainComponent,
		DashboardComponent,
		AddProfitComponent,
		PendingRequestsComponent,
		WithDrawRequestsComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MaterialModule,
		PTCoreModule,
		ChartsModule,
		RouterModule.forChild(routes)
	],
	providers: [
		AdminRoutesGuard
	]
})
export class AdminModule { }
