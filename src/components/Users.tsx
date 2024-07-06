import {  useLocation, useNavigate, useParams } from "react-router-dom" 
// useParams: extracts the userId/object from the URL
import { useSearchParams } from "react-router-dom"
// manages the query parameter in the URL just like useState
export const Users = () => {
    const {userId} = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') === 'active';

    // const gotouserDetails = (id:number)=>{
    //   navigate(`/userdetails/${id}`)
    // }

  return (
    <div>
      UserDetails - 
      {
        // userId
        showActiveUsers ? (<p>Active User ID is {userId}</p>) : (<p>General users!</p>)
      }
      <div>
        <p>current location: {location.pathname}</p>
        <p>Location state: {location.state}</p>
        

        <div>
          <button onClick={()=>navigate('/userdetails')}>User 1 details</button>
          <button onClick={()=>navigate('/userdetails')}>User 2 details</button>
        </div>


      <button onClick={()=>setSearchParams({filter:'active'})}>Active Users</button>
      <button onClick={()=>setSearchParams({})}>Reset Users</button>

      </div>
      <div>
        <button onClick={()=>navigate('/')}>Go back</button>
      </div>
    </div>
  )
}
