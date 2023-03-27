import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public formLogin!:FormGroup;
  constructor(private loginbuilder:FormBuilder,private router:Router,private http:HttpClient){}
ngOnInit(): void {
    this.formLogin=this.loginbuilder.group({
      email:[''],
      password:['']
    })
  
  }
  onSubmit(){
    this.http.get<any>("http://localhost:3000/signupusers")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.email===this.formLogin.value.email && a.password===this.formLogin.value.password
      })
      if(user){
        alert("Login successfull");
        this.formLogin.reset();
        this.router.navigate(['home'])
      }
      else{
        alert("user not found");
      }
    },err=>{
      alert("something went wrong")
    })
    
  }
  }
  


