import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/app.api.service';


@Component({
	selector: 'admin-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit
{
	data: any;
	constructor(
		private apiService: ApiService,
		private toastr: ToastrService
	)
	{
		this.data = null;
	}

	ngOnInit()
	{
		this.onLoadData();
	}

	onLoadData()
	{
		this.apiService.get(`admin/dashboard`).then((resp: any) => {
			this.data = resp;
		}, (err: any) => {
			this.toastr.error(err['errorMessage'], err['statusCode']);
		});
	}
}
