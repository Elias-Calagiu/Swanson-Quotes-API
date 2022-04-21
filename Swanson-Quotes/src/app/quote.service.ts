import { Injectable } from '@angular/core';
import { Quote } from './quote';
import { QUOTES } from './sample-quotes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor() { }

  getQuotes(): Observable<Quote[]> {

    const quotes = of(QUOTES);
    return quotes;
  }
}
