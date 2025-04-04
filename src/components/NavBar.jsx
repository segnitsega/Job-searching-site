
import { Link } from "react-router-dom"

function NavBar() {

  return (
    <div className="flex justify-between py-4 px-16 shadow w-full">
      <div>
        <img src="./favicon.svg" alt="logo" className=''/>
      </div>
      <div>
        <ul className="flex gap-10 p-4">
            <Link to='/jobPost'><li>Post Job</li></Link>
            <li className="cursor-pointer">My Applications</li>
            <li className="cursor-pointer">Companies</li>
            <li className="cursor-pointer">Contact Us</li>
        </ul>
      </div>
        <div>
            <button className="cursor-pointer bg-blue-700 text-white px-8 py-2 rounded border mr-4 hover:bg-blue-400"><Link to="/login">Login</Link></button>
            <button className="cursor-pointer px-8 py-2 rounded border-1 border-blue-600 hover:bg-blue-700 hover:text-white"><Link to="/signup">Sign In</Link></button>
        </div>
      
    </div>
  )
}

export default NavBar
