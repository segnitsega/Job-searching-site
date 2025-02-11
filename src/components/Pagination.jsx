
const Pagination = ({pages, setPages}) => {
    const handlepage = (a) => {
        setPages(a)
    }
  return (
    <div className='flex justify-center gap-4 mb-4'>
      <button className='bg-gray-300 py-2 px-4 rounded-md 'onClick={()=>handlepage(pages - 1)}>Prev</button>
      <button className='border border-gray-500 px-2' onClick={()=>handlepage(2)}>2</button>
      <button className='border border-gray-500 px-2' onClick={()=>handlepage(3)}>3</button>
      <button className='border border-gray-500 px-2' onClick={()=>handlepage(4)}>4</button>
      <button className='border border-gray-500 px-2' onClick={()=>handlepage(5)}>5</button>
      <button className='border border-gray-500 px-2' onClick={()=>handlepage(6)}>6</button>
      <button className='bg-gray-300 py-2 px-4 rounded-md ' onClick={()=>setPages(pages + 1)}>Next</button>   
    </div>
  )
}

export default Pagination
