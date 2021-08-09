import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { PTCoreModule } from '../core/core.module';
import { MaterialModule } from '../material.module';
import { HomeMainComponent } from './main/main.component';


const routes: Routes = [
	{ path: '', component: HomeMainComponent },
	{ path: '**', redirectTo: '' }
];

@NgModule({
	declarations: [
		HomeMainComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MaterialModule,
		PTCoreModule,
		RouterModule.forChild(routes)
	],
	providers: [ ]
})
export class HomeModule { }
