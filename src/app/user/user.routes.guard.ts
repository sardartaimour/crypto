import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class UserRoutesGuard implements CanActivate
{
    constructor(public router: Router)
    { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
    {
        return true;
    }
}