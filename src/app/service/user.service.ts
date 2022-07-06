import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl = "http://localhost:5000/users";
  private authStatusListener = new Subject<boolean>();
  private isuserAuthentified = false;
  constructor(private httpClient: HttpClient, private router: Router) { }

  addUser(user: any) {

    console.log('here service  function add user')
    return this.httpClient.post<{ message: any }>(`${this.userUrl}/register`, user)
  }
  loginByemailpass(user: any) {
    return this.httpClient.post<{ user: any, message: any }>(`${this.userUrl}/login`, user).subscribe((res) => {
      console.log('resultat service login', res);
      if (res.message === "2") {
        this.router.navigate(["/"]);
        this.isuserAuthentified = true;
        this.authStatusListener.next(true);

      }
    })

  }
  getauthStatusListener() {
    return this.authStatusListener.asObservable()
  }
  isUserAuth() {
    return this.isuserAuthentified
  }
  logOut() {
    this.isuserAuthentified = false;
    this.authStatusListener.next(false);
    this.router.navigate(["/"]);
  }
}
