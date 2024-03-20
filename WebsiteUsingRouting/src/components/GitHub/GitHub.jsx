import React, { useEffect, useState } from 'react'

function GitHub() {
   const [data, setData] = useState([]) 
    useEffect(() => {
        fetch('https://api.github.com/users/sauravthapliyal90')
        .then(response => response.json() )
        .then(response => {setData(response)})
    }, [])

  return (
    <>
     <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl'>Follower : {data.followers}
     <img src={data.avatar_url} alt="" width={300} />
     </div>
      
    </>
  )
}

export default GitHub
