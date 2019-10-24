import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-helpmenu',
  templateUrl: './helpmenu.component.html',
  styleUrls: ['./helpmenu.component.css']
})
export class HelpmenuComponent implements OnInit {
    router: any;

  constructor() { }

  ngOnInit() {
  }
  queueBill(data) {
    this.router.navigate(['home', data.id]);
  }
  toHome() {
    this.router.navigate(['home']);
  }

}
