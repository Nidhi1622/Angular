import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Implementation-NgClass-Style-Model';
  EmployeeName="";
  Message="Welcome to Yash";
  IsHide=true;
 


  ShowDetails(){
    this.IsHide=!this.IsHide;


  }

}


  
