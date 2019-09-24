import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PrserviceService {

  constructor(private http: HttpClient) { }

public register(a,b,c,d,e,f){

    return this.http.post("http://localhost:3000/user/signup",{name:a,email:b,role:c,username:d,
    password:e,mobile:f})







}
}
