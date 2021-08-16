import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
export class UserPackageComponent implements OnInit, OnDestroy
{
	
	profile: any;
	form: FormGroup;
	selectedPackage: any;
	selectedWalletAddress: any;
	isFormSubmitted: boolean;
	
	packages: any[];
	copied: boolean;
	timer: any;
	@ViewChild('walletAddRef') walletAddRef: ElementRef<any>;

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
		this.selectedWalletAddress = null;
		this.form = this.fb.group({});
		this.packages = [];
		this.copied = false;
		this.timer = null;
	}

	ngOnInit()
	{
		this.onLoadPackages();
		this.form.addControl('tranID', new FormControl(null, [Validators.required, Validators.maxLength(70)]));
	}

	ngOnDestroy()
	{
		if (this.timer) {
			clearTimeout(this.timer);
		}
	}

	onLoadPackages()
	{
		this.apiService.get('user/fetch/package').then((resp: any) => {
			this.packages = resp;
		}, (err: any) => {
			this.toastr.error(err['errorMessage'], err['statusCode']);
		});
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
					this.profile['step'] = 'COMPLETED';
					// this.profile['isActive'] = true;
				}
			}, (err: any) => {
				this.toastr.error(err['errorMessage'], err['statusCode']);
			});
		}
	}

	copWalletAddress(containerid): void 
	{
		this.copied = false;
		if (this.selectedWalletAddress) {

			if (this.timer) {
				clearTimeout(this.timer);
			}

			const copyText = this.walletAddRef.nativeElement;
			copyText.select();
			copyText.setSelectionRange(0, 99999)
			document.execCommand("copy");
			if (document.execCommand("copy")) {
				this.copied = true;
				this.timer = setTimeout(()=> {
					this.copied = false;
				}, 1000);
			}
		}
	}

	onCancel(): void 
	{
		this.commonService.editPackage = false;
	}

	allowAlphaNumeric(event: any): boolean
	{
		let inp = String.fromCharCode(event.keyCode);

		if (/[a-zA-Z0-9]/.test(inp)) {
			return true;
		} else {
			event.preventDefault();
			return false;
		}
	}
}
