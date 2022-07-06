import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isuserAuthentified=false
  // subscription in the subject
  private authStatusListenerSubs:Subscription
  constructor( private userService:UserService) { }

  ngOnInit() {
    this.isuserAuthentified=this.userService.isUserAuth()
    this.authStatusListenerSubs=this.userService.getauthStatusListener().subscribe((res=>{
      this.isuserAuthentified=res
    }))
  }
 ngOnDestroy(){
  this.authStatusListenerSubs.unsubscribe()

 }

  logout(){
    this.userService.logOut()
  }

}
