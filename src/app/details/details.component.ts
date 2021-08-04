import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Key } from 'protractor';
import * as XLSX from 'xlsx'; 
import { RegistrationService } from '../registration.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  [x: string]: any;
  
  id:any;
  users:any;
  username:any;
 // p:number = 1;
  dataSource: any;
  
  
  
  constructor(private route: ActivatedRoute,private service : RegistrationService, private router: Router, private toastr: ToastrService) { 

  }
 
  public deleteUser(id:string){
    console.log(id)
    let resp= this.service.deleteUser(id);
    resp.subscribe((data)=>this.users=data);
  }
  public findUserByUsername(){
    let resp= this.service.getUserByUsername(this.username);
    resp.subscribe((data)=>this.users=data);
  }
  getAllUsers1(){
    let resp= this.service.getAllUsers1();
    resp.subscribe((data)=>this.users=data);
  }
 

  ngOnInit(): void {
    let resp=this.service.getUsers();
    resp.subscribe((data)=>this.users=data);

  }
 updateUser(id: any){
   console.log(id)
// this.router.navigateByUrl("/update",id)
 this.router.navigate(['/update',id]);
 }
 
 

 key: string = 'id';
 reverse: boolean = false;
sort(key: any){
  this.key = key;
  this.reverse = !this.reverse;
}

showSuccess() {
  this.toastr.success('You are awesome!', 'Success!');
}
}
 