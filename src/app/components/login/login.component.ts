import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login:any={};
loginForm:FormGroup

  constructor(private formBuilder:FormBuilder, private userService:UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
    console.log('hello login',this.login);
  }
  loginuser(){
    this.userService.loginByemailpass(this.login);

  }

}
