import { useParams } from "react-router-dom" 
// useParams: extracts the userId/object from the URL
import { useSearchParams } from "react-router-dom"
// manages the query parameter in the URL
const Users = () => {
    const {userId} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') === 'active';
  return (
    <div>
      UserDetails
      {
        showActiveUsers ? <p>Active User ID is {userId}</p> : <p>General users </p>
      }
      <button onClick={()=>setSearchParams({filter:'active'})}>Active Users</button>
      <button onClick={()=>setSearchParams({})}>Reset Users</button>
    </div>
  )
}

export default Users
