import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppConfigService
{
    private profile: any

    constructor(private http: HttpClient)
    {
        this.profile = null;
    }

    public loadConfig(): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {   
            const headers: HttpHeaders = new HttpHeaders({
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMTgxODllN2NlYmI4MzNmYzFlMGU4MyIsImlhdCI6MTYyODk3Mzc2OCwiZXhwIjoxNjI5MjMyOTY4fQ.NjGyB1SMyRvM7z5m8Ta1YEyFyJ2IGHOAipEjPViQEv0'
            });

            this.http.get(`http://localhost:3000/user/profile`, 
                { headers: headers, observe: 'response' })
            .subscribe((resp: HttpResponse<any>) => {
                
                const status = resp.status;
                const response = resp.body as any;
                if (status === 200) {
                    this.profile = response;
                    resolve(resp);
                }
                else {
                    reject(resp);
                }
            },(err: HttpErrorResponse) => {

                if (err instanceof HttpErrorResponse && err?.status === 401) {
                    
                }
                const e: any = err && err.hasOwnProperty('error') ? err.error : null;
                console.log('config file api e-> ', e)
                reject(e);
            });
        });
    }

    get _profile(): any
    {
        return this.profile;
    }

    get uuid(): string
    {
        return this.profile && this.profile.hasOwnProperty('uuid') ? this.profile['uuid'] : null;
    }
}
