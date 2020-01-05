import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  @Input() action = 'login';

  constructor() { }

  ngOnInit() {
  }

  register() {
    this.action = "register";
  }

}
