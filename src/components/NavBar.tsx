import { Link } from 'react-router-dom';
import '../App.css'

const NavBar:React.FC = () => {
  return (
   <nav>
    <ul>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='about'>About</Link>
        </li>
        <li>
            <Link to='users'>Users</Link>
        </li>
        <li>
            <Link to='/items'>Items</Link>
        </li>
        <li>
            <Link to='/products'>Products</Link>
        </li>
        <li>
            <Link to='/blog'>Blog</Link>
        </li>
    </ul>
   </nav>
  )
}

export default NavBar
