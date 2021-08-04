import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  public loginUserFromRemote(user :User):Observable<any>{
    return this.http.post<any>("http://localhost:9191/login",user,);
    
  }
  public registerUserFromRemote(user :User):Observable<any>{
    return this.http.post<any>("http://localhost:9191/registeruser",user,);
    
  }
  public deleteUser(id:any){
    return this.http.delete("http://localhost:9191/delete/"+id);
  }
  public getUsers(){
    return this.http.get("http://localhost:9191/users");
  }

  public getUserById(id:any){
    return this.http.get("http://localhost:9191/userby/"+id);
  }

  public getUserByUsername(username:any){
    return this.http.get("http://localhost:9191/user/"+username);
  }
  public updateUserFromRemote(user: User){
    console.log(user);
    return this.http.put("http://localhost:9191/update",user);
  }
  public getAllUsers1(){
    return this.http.get("http://localhost:9191/sort");
  }

}
