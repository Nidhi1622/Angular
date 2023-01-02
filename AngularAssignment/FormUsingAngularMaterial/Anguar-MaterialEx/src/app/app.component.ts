import { Component } from '@angular/core';
import { ServicesserviceService } from './servicesservice.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularMaterial';
  constructor(private fb:FormBuilder, private cs:ServicesserviceService) { }
  
  studentform!:FormGroup;

  emailpattern!:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  namepattern!:"^[a-zA-Z ]{6,32}$";
  passwordpattern!:"^[a-zA-Z0-9]{6,12}$";
  mobilepattern!:"^[0-9]{10,10}$"

  ngOnInit(): void {
    this.studentform=this.fb.group({
      name: new FormControl('', [Validators.required,Validators.pattern(this.namepattern)]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailpattern)]),
      password:new FormControl('',[Validators.required,Validators.pattern(this.passwordpattern)]),
      skill:new FormControl('',[Validators.required]),
      date:new FormControl('',[Validators.required]),
      gender:new FormControl('',[Validators.required]),
      mobile:new FormControl('',[Validators.required,Validators.pattern(this.mobilepattern)]),
      });
   
  }
  public myError = (controlName: string, errorName: string) =>{
    return this.studentform.controls[controlName].hasError(errorName);
    }
    
  onSubmit(){
    if(this.studentform.valid)
    {
    this.cs.Save(this.studentform.value).subscribe();
    window.location.reload();
    }
  }
  
}
