import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  @Input() user:any;
  users:any;
  id:any;
  userbyId: any;
  
  constructor(private route: ActivatedRoute,private service : RegistrationService, private router: Router, private toastr: ToastrService) {
   
  }
  ngOnInit(): void {
    {
      this.id = this.route.snapshot.paramMap.get('id');
 
 this.getById()
      let resp=this.service.getUsers();
      resp.subscribe((data)=>this.users=data);
    }

  }
getById(){
  
this.service.getUserById(this.id).subscribe(data=>{
  this.userbyId=data;
 
})
}

  updateUser(){
    
    this.service.updateUserFromRemote(this.userbyId[0]).subscribe(
      
      data =>{
        console.log("response recieved");
        this.router.navigate(["/details"])

      },

    )
  }
  
  showSuccess() {
    this.toastr.success('You have updated Successfully!!!!!!');
  }
 

}
