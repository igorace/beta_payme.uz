import { Component} from '@angular/core';

import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-beta-test',
  templateUrl: './beta-test.component.html',
  styleUrls: ['./beta-test.component.css']
})
export class BetaTestComponent{
  constructor(public activeModal: NgbActiveModal){

  }
}

@Component({
  selector: 'betaTestModal',
  template: '<a (click)="open()" class="beta_test">Что такое бета-тестирование?</a>',
  styleUrls: ['./beta-test.component.css']
})
export class BetaTestModal {

 constructor(private modalService: NgbModal) {}

  open() {
    this.modalService.open(BetaTestComponent);
  }

  

}
