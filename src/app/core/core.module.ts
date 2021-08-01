import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material.module';
import { PTFooterComponent } from './footer/footer.component';
import { PTSubMenuToolbarComponent } from './sub-menu-toolbar/sub.menu.toolbar.component';
import { PTToolbarComponent } from './toolbar/toolbar.component';


@NgModule({
	declarations: [
		PTFooterComponent,
		PTSubMenuToolbarComponent,
		PTToolbarComponent
	],
	imports: [
		CommonModule,
		MaterialModule
	],
	exports: [
		PTFooterComponent,
		PTSubMenuToolbarComponent,
		PTToolbarComponent
	],
	providers: []
})
export class PTCoreModule { }
