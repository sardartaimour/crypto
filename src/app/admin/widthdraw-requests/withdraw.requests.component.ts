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

	constructor(
		private apiService: ApiService,
		private toastr: ToastrService
	)
	{
		this.data = [];
	}

	ngOnInit()
	{
		this.onLoadData();
	}

	onLoadData()
	{
		this.apiService.get(`admin/requests/withdraw`).then((resp: any) => {
			this.data = resp;
		}, (err: any) => {
			this.toastr.error(err['errorMessage'], err['statusCode']);
		});
	}

	onActiveReject(row: any, status: string = 'approve')
	{
		row['submit'] = status;
		this.apiService.post(`admin/requests/withdraw`, row).then((resp: any) => {
			const m = status === 'approve' ? 'Withdraw request approved' : 'Withdraw request rejected';
			this.toastr.success(m, '200');
			this.onLoadData();
		}, (err: any) => {
			this.toastr.error(err['errorMessage'], err['statusCode']);
		});
	}
}
