import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/app.api.service';
import { AppConfigService } from 'src/app/services/app.config.service';
import { CommonService } from 'src/app/services/common.service';



@Component({
	selector: 'admin-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	data: any;
	isSubmitted: boolean;
	withdrawAmount: FormControl;

	constructor(
		private commonService: CommonService,
		private apiService: ApiService,
		private toastr: ToastrService,
		private configService: AppConfigService
	)
	{
		this.data = null;
		this.isSubmitted = false;
		this.withdrawAmount = new FormControl(null, [Validators.required, Validators.min(10)]);
	}

	ngOnInit()
	{
		this.onLoadData();
		// this.apiService.post('login', {email: "taimour@email.com", password: "pass1234"}).then((resp: any) => {
			
		// })
	}

	onLoadData(): void
	{
		this.apiService.get('user/dashboard').then((resp: any) => {
			this.data = resp;
		}, (err: any) => {
			this.toastr.error(err['errorMessage'], err['statusCode']);
		});
	}

	withdrawRequest(): void
	{
		this.isSubmitted = true;
		if (this.withdrawAmount.valid) {
			this.apiService.post('user/withdraw', {amount: this.withdrawAmount.value, uid: this.configService.uuid}).then((resp: any) => {
				this.toastr.success('Withdraw requested submitted', '200');
				this.isSubmitted = false;
			}, (err: any) => {
				this.toastr.error(err['errorMessage'], err['statusCode']);
			});
		}
	}

	onUpdateProfile() {
		this.commonService.editPackage = false;
		this.commonService.editProfile = true;
	}

	onUpdatePackage() {
		this.commonService.editProfile = false;
		this.commonService.editPackage = true;
	}
	
}
