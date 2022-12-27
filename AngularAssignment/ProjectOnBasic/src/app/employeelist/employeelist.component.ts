import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {EmployeeForm } from '../model/employee-form';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  @Output() s= new EventEmitter<EmployeeForm>();

  constructor(private cs:ServiceService) { }

  stu!:EmployeeForm[];

  ngOnInit(): void {

    this.cs.studentGetData().subscribe(list =>{

      this.stu=list
    })
  }

  deleteDataById(id :number)
  {
  this.cs.deleteStudentData(id).subscribe( data =>{
  console.log(data);
  window.location.reload();
})
  }

  
  editDataById(id :number)

  {

    this.cs.getStudentData(id).subscribe( (data:any) =>{

       this.s.emit(data);

       console.log(this.s);
       

        });

}
}
