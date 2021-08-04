import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
   user = new User();
   msg='';
  
  constructor(private service : RegistrationService,private router : Router, private toastr: ToastrService ) { }

  ngOnInit(): void {
  }
  registerUser(){
    this.service.updateUserFromRemote(this.user).subscribe(
      data =>{
        console.log("response recieved");
        
        this.router.navigate(["/login"])
        this.msg="Registration Successful";

      },
      
    )
  }
  goToLogin(){
    this.router.navigate(["/login"])
  }

  showSuccess() {
    this.toastr.success('You have Registered Successfully!!!!!!');
  }

}
 