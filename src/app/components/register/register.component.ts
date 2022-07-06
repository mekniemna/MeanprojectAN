import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user:any={}
adduserForm:FormGroup
  constructor(private formbuilder:FormBuilder,
    private userService:UserService) { }

  ngOnInit() {
    this.adduserForm = this.formbuilder.group({
      firstname: [""],
      lastname: [""],
      email:[""],
      phonenumber:[""],
      password:[""],
    })
  }
  addeditUser(){
this.userService.addUser(this.user).subscribe((res)=>{
  console.log(res.message);

})


  }


}
