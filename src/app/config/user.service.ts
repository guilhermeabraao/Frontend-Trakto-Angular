import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { apiUrl } from './environment';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    private url = apiUrl;

    userLogin(data: [] = []): Observable<any> {
        return this.http.post<any>(`${this.url}/auth/signin`, data);
    }

    listDesigns(): Observable<any> {
        const token = localStorage.getItem('token')
        const reqHeader = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
        return this.http.get(`${this.url}/document?total_per_page=10&order_by=title&order_orientation=desc`, { headers: reqHeader })
    }
}