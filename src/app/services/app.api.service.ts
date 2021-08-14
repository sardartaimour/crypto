import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class ApiService
{
    protected options: any;
    protected headers: HttpHeaders;
    protected baseUrl: string;
    token: string;

    constructor(protected http: HttpClient)
    {
        this.options = {observe: 'response'};
        this.baseUrl = 'http://localhost:3000/';
        this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMTYxOTRiYWI1MWRkMDFhODUzNzFkZSIsImlhdCI6MTYyODkyNzg3NiwiZXhwIjoxNjI5MTg3MDc2fQ.R-GtQKoTFdKU9sumZObFBax9Lcd4UgWLwx2bVSiyFwc';
    }

    public post(apiSlug: string, postData: any): Promise<any>
    {
        return this.http.post<any>(this.baseUrl + apiSlug, postData, this.options)
        .toPromise().then((response: HttpResponse<any>) =>
        {
            const status = response.status;
            const result = response.body as any;
            
            if (status !== 200)
                throw result;

            return result;
        }).catch(this.handleError);
    }

    public get(apiSlug: string): Promise<any>
    {
        const headers = new HttpHeaders({
			'auth-token': this.token
		});

        return this.http.get<any>(this.baseUrl + apiSlug, { headers: headers, observe: 'response' })
        .toPromise().then((response: HttpResponse<any>) =>
        {
            const status = response.status;
            const result = response.body as any;
            if (status !== 200)
                throw result;

            return result;
        }).catch(this.handleError);
    }


    // HttpErrorResponse
    public handleError(error: any): Promise<any>
    {
        // if (error.status === 401 || error.ErrorCode === 401)
        // {
        //     window.location.replace('/Authorize');
        //     return;
        // }

        if (error instanceof HttpErrorResponse)
        {
            const err = error['error']['error'] ?? error.statusText;
            const e: any = {
                status: 'Error',
                statusCode: error.status,
                errorMessage: err
            };

            error = e;
        }

        return Promise.reject(error);
    }
}