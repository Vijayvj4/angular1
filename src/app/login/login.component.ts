import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  msg='';
  password: any;
  show = false;


  constructor(private service : RegistrationService, private router: Router, private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.password = 'password';
  }
  loginUser(){
    this.service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("Response recieved"),
        this.toastr.success('You have Logined Successfully!!!!!!');
        this.router.navigate(["/details"])
      },
      error => {
        console.log("Exception occured");
        this.msg="Please enter valid emailid and password";
        this.toastr.error('This is not good!', 'Oops!');
      }
    )

  }
  goToRegistration(){
    this.router.navigate(["/registration"])
  }

}
