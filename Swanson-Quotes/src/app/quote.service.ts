import { Injectable } from '@angular/core';
import { Quote } from './quote';
// import { QUOTES } from './sample-quotes';
// import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  url:string = environment.serverURL;

  constructor(  private http: HttpClient,) { }

  // getQuotes(): Observable<Quote[]> {

  //   // const quotes = of(QUOTES);
  //   // return quotes;
  // }
}
