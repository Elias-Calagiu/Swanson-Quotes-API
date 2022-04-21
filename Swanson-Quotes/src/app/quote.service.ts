import { Injectable } from '@angular/core';
import { Quote } from './quote';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  url:string = environment.serverURL;

  constructor(  private http: HttpClient,) { }

  

}