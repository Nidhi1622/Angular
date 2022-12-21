class item{
     
    itemid:number;
    itemname:string;
    itemprice:number;
    category:string;
    constructor(itemid:number, itemname:string,itemprice:number,category:string)
    {
        this.itemid=itemid;
        this.itemname=itemname;
        this.itemprice=itemprice;
        this.category=category;
    }
    showDetail = () => console.log("itemid: " + this.itemid + '\nitemname: ' + this.itemname +'\nitemprice:'+ this.itemprice +'\ncategory:'+this.category)  

}
var obj=new Item(1,"machine",202,"Mechanic");
obj.showDetail();


