import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EmployeeForm } from '../model/employee-form';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private fb:FormBuilder,private cs:ServiceService) { }
 
  stu!:EmployeeForm[]
  
  employeeform!:FormGroup;

  emailpattern!:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  namepattern!:"^[a-zA-Z ]{2,20}$";
  
  ngOnInit(): void {


    this.employeeform=this.fb.group({
      id:[''],
      sname:['',[Validators.required,Validators.pattern(this.namepattern)]],
      address:['',[Validators.required]],
      mobno:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    })
  }


  onSubmit()
  {

    if(this.employeeform.valid)

    {

      console.log(this.employeeform.value);



      if(this.employeeform.value.id !='')

      {

        this.cs.updateStudentData(this.employeeform.value).subscribe();

      }

      else{

        this.cs.StudentSave(this.employeeform.value).subscribe();

      }

      window.location.reload();

    }
  }

    public EmpData($event:EmployeeForm){

      console.log($event);
  
      this.employeeform.patchValue({
  
       
  
        id:$event.id,
  
        sname:$event.sname,
  
        address:$event.address,

        mobno:$event.mobno
  
      })
  
    }

    reset()
    {
      this.employeeform.patchValue(
      {

      id:'',

      sname:'',

      address:'',

      mobno:''

    })
 }

}
