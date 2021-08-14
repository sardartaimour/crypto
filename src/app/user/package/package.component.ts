import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/app.api.service';
import { AppConfigService } from 'src/app/services/app.config.service';
import { CommonService } from 'src/app/services/common.service';


@Component({
	selector: 'package',
	templateUrl: './package.component.html',
	styleUrls: ['./package.component.scss']
})
export class UserPackageComponent implements OnInit
{
	
	profile: any;
	form: FormGroup;
	selectedPackage: any;
	isFormSubmitted: boolean;
	
	packages: any[] = [
		{ name: 'Bronze', price: 100, subPrice: 5},
		{ name: 'Bronze Plus', price: 120, subPrice: 5},
		{ name: 'Silver', price: 70, subPrice: 5},
		{ name: 'Silver Plus', price: 90, subPrice: 5},
		{ name: 'Gold', price: 130, subPrice: 5},
		{ name: 'Gold Plus', price: 150, subPrice: 5}
	];

	constructor(private configService: AppConfigService,
		private commonService: CommonService,
		private apiService: ApiService,
		private toastr: ToastrService,
		private fb: FormBuilder
	)
	{
		this.profile = this.configService._profile;
		this.isFormSubmitted = false;
		this.selectedPackage = null;
		this.form = this.fb.group({});
	}

	ngOnInit()
	{
		this.form.addControl('tranID', new FormControl(null, [Validators.required]));
	}

	updatePackage(): void
	{
		this.isFormSubmitted = true;
		if (!this.selectedPackage) {
			this.toastr.error('Please select package', 'Error');
			return;
		}

		if (this.form.valid && this.selectedPackage) {
			const payload = {
				uid: this.profile.uid,
				_package: this.selectedPackage['name'],
				tranID: this.form.controls.tranID.value
			}
			this.apiService.post('user/package', payload).then((resp: any) => {
				this.toastr.success('Purchase requested successfully!', '200');
				this.isFormSubmitted = false;
				if (this.profile && this.profile.hasOwnProperty('isActive') && !this.profile['isActive']) {
					this.profile['step'] = 'COMPLETE';
					this.profile['isActive'] = true;
				}
			}, (err: any) => {
				this.toastr.error(err['errorMessage'], err['statusCode']);
			});
		}
	}

	onCancel(): void 
	{
		this.commonService.editPackage = false;
	}
}
