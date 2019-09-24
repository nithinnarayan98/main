import { Component, OnInit } from '@angular/core';
import { PrserviceService } from "../prservice.service";
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from "@angular/router";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name; 
  email;
  mobile;
            role;
            username;
            password;

  details;

  constructor(private ms: PrserviceService, private router: Router) { }

  ngOnInit() {
  }
  signUp(){

    
          this.ms.register(this.name,this.email,this.role,
            this.username,this.password,this.mobile).subscribe(data =>{
              this.details=data;
            this.router.navigateByUrl("");
          });
         
  }
}
