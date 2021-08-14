import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/app.api.service';


@Component({
	selector: 'admin-pending-requests',
	templateUrl: './requests.component.html',
	styleUrls: ['./requests.component.scss']
})
export class PendingRequestsComponent implements OnInit {
	
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
		this.apiService.get(`admin/requests/account`).then((resp: any) => {
			this.data = resp;
		}, (err: any) => {
			this.toastr.error(err['errorMessage'], err['statusCode']);
		});
	}

	onActiveReject(row: any, status: string = 'approve')
	{
		row['submit'] = status;
		this.apiService.post(`admin/activate`, row).then((resp: any) => {
			const m = status === 'approve' ? 'User approved' : 'User rejected';
			this.toastr.success(m, '200');
			this.onLoadData();
		}, (err: any) => {
			this.toastr.error(err['errorMessage'], err['statusCode']);
		});
	}
}
