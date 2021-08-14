import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfigService } from './services/app.config.service';


export function ConfigFactoryProvider(configService: AppConfigService)
{
    return () => configService.loadConfig();
}


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot()
	],
	providers: [
		{
			provide: LocationStrategy, 
			useClass: HashLocationStrategy 
		},
		{
			provide: APP_INITIALIZER,
			useFactory: ConfigFactoryProvider,
			deps: [AppConfigService],
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
