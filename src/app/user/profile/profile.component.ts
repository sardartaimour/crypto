import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/app.api.service';
import { AppConfigService } from 'src/app/services/app.config.service';
import { CommonService } from 'src/app/services/common.service';


@Component({
	selector: 'user-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class UserProfileComponent implements OnInit
{
	profile: any;
	form: FormGroup;
	isFormSubmitted: boolean;

	constructor(
		private configService: AppConfigService,
		private apiService: ApiService,
		private toastr: ToastrService,
		private commonService: CommonService,
		private fb: FormBuilder
	)
	{
		this.profile = this.configService._profile;
		this.isFormSubmitted = false;
		this.form = this.fb.group({});
	}

	ngOnInit()
	{
		this.form.addControl('uid', new FormControl(null, [Validators.required]));
		this.form.addControl('wAddress', new FormControl(null, [Validators.required]));
		this.form.addControl('phone', new FormControl(null, [Validators.required]));
		this.form.addControl('country', new FormControl(null, [Validators.required]));

		this.form.patchValue(this.profile);
	}

	updateProfile(): void
	{
		this.isFormSubmitted = true;
		if (this.form.valid) {
			this.apiService.post('user/profile', this.form.value).then((resp: any) => {
				this.toastr.success('profile submitted', '200');
				this.isFormSubmitted = false;
				if (this.profile && this.profile.hasOwnProperty('isActive') && !this.profile['isActive']) {
					this.profile['step'] = 'PACKAGE';
				}
			}, (err: any) => {
				this.toastr.error(err['errorMessage'], err['statusCode']);
			});
		}
	}

	onCancel(): void 
	{
		this.commonService.editProfile = false;
	}

}
