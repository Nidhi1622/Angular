import { Component } from '@angular/core';
import { EmpformComponent } from './EmpForm.component';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test-Project';
  isTest=false;
  constructor(private fb:FormBuilder) { }
 
  stu!:EmpformComponent[]
  
 empform!:FormGroup;

  emailpattern!:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  namepattern!:"^[a-zA-Z ]{2,20}$";
  
  ngOnInit(): void {
    this.empform=this.fb.group({
   
      ProjectName:['',[Validators.required,Validators.pattern(this.namepattern)]],
      ProjectStatus:['',[Validators.required]],
      Email:['',[Validators.required,Validators.pattern(this.emailpattern)]]
    })
    
  }


  onSubmit()
  {
    if(this.empform.get('ProjectName')?.value == 'test')
    {
      this.isTest=true;
    }
    else{
      this.isTest=false;
    }
    
    console.log(this.empform.get('ProjectName')?.value);
    console.log(this.empform.get('ProjectStatus')?.value);
    console.log(this.empform.get('Email')?.value);
    
 }
}
