import { Component } from '@angular/core';


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
	

	constructor() 
	{
	}
}
