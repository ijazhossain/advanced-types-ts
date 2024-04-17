{
// Generic with interface
interface Developer<T,X=null >{
    name: string;
    computer:{
        brand:string;
        model:string;
        releaseYear:number;
    }
    smartWatch:T;
    bike?:X;
}
type EmilabWatch={
    brand:string,
    model:string,
    display:string,
}
const poorDeveloper:Developer<EmilabWatch>={
    name:'persian',
    computer:{
        brand:'ASUS',
        model:'K42F',
        releaseYear: 2011,
    },
    smartWatch :{
        brand:'Emilab',
        model:'kw66',
        display:'OLED'
    }
}
interface AppleWatch{
    brand:string;
    model:string;
    heartTrack:boolean;
    sleepTrack:boolean;
}
type Bike={
    model:string;
    speed:string;

}
const richDeveloper:Developer<AppleWatch,Bike>={
    name:'Mahbub',
    computer:{
        brand:'ASUS',
        model:'K42F',
        releaseYear: 2011,
    },
    smartWatch :{
        brand:'Emilab',
        model:'kw66',
        heartTrack:true,
        sleepTrack:true
    },
    bike:{
        model:'Yahama',
        speed: '1000cc',
    }
}
}