{
    // Generic type
    // const rollNumbers:number[]=[3,6,8];
    type GenericArray<T>=Array<T>
    const rollNumbers:GenericArray<number>=[3,6,8];
    // const mentors:string[]=['Mr. X', 'Mr.Y', 'Mr.z'];
    const mentors:GenericArray<string>=['Mr. X', 'Mr.Y', 'Mr.z'];
    // const boolArray:boolean[]=[true, false, true];
    const boolArray:GenericArray<boolean>=[true, false, true];

// Generic for object
interface User{
    name:string
    age:number
}
    const user:GenericArray<User>=[
        {
            name:'Mezba',
            age:100
        },
        {
            name:'Jhonkar Mahbub',
            age:110
        }
    ]

    // Generic for tuple
    type GenericTuple<X,Y>=[X,Y]
    const person =['Mr.X', 'Mr. Y']

    
    const UserWithID:GenericTuple<number,{
        name:string;
        email: string;
    }>=[1234,{
        name:'Persian',
        email:'a@gmail.com'
    }]

}