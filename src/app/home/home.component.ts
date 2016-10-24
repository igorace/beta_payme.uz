import { Component, OnInit } from '@angular/core';
import {BetaTestModal} from '../dialogs/beta-test/beta-test.component';
import {AndroidModalComponent} from '../dialogs/android/android.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
