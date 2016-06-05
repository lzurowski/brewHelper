import {Component, Input} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

import {MODAL_DIRECTVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'modal', 
  directives: [MODAL_DIRECTVES],
  viewProviders:[BS_VIEW_PROVIDERS],
  templateUrl: 'app/components/templates/modal.html'
})

export class ModalComponent {
   @Input()
    title: string;
    text: string;  
}