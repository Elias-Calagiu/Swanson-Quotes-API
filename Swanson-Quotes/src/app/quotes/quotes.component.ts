import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { QUOTES } from '../sample-quotes';
import { QuoteService } from '../quote.service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = [];
  searchTerm: string = '';

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
    this.getQuotes();
  }

  getQuotes(): void {
    this.quoteService.getQuotes()
    .subscribe(quotes => this.quotes = quotes);
  }

  searchQuotes(search:string){
    this.searchTerm = search;

    // this.http.get()

  }

}
