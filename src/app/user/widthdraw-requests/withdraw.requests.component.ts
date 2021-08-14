import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/app.api.service';


@Component({
	selector: 'admin-withdraw-requests',
	templateUrl: './withdraw.requests.component.html',
	styleUrls: ['./withdraw.requests.component.scss']
})
export class WithDrawRequestsComponent implements OnInit 
{
	data: any[];
	userId: any;

	constructor(
		private apiService: ApiService,
		private toastr: ToastrService
	)
	{
		this.data = [];
		this.userId = null;
	}

	ngOnInit() {
		this.onLoadData();
	}

	onLoadData()
	{
		this.apiService.get(`user/requests/withdraw`).then((resp: any) => {
			this.data = resp['withdraws'];
			this.userId = resp['uid'];
		}, (err: any) => {
			this.toastr.error(err['errorMessage'], err['statusCode']);
		});
	}

	onCancelRequest(d: any)
	{
		d['uid'] = this.userId;
		this.apiService.post(`user/cancelRequest`, d).then((resp: any) => {
			this.toastr.success('Withdraw request cancelled', '200');
			this.onLoadData();
		}, (err: any) => {
			this.toastr.error(err['errorMessage'], err['statusCode']);
		});
	}
}
