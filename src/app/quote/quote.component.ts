import { Component, OnInit } from '@angular/core';

import { Quote} from '../quote';



@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[

    {id:1,name:'People and Tech',description:'Technology is best when it brings people together'},
    {id:2,name:'Human and Machines',description:'It is only when they go wrong that machines remind'},
    {id:3,name:'Humanity and Tech',description:'It has become appallingly obvious that our technology has exceeded our humanity.”'},
    {id:4,name:'The Great',description:'The greatest glory in living lies not in never falling, but in rising every time we fall'},
    {id:5,name:'Time is of the essence',description:'Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma which is living with the results of other peoples thinking'},
    {id:6,name:'Life',description:'If you look at what you have in life, youll always have more. If you look at what you dont have in life, youll never have enough'},
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
