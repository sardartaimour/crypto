import { Component, Input } from '@angular/core';
import { AppDeviceDetectorService } from 'src/app/device.detecting.service';
import { AppConfigService } from 'src/app/services/app.config.service';


@Component({
	selector: 'pt-sub-toolbar',
	templateUrl: './sub.menu.toolbar.component.html',
	styleUrls: ['./sub.menu.toolbar.component.scss']
})
export class PTSubMenuToolbarComponent {

	@Input() showBalance: boolean = false;

	constructor(
		private deviceService: AppDeviceDetectorService,
		private configService: AppConfigService
	) {}

	get isSmallDevices(): boolean
	{
		return this.deviceService.isDesktop ? false : true;
	}

	get balance()
	{
		return this.configService._profile.balance ?? '0.00';
	}
}
