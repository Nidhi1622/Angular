class Employee{
    strname:string="";

    setter(strname:string){
        
        this.strname=strname;

    }
    Display(){
        let st:string=this.strname.toLowerCase();
        let count=0;
        if(st[0]=="a" || st[0] =="i" ||st[0]=="o"|| st[0]== "u" || st[0]=='e')
        {
            for(let i=1;i<=(this.strname).length-1;i++)
            {
                if(st[i]=="a" || st[i] =="i" ||st[i]=="o"|| st[i]== "u" || st[i]=='e'){}
                else
                {
                    count+=1;
                }
                    
    
            }
        }
        else{
            for(let j=1;j<=(this.strname).length-1;j++)
            {
                if(st[j]=="a" || st[j] =="i" ||st[j]=="o"|| st[j]== "u" || st[j]=='e')
                    count+=1;
                
           }

        } 
       
       console.log(count); 
    }
}
let objemp=new Employee();    
objemp.setter('Mrauillkagasadscd');
objemp.Display();