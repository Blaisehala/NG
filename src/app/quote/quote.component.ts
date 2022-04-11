import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Quote} from '../quote';



@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  seeDetails(index: string | number){
    this.quotes[index].showDescription =!this.quotes[index].showDescription

  }

  


  
  quotes:Quote[]=[

    new Quote(1,'Great Glory','The greatest glory in living lies not in never falling, but in rising every time we fall','Nelson Mandela', 'PapaHala',new Date(2018,6,5)),
    new Quote(2,'Time is of the Essence','Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma which is living with the results of other peoples thinking','Steve Jobs','Zzizi Zize',new Date(2019,5,5)),
    new Quote(3,'Humanity and Tech','It has become appallingly obvious that our technology has exceeded our humanity','Albert Einstein','Hon. Madhabul',new Date(2017,4,11)),
    //new Quote(4,'The Great','The greatest glory in living lies not in never falling, but in rising every time we fall','Nelson Mandela','PapaHala',new Date(2021,3,19)),
    //new Quote (5,'Time is of the essence','Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma which is living with the results of other peoples thinking','Nelson Mandela','PapaHala',new Date(2020,9,1)),
    //new Quote(6,'Life','If you look at what you have in life, youll always have more. If you look at what you dont have in life, youll never have enough','Nelson Mandela','PapaHala',new Date(2015,9,20)),
  ];
  

 



  addNewQuote(quote){
  let description = quote.description
  let papa = quote.title
  let author = quote.author
  let yourname = quote.yourname 
  let date= quote.Date
  



 
    console.log(quote);
    this.quotes.push(new Quote(1,papa,description,author,yourname,date));
  }


  quoteRead(isComplete: any, index: number){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
