let num:number[]=[1, 5,7,9,3];
let a= (num)=>{
    for (let i=0 ; i<num.length; i++)
    {
        for(let j=0; j<num.length-1; j++)
        {
            if(num[j]>num[j+1])
            {
                let temp = num[j];
                num[j] = num[j+1];
                num[j+1] = temp;
            }
        }
    }
    console.log(num);
}
a(num);