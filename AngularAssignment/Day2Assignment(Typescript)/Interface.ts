interface  ShapeName{
    Printname();

}
class Cone implements ShapeName{
    h:number;
    r:number;
     constructor(h:number,r:number){
        this.h=h;
        this.r=r;
     }
     Area()
     {
        let l = Math.sqrt((this.r ** 2)+(this.h ** 2))
         console.log(((this.r*3.14*this.r)+(this.r*3.14*l)));
     }


    Printname(){}

}
class Sphere implements ShapeName{
   
    rd:number;
     constructor(rd:number){
       
        this.rd=rd;
     }
     Area()
     {
         console.log((4*3.14*(this.rd ** 2)));
     }

    Printname(){}

}
class Rectangle implements ShapeName{
    l:number;
    h:number;
  
    constructor(l:number,h:number){
        this.l=l;
        this.h=h;
     }

    Area()
    {
        console.log(this.l*this.h);
    }
    
    Printname(){}
}

let data=new Cone(12,4);
data.Area();

let obj=new Sphere(3);
obj.Area();

let objRectangle=new Rectangle(12,4);
objRectangle.Area();