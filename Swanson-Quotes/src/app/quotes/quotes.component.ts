import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { QUOTES } from '../sample-quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quote = QUOTES;
  searchTerm: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  searchQuotes(search:string){
    this.searchTerm = search;
  }

}
