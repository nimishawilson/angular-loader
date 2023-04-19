import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private countries = 'https://restcountries.com/v3.1/all';
  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get(this.countries);
  }
  
}
