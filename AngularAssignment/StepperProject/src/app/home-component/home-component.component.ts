import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import { Router, TitleStrategy } from '@angular/router';
import { ServicesserviceService } from '../servicesservice.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
   
  emailpattern!:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  namepattern!:"^[a-zA-Z ]{6,32}$";
  fathernamepattern!:"^[a-zA-Z ]{6,32}$";
  mothernamepattern!:"^[a-zA-Z ]{6,32}$";
  mobilepattern!:"^[0-9]{10,10}$";


  isLinear = true;
  firstFormGroup !: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  
  constructor(private _formBuilder: FormBuilder,private cs:ServicesserviceService,private _Router:Router) {}
  
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      FullName:['', [Validators.required,Validators.pattern(this.namepattern)]],
      Emailid:['', [Validators.required]],
      FatherName:['',[ Validators.required]],
      MotherName:['',[ Validators.required]],
      Gender:['',[ Validators.required]],
      Dob:['',[ Validators.required]],
      Mobile:['',[ Validators.required]],
     
    });
    this.secondFormGroup = this._formBuilder.group({
      BankAccNo:['',[ Validators.required]],
      NetBanking:['',[ Validators.required]],
      MobBanking:['',[ Validators.required]],
      BankFullName:['',[ Validators.required]],
      IFSCcode:['',[ Validators.required]],
    });
    


    this.thirdFormGroup = this._formBuilder.group({
      PresentAddress:['', [Validators.required,Validators.pattern(this.namepattern)]],
    PermanentAddress:['', [Validators.required,Validators.pattern(this.namepattern)]],
      
    });
  }
  
  
  public ErrorFunc = (controlName: string, errorName: string) =>
    {
      return this.firstFormGroup.controls[controlName].hasError(errorName);
    }
      public ValidationsFunc = (controlName: string, errorName: string) =>
      {
        return this.secondFormGroup.controls[controlName].hasError(errorName);
      }
      public DataFunc = (controlName: string, errorName: string) =>
      {
        return this.thirdFormGroup.controls[controlName].hasError(errorName);
      }



      
  Onsubmit()
  {
    if(this.firstFormGroup.valid && this.secondFormGroup.valid && this.thirdFormGroup.valid)
    {
      this.cs.SaveFunc(this.firstFormGroup.value).subscribe();
      this.cs.SaveFunc(this.secondFormGroup.value).subscribe();
      this.cs.SaveFunc(this.thirdFormGroup.value).subscribe();
      alert('you are successfully Register');
      this._Router.navigate(['about-component']);
      console.log('MyJSONdatadSave');
      
    }
    else{
    console.log('FakeSave')
    alert('Please fill the required data');
    console.log(this.firstFormGroup.value);
    console.log(this.secondFormGroup.value);
    console.log(this.thirdFormGroup.value);

    }
    
    
  }
 
}