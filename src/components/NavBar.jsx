
function NavBar() {
  return (
    <div className="flex justify-between py-4 px-16 shadow-md w-full">
      <div>
        <img src="./favicon.svg" alt="logo" className=''/>
      </div>
      <div>
        <ul className="flex gap-10 p-4">
            <li>Job Search</li>
            <li>My Applications</li>
            <li>Companies</li>
            <li>Contact Us</li>
        </ul>
      </div>
        <div>
            <button className="bg-blue-700 text-white px-8 py-2 rounded border mr-4">Login</button>
            <button className="px-8 py-2 rounded border-1 border-blue-600 ">Sign In</button>
        </div>
      
    </div>
  )
}

export default NavBar
