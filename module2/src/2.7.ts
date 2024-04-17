{
    // generic constraint with keyof operator

type Vehicle ={
    bike: string;
    car: string;
    ship: string;
}
type Owner = "bike" | "car" | "ship";
type Owner2 = keyof Vehicle;
const getPropertyValue=<X,Y extends keyof X>(obj:X, key:Y)=>{
    return obj[key]
}
const user ={
    name:'Mr. persian',
    age: 26,
    address:'ctg'
}
const car ={
    model:'Mr. persian',
    year: 1926,
    
}
const res1 = getPropertyValue(user,"name")





    // 
}