import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {SubscribeServiceService} from '../../subscribe-service.service';

@Component({
  selector: 'app-ios',
  templateUrl: './ios.component.html',
  styleUrls: ['./ios.component.css'],
  providers:[SubscribeServiceService]
})
export class IosComponent implements OnInit {
 
  isEnabled: boolean;
  subscribedUser: boolean;
  email:string;
 
 constructor(public activeModal: NgbActiveModal, private _subscribeService: SubscribeServiceService ){

 }

  ngOnInit() {
    this.isEnabled = false;
    this.subscribedUser = false;
  }

  closeBtn(){
    this.subscribedUser = false;
  }

 
  subscribeUser(name, surname, email){
        var result;
        var obj = {
            method: "subscribe",
            params: {
              name: name.value,
              surname: surname.value,
              email: email.value
            }
            
        };
        //console.log(obj);
        result = this._subscribeService.saveUser(obj);
        result.subscribe( x=> {
            console.log(x.result.success);
            email.value="",
            name.value="",
            surname.value="",
            this.subscribedUser = x.result.success
        })
       
    }

}

@Component({
  selector: 'ios-Modal',
  template: '<a (click)="open()" href="#" class="icon ios"></a>',
  styleUrls: ['./ios.component.css']
})
export class IosModalComponent {

 constructor(private modalService: NgbModal) {}

  open() {
    this.modalService.open(IosComponent);
  }


}