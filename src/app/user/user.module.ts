import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { PTCoreModule } from '../core/core.module';
import { MaterialModule } from '../material.module';
import { UserRoutesGuard } from './user.routes.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { TranscationComponent } from './transcations/transcation.component';
import { MyNetworkComponent } from './my-network/network.component';
import { WithDrawRequestsComponent } from './widthdraw-requests/withdraw.requests.component';


const routes: Routes = [
	{ 
		path: '', 
		component: MainComponent,
		children:[
			{
				path: 'dashboard',
				component: DashboardComponent,
				canActivate: [UserRoutesGuard],
			},
			{ 
				path: 'transcations', 
				component: TranscationComponent ,
				canActivate: [UserRoutesGuard],
			},
			{ 
				path: 'my-network', 
				component: MyNetworkComponent,
				canActivate: [UserRoutesGuard],
			},
			{ 
				path: 'withdraw-requests', 
				component: WithDrawRequestsComponent,
				canActivate: [UserRoutesGuard],
			},
			{ 
				path: '',
				pathMatch: 'full',
				redirectTo: '/admin/dashboard',
				canActivate: [UserRoutesGuard]
			},
			{ 
				path: '**', 
				pathMatch: 'full',
				redirectTo: '/user/dashboard',
				canActivate: [UserRoutesGuard]
			},
		]
	},	
	
	{ path: '**', redirectTo: '' }
];

@NgModule({
	declarations: [
		MainComponent,
		DashboardComponent,
		TranscationComponent,
		MyNetworkComponent,
		WithDrawRequestsComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MaterialModule,
		PTCoreModule,
		RouterModule.forChild(routes)
	],
	providers: [
		UserRoutesGuard
	]
})
export class UserModule { }
