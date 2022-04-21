import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
// import { QUOTES } from '../sample-quotes';
import { QuoteService } from '../quote.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quote: any;
  searchTerm: string = '';
  url:string = "http://ron-swanson-quotes.herokuapp.com/v2/quotes/"

  constructor(private quoteService: QuoteService, private http:HttpClient) { }

  ngOnInit(): void {
    // this.getQuotes();
  }

  // getQuotes(): void {
  //   this.quoteService.getQuotes()
  //   .subscribe(quotes => this.quotes = quotes);
  // }

  searchQuotes(search:string){
    this.searchTerm = search;

    this.http.get(this.url + search).subscribe(data=>{
      this.quote = data as any;
    })


  }

}
