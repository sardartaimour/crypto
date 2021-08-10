import { Component } from '@angular/core';
import { CommonService } from 'src/app/common.service';


@Component({
	selector: 'user-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})
export class MainComponent {

	menu: any[] = [
		{
			title: 'Dashboard',
			url: '/user/dashboard'
		},
		{
			title: 'Transcations',
			url: '/user/transcations'
		},
		{
			title: 'My Network',
			url: '/user/my-network'
		},
		{
			title: 'Withdraw Requests',
			url: '/user/withdraw-requests'
		}
	]
	

	constructor(private commonService: CommonService) 
	{
	}

	get isRoutingEnabled(): boolean
	{
		return !this.commonService.editProfile && !this.commonService.editPackage ? true : false;
	}


	get editProfile(): boolean
	{
		return this.commonService.editProfile;
	}

	get editPackage(): boolean
	{
		return this.commonService.editPackage;
	}
}
