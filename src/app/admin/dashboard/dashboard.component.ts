import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/app.api.service';

import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
	selector: 'admin-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	data: any;

	pieChartOptions: ChartOptions = {
		responsive: true,
		legend: {
			position: 'top',
		},
		plugins: {
			datalabels: {
				formatter: (value, ctx) => {
					const label = ctx.chart.data.labels[ctx.dataIndex];
					return label;
				},
			},
		}
	};
	pieChartLabels: Label[] = [];
	pieChartData: number[] = [];
	pieChartType: ChartType = 'pie';
	pieChartLegend = true;
	// pieChartPlugins = [pluginDataLabels];
	pieChartColors = [
		{
			backgroundColor: ["#0048BA", "#B0BF1A", "#7CB9E8","#C0E8D5", "#B284BE", "#72A0C1", "#56A0D3", "#ED9121", "#00563F", "#703642", "#C95A49", "#ACE1AF", "#007BA7", "#2F847C", "#B2FFFF", "#246BCE"],
		},
	];

	constructor(
		private apiService: ApiService,
		private toastr: ToastrService
	)
	{
		this.data = null;
	}

	ngOnInit() {
		this.onLoadData();
	}

	onLoadData() {
		this.apiService.get(`admin/dashboard`).then((resp: any) => {
			
			this.data = resp;
			let labels = [];
			let data = [];
			let gData = resp['graphData'] ?? [];
			for (let r of gData) {
				labels.push(r['_id']);
				data.push(r['count']);
			}

			this.pieChartLabels = labels;
			this.pieChartData = data;

		}, (err: any) => {
			this.toastr.error(err['errorMessage'], err['statusCode']);
		});
	}
}
