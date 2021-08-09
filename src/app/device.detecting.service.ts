import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';


@Injectable({ providedIn: 'root' })

export class AppDeviceDetectorService {

	isMobile: boolean;
	isTablet: boolean;
	isDesktop: boolean;

	constructor(private deviceService: DeviceDetectorService) {
		this.isMobile = this.deviceService.isMobile();
		this.isTablet = this.deviceService.isTablet();
		this.isDesktop = this.deviceService.isDesktop();
	}

	updateDevice() {
		this.isMobile = this.deviceService.isMobile();
		this.isTablet = this.deviceService.isTablet();
		this.isDesktop = this.deviceService.isDesktop();
	}
}
