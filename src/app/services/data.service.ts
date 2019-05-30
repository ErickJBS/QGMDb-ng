import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getFunctions(lower: number, upper: number) {
    const params = {
      lower: lower,
      upper: upper
    };
    return this.getRequestPromise('shows', params);
  }

  private getRequestPromise(route: string, params: any) {
    const url = `${environment.apiServer}/${route}`;
    console.log(url);
    return this.http.get<any>(url, { params });
  }
}
