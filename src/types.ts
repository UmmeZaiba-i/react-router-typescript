export interface User {
    id:number;
    name:string;
    email:string;
}
export interface Post{
    id:number;
    title:string;
    content:string;
    author:User;
}
export interface UserId{
    userId: string
}

export const posts:Post[] =[
    {
        id:1,
        title:"First Post",
        content:"This is my first post",
        author:{
            id:5,
            name:"Sachin", 
            email:"sachin@gmail.com"
        }
    },
    {
        id:2,
        title:"Second Post",
        content:"This is my first post",
        author:{
            id:10,
            name:"Vikas", 
            email:"vikas@gmail.com"
        }
    },
]
