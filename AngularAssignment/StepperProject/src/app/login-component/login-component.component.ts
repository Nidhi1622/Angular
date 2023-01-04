import { Component } from '@angular/core';
import { ServicesserviceService } from '../servicesservice.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  constructor(private fb:FormBuilder, private cs:ServicesserviceService,private _Router:Router) { }
  
  loginform!:FormGroup;

  emailpattern!:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  namepattern!:"^[a-zA-Z ]{6,32}$";
  passwordpattern!:"^[a-zA-Z0-9]{6,12}$";
  mobilepattern!:"^[0-9]{10,10}$"

  ngOnInit(): void {
    this.loginform=this.fb.group({
      name: new FormControl('', [Validators.required,Validators.pattern(this.namepattern)]),
       password:new FormControl('',[Validators.required,Validators.pattern(this.passwordpattern)]),
      });
   
  }
  
  public ErrorFunc= (controlName: string, errorName: string) =>
  {
    return this.loginform.controls[controlName].hasError(errorName);
  }
    
   LoginFunc(){
    if(this.loginform.valid)
    {
     
      let data = this.cs.studentGetData().subscribe(mydata =>{
        const enduser = mydata.find((m:any) => {
          return m.name == this.loginform.value.name && m.password == this.loginform.value.password 
        });
          if (enduser)
          {
            console.log("Datavalid");
            this._Router.navigate(['home-component']);
          }
          
          else
          {
            console.log("InvalidData");
          }
          console.log(enduser);
        } )
        


    }
   
   }

}

