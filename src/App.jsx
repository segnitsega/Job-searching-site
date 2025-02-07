import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import Feed from './components/Feed'

function App() {
  return (
    <div className=''>
      <NavBar />
      <SearchBar />
      <div className='flex justify-center  mt-[20px] h-screen'>
        <Feed />  
      </div>
      
    </div>
  )
}

export default App
