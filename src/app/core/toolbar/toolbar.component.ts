import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/app.api.service';
import { AppConfigService } from 'src/app/services/app.config.service';


@Component({
	selector: 'pt-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class PTToolbarComponent {

	constructor(
		private apiService: ApiService,
		private toastr: ToastrService,
		private configService: AppConfigService
	)
	{}

	onLogout()
	{
		this.apiService.get(`logout`).then((resp: any) => {
		
		}, (err: any) => {
			if (err['statusCode'] !== 302 && err['statusCode'] !== 200)
				this.toastr.error(err['errorMessage'], err['statusCode']);
		});
	}

	get username(): string
	{
		return this.configService._profile['name'] ?? '';
	}
	
}
