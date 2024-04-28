import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  // login() {
  //   const isAuthenticated = this.authenticate(this.username, this.password);
  //   if (isAuthenticated) {
  //     this.router.navigate(['/home']);
  //   } else {
  //     console.log('Authentication failed');
  //   }
  // }
  nm:any;
  pwd:any;
  login(form: NgForm) {
    this.nm=form.value.username;
    this.pwd=form.value.password;
    console.log( "name:"+ this. nm + "passcode: " + this.pwd);

    const isAuthenticated = this.authenticate(this.username, this.password);
    if (isAuthenticated) {
      this.router.navigate(['/home']);
    } else {
      console.log('Authentication failed');
    }
  }

  authenticate(username: string, password: string): boolean {
    return username === 'admin' && password === 'password';
    // return this.nm==username && this.pwd==password;
  }
}