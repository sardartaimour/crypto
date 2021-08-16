import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ApiService } from 'src/app/services/app.api.service';
import { AppConfigService } from 'src/app/services/app.config.service';
import { CommonService } from 'src/app/services/common.service';


@Component({
	selector: 'user-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class UserProfileComponent implements OnInit {
	profile: any;
	form: FormGroup;
	options: any[];
	filteredOptions: Observable<any[]>;
	isFormSubmitted: boolean;

	constructor(
		private configService: AppConfigService,
		private apiService: ApiService,
		private toastr: ToastrService,
		private commonService: CommonService,
		private fb: FormBuilder
	) {
		this.profile = this.configService._profile;
		this.isFormSubmitted = false;
		this.form = this.fb.group({});

		this.options = [
			{ value: `Afghanistan`, title: `Afghanistan` },
			{ value: `Åland Islands`, title: `Åland Islands` },
			{ value: `Albania`, title: `Albania` },
			{ value: `Algeria`, title: `Algeria` },
			{ value: `American Samoa`, title: `American Samoa` },
			{ value: `Andorra`, title: `Andorra` },
			{ value: `Angola`, title: `Angola` },
			{ value: `Anguilla`, title: `Anguilla` },
			{ value: `Antarctica`, title: `Antarctica` },
			{ value: `Antigua and Barbuda`, title: `Antigua and Barbuda` },
			{ value: `Argentina`, title: `Argentina` },
			{ value: `Armenia`, title: `Armenia` },
			{ value: `Aruba`, title: `Aruba` },
			{ value: `Australia`, title: `Australia` },
			{ value: `Austria`, title: `Austria` },
			{ value: `Azerbaijan`, title: `Azerbaijan` },
			{ value: `Bahamas`, title: `Bahamas` },
			{ value: `Bahrain`, title: `Bahrain` },
			{ value: `Bangladesh`, title: `Bangladesh` },
			{ value: `Barbados`, title: `Barbados` },
			{ value: `Belarus`, title: `Belarus` },
			{ value: `Belgium`, title: `Belgium` },
			{ value: `Belize`, title: `Belize` },
			{ value: `Benin`, title: `Benin` },
			{ value: `Bermuda`, title: `Bermuda` },
			{ value: `Bhutan`, title: `Bhutan` },
			{ value: `Bolivia`, title: `Bolivia` },
			{ value: `Bosnia and Herzegovina`, title: `Bosnia and Herzegovina` },
			{ value: `Botswana`, title: `Botswana` },
			{ value: `Bouvet Island`, title: `Bouvet Island` },
			{ value: `Brazil`, title: `Brazil` },
			{ value: `British Indian Ocean Territory`, title: `British Indian Ocean Territory` },
			{ value: `Brunei Darussalam`, title: `Brunei Darussalam` },
			{ value: `Bulgaria`, title: `Bulgaria` },
			{ value: `Burkina Faso`, title: `Burkina Faso` },
			{ value: `Burundi`, title: `Burundi` },
			{ value: `Cambodia`, title: `Cambodia` },
			{ value: `Cameroon`, title: `Cameroon` },
			{ value: `Canada`, title: `Canada` },
			{ value: `Cape Verde`, title: `Cape Verde` },
			{ value: `Cayman Islands`, title: `Cayman Islands` },
			{ value: `Central African Republic`, title: `Central African Republic` },
			{ value: `Chad`, title: `Chad` },
			{ value: `Chile`, title: `Chile` },
			{ value: `China`, title: `China` },
			{ value: `Christmas Island`, title: `Christmas Island` },
			{ value: `Cocos (Keeling) Islands`, title: `Cocos (Keeling) Islands` },
			{ value: `Colombia`, title: `Colombia` },
			{ value: `Comoros`, title: `Comoros` },
			{ value: `Congo`, title: `Congo` },
			{ value: `Congo, The Democratic Republic of The`, title: `Congo, The Democratic Republic of The` },
			{ value: `Cook Islands`, title: `Cook Islands` },
			{ value: `Costa Rica`, title: `Costa Rica` },
			{ value: `Cote D'ivoire`, title: `Cote D'ivoire` },
			{ value: `Croatia`, title: `Croatia` },
			{ value: `Cuba`, title: `Cuba` },
			{ value: `Cyprus`, title: `Cyprus` },
			{ value: `Czech Republic`, title: `Czech Republic` },
			{ value: `Denmark`, title: `Denmark` },
			{ value: `Djibouti`, title: `Djibouti` },
			{ value: `Dominica`, title: `Dominica` },
			{ value: `Dominican Republic`, title: `Dominican Republic` },
			{ value: `Ecuador`, title: `Ecuador` },
			{ value: `Egypt`, title: `Egypt` },
			{ value: `El Salvador`, title: `El Salvador` },
			{ value: `Equatorial Guinea`, title: `Equatorial Guinea` },
			{ value: `Eritrea`, title: `Eritrea` },
			{ value: `Estonia`, title: `Estonia` },
			{ value: `Ethiopia`, title: `Ethiopia` },
			{ value: `Falkland Islands (Malvinas)`, title: `Falkland Islands (Malvinas)` },
			{ value: `Faroe Islands`, title: `Faroe Islands` },
			{ value: `Fiji`, title: `Fiji` },
			{ value: `Finland`, title: `Finland` },
			{ value: `France`, title: `France` },
			{ value: `French Guiana`, title: `French Guiana` },
			{ value: `French Polynesia`, title: `French Polynesia` },
			{ value: `French Southern Territories`, title: `French Southern Territories` },
			{ value: `Gabon`, title: `Gabon` },
			{ value: `Gambia`, title: `Gambia` },
			{ value: `Georgia`, title: `Georgia` },
			{ value: `Germany`, title: `Germany` },
			{ value: `Ghana`, title: `Ghana` },
			{ value: `Gibraltar`, title: `Gibraltar` },
			{ value: `Greece`, title: `Greece` },
			{ value: `Greenland`, title: `Greenland` },
			{ value: `Grenada`, title: `Grenada` },
			{ value: `Guadeloupe`, title: `Guadeloupe` },
			{ value: `Guam`, title: `Guam` },
			{ value: `Guatemala`, title: `Guatemala` },
			{ value: `Guernsey`, title: `Guernsey` },
			{ value: `Guinea`, title: `Guinea` },
			{ value: `Guinea-bissau`, title: `Guinea-bissau` },
			{ value: `Guyana`, title: `Guyana` },
			{ value: `Haiti`, title: `Haiti` },
			{ value: `Heard Island and Mcdonald Islands`, title: `Heard Island and Mcdonald Islands` },
			{ value: `Holy See (Vatican City State)`, title: `Holy See (Vatican City State)` },
			{ value: `Honduras`, title: `Honduras` },
			{ value: `Hong Kong`, title: `Hong Kong` },
			{ value: `Hungary`, title: `Hungary` },
			{ value: `Iceland`, title: `Iceland` },
			{ value: `India`, title: `India` },
			{ value: `Indonesia`, title: `Indonesia` },
			{ value: `Iran, Islamic Republic of`, title: `Iran, Islamic Republic of` },
			{ value: `Iraq`, title: `Iraq` },
			{ value: `Ireland`, title: `Ireland` },
			{ value: `Isle of Man`, title: `Isle of Man` },
			{ value: `Israel`, title: `Israel` },
			{ value: `Italy`, title: `Italy` },
			{ value: `Jamaica`, title: `Jamaica` },
			{ value: `Japan`, title: `Japan` },
			{ value: `Jersey`, title: `Jersey` },
			{ value: `Jordan`, title: `Jordan` },
			{ value: `Kazakhstan`, title: `Kazakhstan` },
			{ value: `Kenya`, title: `Kenya` },
			{ value: `Kiribati`, title: `Kiribati` },
			{ value: `Korea, Democratic People's Republic of`, title: `Korea, Democratic People's Republic of` },
			{ value: `Korea, Republic of`, title: `Korea, Republic of` },
			{ value: `Kuwait`, title: `Kuwait` },
			{ value: `Kyrgyzstan`, title: `Kyrgyzstan` },
			{ value: `Lao People's Democratic Republic`, title: `Lao People's Democratic Republic` },
			{ value: `Latvia`, title: `Latvia` },
			{ value: `Lebanon`, title: `Lebanon` },
			{ value: `Lesotho`, title: `Lesotho` },
			{ value: `Liberia`, title: `Liberia` },
			{ value: `Libyan Arab Jamahiriya`, title: `Libyan Arab Jamahiriya` },
			{ value: `Liechtenstein`, title: `Liechtenstein` },
			{ value: `Lithuania`, title: `Lithuania` },
			{ value: `Luxembourg`, title: `Luxembourg` },
			{ value: `Macao`, title: `Macao` },
			{ value: `Macedonia, The Former Yugoslav Republic of`, title: `Macedonia, The Former Yugoslav Republic of` },
			{ value: `Madagascar`, title: `Madagascar` },
			{ value: `Malawi`, title: `Malawi` },
			{ value: `Malaysia`, title: `Malaysia` },
			{ value: `Maldives`, title: `Maldives` },
			{ value: `Mali`, title: `Mali` },
			{ value: `Malta`, title: `Malta` },
			{ value: `Marshall Islands`, title: `Marshall Islands` },
			{ value: `Martinique`, title: `Martinique` },
			{ value: `Mauritania`, title: `Mauritania` },
			{ value: `Mauritius`, title: `Mauritius` },
			{ value: `Mayotte`, title: `Mayotte` },
			{ value: `Mexico`, title: `Mexico` },
			{ value: `Micronesia, Federated States of`, title: `Micronesia, Federated States of` },
			{ value: `Moldova, Republic of`, title: `Moldova, Republic of` },
			{ value: `Monaco`, title: `Monaco` },
			{ value: `Mongolia`, title: `Mongolia` },
			{ value: `Montenegro`, title: `Montenegro` },
			{ value: `Montserrat`, title: `Montserrat` },
			{ value: `Morocco`, title: `Morocco` },
			{ value: `Mozambique`, title: `Mozambique` },
			{ value: `Myanmar`, title: `Myanmar` },
			{ value: `Namibia`, title: `Namibia` },
			{ value: `Nauru`, title: `Nauru` },
			{ value: `Nepal`, title: `Nepal` },
			{ value: `Netherlands`, title: `Netherlands` },
			{ value: `Netherlands Antilles`, title: `Netherlands Antilles` },
			{ value: `New Caledonia`, title: `New Caledonia` },
			{ value: `New Zealand`, title: `New Zealand` },
			{ value: `Nicaragua`, title: `Nicaragua` },
			{ value: `Niger`, title: `Niger` },
			{ value: `Nigeria`, title: `Nigeria` },
			{ value: `Niue`, title: `Niue` },
			{ value: `Norfolk Island`, title: `Norfolk Island` },
			{ value: `Northern Mariana Islands`, title: `Northern Mariana Islands` },
			{ value: `Norway`, title: `Norway` },
			{ value: `Oman`, title: `Oman` },
			{ value: `Pakistan`, title: `Pakistan` },
			{ value: `Palau`, title: `Palau` },
			{ value: `Palestinian Territory, Occupied`, title: `Palestinian Territory, Occupied` },
			{ value: `Panama`, title: `Panama` },
			{ value: `Papua New Guinea`, title: `Papua New Guinea` },
			{ value: `Paraguay`, title: `Paraguay` },
			{ value: `Peru`, title: `Peru` },
			{ value: `Philippines`, title: `Philippines` },
			{ value: `Pitcairn`, title: `Pitcairn` },
			{ value: `Poland`, title: `Poland` },
			{ value: `Portugal`, title: `Portugal` },
			{ value: `Puerto Rico`, title: `Puerto Rico` },
			{ value: `Qatar`, title: `Qatar` },
			{ value: `Reunion`, title: `Reunion` },
			{ value: `Romania`, title: `Romania` },
			{ value: `Russian Federation`, title: `Russian Federation` },
			{ value: `Rwanda`, title: `Rwanda` },
			{ value: `Saint Helena`, title: `Saint Helena` },
			{ value: `Saint Kitts and Nevis`, title: `Saint Kitts and Nevis` },
			{ value: `Saint Lucia`, title: `Saint Lucia` },
			{ value: `Saint Pierre and Miquelon`, title: `Saint Pierre and Miquelon` },
			{ value: `Saint Vincent and The Grenadines`, title: `Saint Vincent and The Grenadines` },
			{ value: `Samoa`, title: `Samoa` },
			{ value: `San Marino`, title: `San Marino` },
			{ value: `Sao Tome and Principe`, title: `Sao Tome and Principe` },
			{ value: `Saudi Arabia`, title: `Saudi Arabia` },
			{ value: `Senegal`, title: `Senegal` },
			{ value: `Serbia`, title: `Serbia` },
			{ value: `Seychelles`, title: `Seychelles` },
			{ value: `Sierra Leone`, title: `Sierra Leone` },
			{ value: `Singapore`, title: `Singapore` },
			{ value: `Slovakia`, title: `Slovakia` },
			{ value: `Slovenia`, title: `Slovenia` },
			{ value: `Solomon Islands`, title: `Solomon Islands` },
			{ value: `Somalia`, title: `Somalia` },
			{ value: `South Africa`, title: `South Africa` },
			{ value: `South Georgia and The South Sandwich Islands`, title: `South Georgia and The South Sandwich Islands` },
			{ value: `Spain`, title: `Spain` },
			{ value: `Sri Lanka`, title: `Sri Lanka` },
			{ value: `Sudan`, title: `Sudan` },
			{ value: `Suriname`, title: `Suriname` },
			{ value: `Svalbard and Jan Mayen`, title: `Svalbard and Jan Mayen` },
			{ value: `Swaziland`, title: `Swaziland` },
			{ value: `Sweden`, title: `Sweden` },
			{ value: `Switzerland`, title: `Switzerland` },
			{ value: `Syrian Arab Republic`, title: `Syrian Arab Republic` },
			{ value: `Taiwan`, title: `Taiwan` },
			{ value: `Tajikistan`, title: `Tajikistan` },
			{ value: `Tanzania, United Republic of`, title: `Tanzania, United Republic of` },
			{ value: `Thailand`, title: `Thailand` },
			{ value: `Timor-leste`, title: `Timor-leste` },
			{ value: `Togo`, title: `Togo` },
			{ value: `Tokelau`, title: `Tokelau` },
			{ value: `Tonga`, title: `Tonga` },
			{ value: `Trinidad and Tobago`, title: `Trinidad and Tobago` },
			{ value: `Tunisia`, title: `Tunisia` },
			{ value: `Turkey`, title: `Turkey` },
			{ value: `Turkmenistan`, title: `Turkmenistan` },
			{ value: `Turks and Caicos Islands`, title: `Turks and Caicos Islands` },
			{ value: `Tuvalu`, title: `Tuvalu` },
			{ value: `Uganda`, title: `Uganda` },
			{ value: `Ukraine`, title: `Ukraine` },
			{ value: `United Arab Emirates`, title: `United Arab Emirates` },
			{ value: `United Kingdom`, title: `United Kingdom` },
			{ value: `United States`, title: `United States` },
			{ value: `United States Minor Outlying Islands`, title: `United States Minor Outlying Islands` },
			{ value: `Uruguay`, title: `Uruguay` },
			{ value: `Uzbekistan`, title: `Uzbekistan` },
			{ value: `Vanuatu`, title: `Vanuatu` },
			{ value: `Venezuela`, title: `Venezuela` },
			{ value: `Viet Nam`, title: `Viet Nam` },
			{ value: `Virgin Islands, British`, title: `Virgin Islands, British` },
			{ value: `Virgin Islands, U.S.`, title: `Virgin Islands, U.S.` },
			{ value: `Wallis and Futuna`, title: `Wallis and Futuna` },
			{ value: `Western Sahara`, title: `Western Sahara` },
			{ value: `Yemen`, title: `Yemen` },
			{ value: `Zambia`, title: `Zambia` },
			{ value: `Zimbabwe`, title: `Zimbabwe` },
		]
	}

	ngOnInit() {
		this.form.addControl('uid', new FormControl(null, [Validators.required]));
		this.form.addControl('wAddress', new FormControl(null, [Validators.required, Validators.minLength(26), Validators.maxLength(65)]));
		this.form.addControl('phone', new FormControl(null, [Validators.required, Validators.pattern("[0-9]{3}-[0-9]")]));
		this.form.addControl('country', new FormControl('Pakistan', [Validators.required]));

		if (this.profile) {
			this.form.patchValue(this.profile);
		}
		
		this.filteredOptions = this.form.controls.country.valueChanges
			.pipe(
				startWith(''),
				map(value => this._filter(value))
			);
	}

	updateProfile(): void {
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

	onCancel(): void {
		this.commonService.editProfile = false;
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

	private _filter(value: string): string[] {
		const filterValue = value.toLowerCase();
		return this.options.filter(option => option.value.toLowerCase().includes(filterValue));
	}

}
