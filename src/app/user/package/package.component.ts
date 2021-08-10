import { Component } from '@angular/core';


@Component({
	selector: 'package',
	templateUrl: './package.component.html',
	styleUrls: ['./package.component.scss']
})
export class UserPackageComponent {
	
	packages: any[] = [
		{ name: 'Bronze', price: 100},
		{ name: 'Bronze Plus', price: 120},
		{ name: 'Silver', price: 70},
		{ name: 'Silver Plus', price: 90},
		{ name: 'Gold', price: 130},
		{ name: 'Gold Plus', price: 150}
	];
}
