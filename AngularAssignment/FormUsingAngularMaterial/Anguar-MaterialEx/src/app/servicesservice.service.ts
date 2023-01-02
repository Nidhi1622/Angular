import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModelComponent } from './model/model.component';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicesserviceService {

  constructor(public http:HttpClient) { }
  url:string="http://localhost:3000";

  Save(obj:ModelComponent){
    console.log("save");
    return this.http.post<ModelComponent>(this.url+"/Register",obj);
  }
  studentGetData():Observable<ModelComponent[]>
  {
     return this.http.get<ModelComponent[]>(this.url+"/Register");
  }
}
