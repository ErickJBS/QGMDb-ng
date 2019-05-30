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

  getMovieCatalog(lower: number, upper: number) {
    const params = {
      lower: lower,
      upper: upper
    };
    return this.getRequestPromise('catalog', params);
  }

  getCatalogSize() {
    return this.getRequestPromise('length', null);
  }

  getMovieDetails(id: number) {
    const params = { id: id };
    return this.getRequestPromise('movie/details', params);
  }

  getMovieGenres(id: number) {
    const params = { id: id };
    return this.getRequestPromise('movie/genres', params);
  }

  getMoviePeople(id: number) {
    const params = { id: id };
    return this.getRequestPromise('movie/people', params);
  }

  getMovieReviews(id: number) {
    const params = { id: id };
    return this.getRequestPromise('reviews', params);
  }

  publishReview(user: string, movie: number, rating: number, content: string) {

  }

  private getRequestPromise(route: string, params: any) {
    const url = `${environment.apiServer}/${route}`;
    return this.http.get<any>(url, { params });
  }
}
