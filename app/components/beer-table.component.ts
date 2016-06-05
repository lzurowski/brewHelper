import { Component, Input } from '@angular/core';
import { Beer } from './models/beer';
import { ModalComponent } from './modal.component';

@Component({
  selector: 'beer-table',
  templateUrl: 'app/components/templates/beer-table.html'
})


export class BeerTableComponent{ 
  
    @Input()
    beers: Beer[];
    title: string;
       
    onClick(beer){
      
      //smModal.show();
      
      //alert("click on bear element on the list: "+beer.name); 
    };
    
}
