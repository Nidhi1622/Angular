import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form-one-Project';
  integerRegex=/^\d+$/;
  EmailRegex= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  form={
    Email:"",
    Subscription:"",
    Password:""
  }
  IsSubmitted=false;
  Show=false;
  isHide=false;
  isHide1=false;
  isHide2=false;
  
  registerFunc(){

    console.log("ggggggggggggggggggg");
    let res=this.EmailRegex.test(this.form.Email);

    res == false?this.isHide=true: this.isHide=false;

    this.form.Subscription == ''?this.isHide1=true: this.isHide1=false;

    this.form.Password == ''?this.isHide2=true: this.isHide2=false;

    ((this.isHide==true) || (this.isHide1==true) || (this.isHide2==true))?this.IsSubmitted=false:this.IsSubmitted=true;

   
   
  }
  
 
}
