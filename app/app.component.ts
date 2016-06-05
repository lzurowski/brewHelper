import { Component } from '@angular/core';

//app - components
import { Beer } from './components/models/beer';
import { BeerTableComponent } from './components/beer-table.component'; 
 
@Component({
  selector: 'app',
  templateUrl: 'app/templates/app.html',
  directives: [BeerTableComponent]
})

export class AppComponent { 
    title =  'Brew helper';   
    ArrBeers = ArrBeers;    
}


var ArrBeers:  Beer[] = [
  {"name": "RED IPA", "brewDate": "2016-01-01", "style": "American IPA"},
  {"name": "RYE IPA", "brewDate": "2016-02-01", "style": "American RYE IPA"},
  {"name": "CITRUS APA", "brewDate": "2016-03-01", "style": "American PALE AALE"}, 
  {"name": "BLACK IPA", "brewDate": "2016-04-01", "style": "American BLACK IPA"}, 
  {"name": "RED IIPA", "brewDate": "2016-05-01", "style": "American RED IMPERIAL IPA"}, 
  {"name": "COFEE STOUT", "brewDate": "2016-04-01", "style": "Cofee Stout"} 
       
];


