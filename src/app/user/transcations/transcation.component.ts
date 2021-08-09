import { Component } from '@angular/core';


@Component({
	selector: 'user-transcations',
	templateUrl: './transcation.component.html',
	styleUrls: ['./transcation.component.scss']
})
export class TranscationComponent {

	isPTabSelected: boolean = true;
	data = [
		{
			userId: '999985',
			package: 'Bronze',
			transcationId: '9089786756',
			amount: 100
		},
		{
			userId: '999985',
			package: 'Bronze',
			transcationId: '9089786756',
			amount: 100
		},
		{
			userId: '999985',
			package: 'Bronze',
			transcationId: '9089786756',
			amount: 100
		},
		{
			userId: '999985',
			package: 'Bronze',
			transcationId: '9089786756',
			amount: 100
		},
		{
			userId: '999985',
			package: 'Bronze',
			transcationId: '9089786756',
			amount: 100
		},
		{
			userId: '999985',
			package: 'Bronze',
			transcationId: '9089786756',
			amount: 100
		},
		{
			userId: '999985',
			package: 'Bronze',
			transcationId: '9089786756',
			amount: 100
		},
		{
			userId: '999985',
			package: 'Bronze',
			transcationId: '9089786756',
			amount: 100
		},
		{
			userId: '999985',
			package: 'Bronze',
			transcationId: '9089786756',
			amount: 100
		},
		{
			userId: '999985',
			package: 'Bronze',
			transcationId: '9089786756',
			amount: 100
		},
		{
			userId: '999985',
			package: 'Bronze',
			transcationId: '9089786756',
			amount: 100
		},
		{
			userId: '999985',
			package: 'Bronze',
			transcationId: '9089786756',
			amount: 100
		},
		{
			userId: '999985',
			package: 'Bronze',
			transcationId: '9089786756',
			amount: 100
		},
		{
			userId: '999985',
			package: 'Bronze',
			transcationId: '9089786756',
			amount: 100
		}
	]

	onHandle(ac: 'Profit' | 'Withdraw'): void
	{
		this.isPTabSelected = ac === 'Profit' ? true : false;
	}
}
