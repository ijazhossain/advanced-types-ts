"use strict";
{
    // type assertion
    /*    const kgToGm=(value:string|number):number|string|undefined=>{
           if(typeof value ==='number'){
               return value*1000;
           }
           if(typeof value === 'string'){
               const convertedValue=parseFloat(value)*1000;
               return `The converted value is : ${convertedValue}`
           }
       }
       const result1 = kgToGm(1000)as number;
       const result2 = kgToGm('1000')as string;
   
       type CustomError={
           message:string
       }
       try{
   
       }catch(error){
           console.log((error as CustomError).message);
       } */
    const kgToGm = (value) => {
        if (typeof value === 'number') {
            return value * 1000;
        }
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is : ${convertedValue}`;
        }
    };
    const result1 = kgToGm(1000);
    const result2 = kgToGm("1000");
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
