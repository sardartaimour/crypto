import { Component } from '@angular/core';
import { CommonService } from 'src/app/common.service';


@Component({
	selector: 'admin-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

	constructor(private commonService: CommonService)
	{}

	onUpdateProfile() {
		this.commonService.editPackage = false;
		this.commonService.editProfile = true;
	}

	onUpdatePackage() {
		this.commonService.editProfile = false;
		this.commonService.editPackage = true;
	}
	
}
