import { Component, OnInit, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() actionChange = new Subject<string>();
  @Input() action: string;
  
  constructor(private permissionsService: NgxPermissionsService, private router: Router,) { }

  ngOnInit() {
  }

  register(event: Event) {
		this.action = 'register';
		this.actionChange.next(this.action);
  }
  
  submit() {
console.log('hi')
    const perm = ["ADMIN", "USER"];
 
    this.permissionsService.loadPermissions(perm);
    this.router.navigate(['home']);
  }
  

}
