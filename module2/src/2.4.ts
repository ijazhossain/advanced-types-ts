{
// Generic with interface
interface Developer<T,X=null>{
    name:string;
    computer:{
        brand:string;
        model:string;
        releaseYear: number
    }
    smartWatch: T;
    bike?:X;
}
const poorDeveloper:Developer<EmilabWatch>={
    name:'Persian',
    computer:{
        brand:'ASUS',
        model:'X255UR',
        releaseYear:2013
    },
    smartWatch:{ 
        brand:'Emilab',
        model:'kw66',
        display:'OLED',
    }
}
type EmilabWatch={
    brand:string;
    model:string;
    display:string;
        
}
interface AppleWatch{
    brand:string;
    model:string;
    display:string;
    heartTrack:boolean;
    sleepTrack:boolean;
}
type Yahama={
    model:string;
    engineCapacity:string;
}
const richDeveloper:Developer<AppleWatch,Yahama>={
    name:'Rich Dev',
    computer:{
        brand:'HP',
        model:'X255UR',
        releaseYear:2013
    },
    smartWatch:{
        brand:'Apple',
        model:'kw6633',
        display:'OLED',
        heartTrack:true,
        sleepTrack:true,
    },
    bike:{
        model: 'Yahama',
        engineCapacity:'100cc'
    }
}

}