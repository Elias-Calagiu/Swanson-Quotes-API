import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { QuoteService } from '../quote.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  @Input()

  quote: any;
  searchTerm: string = ' ';
  // searchNumberQuotes: number = 0;
  url:string = "http://ron-swanson-quotes.herokuapp.com/v2/quotes"

  constructor(private quoteService: QuoteService, private http:HttpClient) { }

  ngOnInit(): void {
  }

 

  searchQuotes(search:string){
    this.searchTerm = search;

    this.http.get(this.url + '/search/' + search).subscribe(data=>{
      console.log(data);
      
      this.quote = data as any;
      console.log(this.quote);
      
    })
  }



}
