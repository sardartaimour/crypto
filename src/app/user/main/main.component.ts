import { Component } from '@angular/core';
import { AppConfigService } from 'src/app/services/app.config.service';
import { CommonService } from 'src/app/services/common.service';


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
	

	constructor(
		private commonService: CommonService,
		private configService: AppConfigService
	) 
	{
	}

	get isRoutingEnabled(): boolean
	{
		return this.isActive ? ( !this.commonService.editProfile && !this.commonService.editPackage ? true : false) : this.isActive;
	}

	get editProfile(): boolean
	{
		const p = this.configService._profile;
		return this.isActive ? this.commonService.editProfile : (p && p.hasOwnProperty('step') && p.step === 'PROFILE' ? true : false);
	}

	get editPackage(): boolean
	{
		const p = this.configService._profile;
		return this.isActive ? this.commonService.editPackage : (p && p.hasOwnProperty('step') && p.step === 'PACKAGE' ? true : false);
	}

	get isActive(): boolean
	{
		const p = this.configService._profile;
		return p && p.hasOwnProperty('isActive') && p['isActive'];
	}
}
