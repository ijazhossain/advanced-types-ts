{
    // Asynchronous TypeScript
    type Todo ={
        id: number;
        userId: number;
        title : string; 
        completed: boolean;
    }
    const getToDo= async(): Promise<Todo>=>{
        
        const response = await fetch ('https://jsonplaceholder.typicode.com/todos/1')
        const data= await response.json()
        console.log(data);
        return data
    }
    getToDo();
type Something = {something: string}; 
 const createPromise=(): Promise<Something>=>{
    return new Promise<Something> ((resolve, reject)=>{
        const data : Something =  {something: 'something'};
        if(data){
            resolve(data)
        }else{
            reject('failed to load data')
        }
    })
 }
    // Calling create calling function
    const showData = async() =>{
        const data : Something= await createPromise();
        console.log(data);
    }
    showData()
}