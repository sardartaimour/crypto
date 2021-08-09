import { Component, Input } from '@angular/core';


@Component({
	selector: 'pt-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class PTFooterComponent {
	@Input() isUserFooter: boolean = false;
}
