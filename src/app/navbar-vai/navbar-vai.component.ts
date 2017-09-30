import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-vai',
  templateUrl: './navbar-vai.component.html',
  styleUrls: ['./navbar-vai.component.css']
})
export class NavbarVaiComponent implements OnInit {

  empresa = "VAI";

  constructor() { }

  ngOnInit() {
  }

}
