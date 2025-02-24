
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
            <li>My Applications</li>
            <li>Companies</li>
            <li>Contact Us</li>
        </ul>
      </div>
        <div>
            <button className="bg-blue-700 text-white px-8 py-2 rounded border mr-4"><Link to="/login">Login</Link></button>
            <button className="px-8 py-2 rounded border-1 border-blue-600 "><Link to="/signup">Sign In</Link></button>
        </div>
      
    </div>
  )
}

export default NavBar
