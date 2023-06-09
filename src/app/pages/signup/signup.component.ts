import { Component,OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  public signupform!:FormGroup;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router){} 
  ngOnInit(): void {
    this.signupform=this.formBuilder.group({
      fullName:[''],
      mobile:[''],
      email:[''],
      password:['']

    })
  }
  onSubmit(){
    this.http.post<any>("http://localhost:3000/signupusers",this.signupform.value)
    .subscribe(res=>{
      alert("registered successfully");
    this.signupform.reset();
    this.router.navigate(['login']);
    },err=>{
      alert("something went wrong")
    })

}
}
