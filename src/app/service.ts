import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs';
import {catchError,map,tap} from 'rxjs/operators';
import {User} from './user';
const httpOPtions = {
  headers: new HttpHeaders({'content-type':'application/json','Access-Control-Allow-Origin':'*'})
};

@Injectable({providedIn: 'root'})
export class UserService{
  private userUrl='https://keyonprop.com/api'; //after upload in the Server Change it to server url

  constructor(private http: HttpClient){ }
  formSubmit(user:User){
    return this.http.post(this.userUrl+ '/website_quires' ,user,httpOPtions);
  }
  
}