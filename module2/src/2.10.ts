{
    //Mapped  Type
    const arrOfNumbers:number[]=[1,4,5];
    // const arrOfStrings=['1','4','5'];
    const arrOfStrings=arrOfNumbers.map((number)=>number.toString());
    console.log(arrOfStrings);
    
    type AreaNumber={
        height:number;
        width: number;
    }
    type Height = AreaNumber["height"] //Lookup type
   /*  type AreaString={
        height:str ing;
        width: string;
    } */

    // keyof AreaNumber=> "height" | "width"
    type AreaString<T> = {
        [key in keyof T]:T[key]
    }
    const area1: AreaString<{height: string; width:number}>={
        height: "100",
        width: 50
    }
    
    // 
}