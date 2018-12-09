import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Claim } from '../models/claim';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {
private headers;
  constructor(private http: Http) { }

  getHeaders() {
    this.headers = new Headers({
      'Content-Type': 'application/json'     
    });
    return this.headers;
  }

  saveData(claim: Claim){
     const url = 'http://localhost:3000/claims';

      return this.http.post(url, JSON.stringify(claim), { headers: this.getHeaders() } )
      .pipe(
        map((response) => {
          return of(response.status);
        }),
        catchError((error) => {
          console.error('Error in running saving data:', error.status);
          return of(null);
        })
      );
  }
}
