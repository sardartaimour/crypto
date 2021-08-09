import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { AppDeviceDetectorService } from './device.detecting.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy
{
	title = 'crypto';
	resizeSubscription$: Subscription;

	constructor(private deviceService: AppDeviceDetectorService)
	{
		this.resizeSubscription$ = null;
	}

	ngOnInit()
	{
		const resizeObservable$ = fromEvent(window, 'resize');
		this.resizeSubscription$ = resizeObservable$.subscribe( evt => {
			console.log('event: ', evt)
			this.deviceService.updateDevice();
		})
	}

	ngOnDestroy() 
	{
		if (this.resizeSubscription$) {
			this.resizeSubscription$.unsubscribe();
			this.resizeSubscription$ = null;
		}
	}
}
