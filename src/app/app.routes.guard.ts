import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppConfigService } from './services/app.config.service';


@Injectable(
    {providedIn: 'root'}
)
export class AdminRoutesGuard implements CanLoad
{
    constructor(
        public router: Router, 
        private configService: AppConfigService
    )
    { }

    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        console.log('Route ' , route)
        const role = route.data['role'];
        const logedInUserRole = this.configService._profile && this.configService._profile['role'];
        if (role === logedInUserRole) {

            // let route = role === 'admin' ? 'admin/dashboard' : 'user/dashboard';
            // console.log('User=> ', role, logedInUserRole)
            // if (role === 'User' && route['path'].includes('admin')) {
            //     this.router.navigate(['/user/dashboard']);
            // }
            // console.log('User=> ', role, logedInUserRole)
            return true;
        }
        else {
            if (logedInUserRole === 'User' && !route['path'].includes('user')) {
                this.router.navigateByUrl('user/dashboard');
                return true;
            }
            else if(logedInUserRole === 'admin' && !route['path'].includes('admin')) {
                this.router.navigateByUrl('admin/dashboard');
                return true;
            }
        }

        return false;
    }
}