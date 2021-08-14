import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/app.api.service';


@Component({
	selector: 'user-transcations',
	templateUrl: './transcation.component.html',
	styleUrls: ['./transcation.component.scss']
})
export class TranscationComponent implements OnInit
{
	isPTabSelected: boolean = true;
	data: any[];

	constructor(
		private apiService: ApiService,
		private toastr: ToastrService
	) 
	{
		this.data = [];
	}

	ngOnInit(): void
	{
		this.onHandle('Profit');
	}

	onHandle(ac: 'Profit' | 'Withdraw'): void
	{
		this.isPTabSelected = ac === 'Profit' ? true : false;
		const url = this.isPTabSelected ? 'profit/history' : 'withdraw/history';

		this.apiService.get(`user/transactions/${url}`).then((resp: any) => {
			this.data = this.isPTabSelected ? resp['profit'] : resp['withdraws'];
		}, (err: any) => {
			this.toastr.error(err['errorMessage'], err['statusCode']);
		});
	}
}
