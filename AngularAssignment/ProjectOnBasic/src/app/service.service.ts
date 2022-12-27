import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { EmployeeForm } from './model/employee-form';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http:HttpClient) { }
  url:string="http://localhost:3000";
  
  StudentSave(stu:EmployeeForm)
  {
      return this.http.post<EmployeeForm>(this.url+"/posts",stu);
  }

  studentGetData():Observable<EmployeeForm[]>
  {
     return this.http.get<EmployeeForm[]>(this.url+"/posts");
  }

 deleteStudentData(id:number)
 {
     return this.http.delete(this.url+"/posts/"+id);
 }


 getStudentData(id:number)

 {

  return this.http.get<EmployeeForm>(this.url+"/posts/"+id);

    }

    updateStudentData(stu:EmployeeForm)

 {

  return this.http.put<EmployeeForm>(this.url+"/posts/"+stu.id,stu);

    }
}