import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { FacebookService, InitParams } from 'ngx-facebook';

import { AppDeviceDetectorService } from './device.detecting.service';
import { AppSplashScreenService } from './services/splash.screen.service';
import { AppConfigService } from './services/app.config.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy
{
	title = 'crypto';
	resizeSubscription$: Subscription;

	constructor(
		private deviceService: AppDeviceDetectorService,
		private splashScreenService: AppSplashScreenService,
		private facebookService: FacebookService,
		private configService: AppConfigService
	)
	{
		this.resizeSubscription$ = null;
	}

	ngOnInit()
	{
		const resizeObservable$ = fromEvent(window, 'resize');
		this.resizeSubscription$ = resizeObservable$.subscribe( evt => {
			console.log('event: ', evt)
			this.deviceService.updateDevice();
		});

		this.initFacebookService();
	}

	ngOnDestroy() 
	{
		if (this.resizeSubscription$) {
			this.resizeSubscription$.unsubscribe();
			this.resizeSubscription$ = null;
		}
	}

	get isUser(): boolean
	{
		const p = this.configService._profile;
		return p && p.hasOwnProperty('role') && p['role'] && p['role'].toLowerCase() === 'user';
	}

	private initFacebookService(): void {
		const initParams: InitParams = { xfbml:true, version:'v3.2'};
		this.facebookService.init(initParams);
	}
}
