import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })

export class CommonService {

	editProfile: boolean;
	editPackage: boolean;

	constructor() 
	{
		this.editPackage = false;
		this.editProfile = false;
	}
}
