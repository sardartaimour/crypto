import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/app.api.service';


@Component({
	selector: 'admin-add-profit',
	templateUrl: './profit.component.html',
	styleUrls: ['./profit.component.scss']
})
export class AddProfitComponent {

	profitAmount: FormControl;
	isSubmitted: boolean;
	
	constructor(
		private apiService: ApiService,
		private toastr: ToastrService
	)
	{
		this.isSubmitted = false;
		this.profitAmount = new FormControl(null, [Validators.required, Validators.min(0)]);
	}

	onAddProfit(): void
	{
		this.isSubmitted = true;
		if (this.profitAmount.valid && this.profitAmount.value > 0) {
			this.apiService.post('admin/profit', {profit: this.profitAmount.value}).then((resp: any) => {
				this.toastr.success('Profit added successfully', '200');
				this.isSubmitted = false;
				this.profitAmount.setValue(null);
			}, (err: any) => {
				this.toastr.error(err['errorMessage'], err['statusCode']);
			});
		}
	}
}
