import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DirectivesProject';
 Show=true;
 Nums:number[]=[];
 count=0;



Ontoggle(){  
this.Show=!this.Show;
this.count+=1;
this.Nums.push(this.count);
}
}

