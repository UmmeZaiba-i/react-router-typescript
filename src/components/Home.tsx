import { Post } from "../types"
const posts:Post[] =[
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

const Home: React.FC = () => {
  return (
    <div>
      <h4>Home Page</h4>
      {posts.map((post)=>(
        <div key={post.id}>
            <h4>{post.title}</h4>
            <h4>{post.content}</h4>
                <p> {post.author.name} {post.author.email}</p>
        </div>
      ))}
    </div>
  )
}

export default Home

