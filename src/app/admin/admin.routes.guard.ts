import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AdminRoutesGuard implements CanActivate
{
    constructor(public router: Router)
    { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
    {
        return true;
        // const token = localStorage.getItem('token');
        // if (token) {
        //     return true;
        // }
        // else {
        //     console.log('else case ')
        //     localStorage.clear();
        //    return false;
        // }
    }
}