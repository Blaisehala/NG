import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotehighlightDirective } from './quotehighlight.directive';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { FormsModule } from '@angular/forms';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailComponentComponent } from './quote-detail-component/quote-detail-component.component';



@NgModule({
  declarations: [
    AppComponent,
    QuotehighlightDirective,
    QuoteFormComponent,
    QuoteComponent,
    QuoteDetailComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
