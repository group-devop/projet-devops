import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {
  private apiUrl = 'https://api.coinbase.com/v2/exchange-rates';
  constructor(private http: HttpClient) {}
  getConversionRates(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
