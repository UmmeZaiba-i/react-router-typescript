import {posts} from '../types';
import {useLocation} from 'react-router-dom'

const Home: React.FC = () => {
  const location = useLocation();
  return (
    <div>
      <h4>Home Page</h4>
      <p>Current path: {location.pathname}</p>
      <p>Search params: {location.search}</p>
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

