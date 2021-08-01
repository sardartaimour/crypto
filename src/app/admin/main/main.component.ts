import { Component } from '@angular/core';


@Component({
	selector: 'admin-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})
export class MainComponent {

	menu: any[] = [
		{
			title: 'Dashboard',
			url: '/admin/dashboard'
		},
		{
			title: 'Requests',
			url: '/admin/users-requests'
		},
		{
			title: 'Add Profit',
			url: '/admin/add-profit'
		},
		{
			title: 'Withdraw Requests',
			url: '/admin/withdraw-requests'
		}
	]
	

	constructor() 
	{
	}
}
