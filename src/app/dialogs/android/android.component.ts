import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-android',
  templateUrl: './android.component.html',
  styleUrls: ['./android.component.css']
})
export class AndroidComponent implements OnInit {

 constructor(public activeModal: NgbActiveModal){

 }

  ngOnInit() {
  }

}

@Component({
  selector: 'android-Modal',
  template: '<a (click)="open()" href="#" class="icon android"></a>',
  styleUrls: ['./android.component.css']
})
export class AndroidModalComponent {

 constructor(private modalService: NgbModal) {}

  open() {
    this.modalService.open(AndroidComponent);
  }
}
