import React, { useEffect, useState } from 'react'

import Card from '../components/card'

const UsersPage = () => {
  const [apiData, setApiData] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)



  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      let response = await fetch(`https://randomuser.me/api/?results=5&page=${page}`)
      const data = await response.json()
      setApiData(data)
      setLoading(false)
    }
  
    fetchUsers()
  }, [page])

  console.log({ apiData })

  const handleNext = (count) => setPage(prevState => prevState + count)
  
  const handlePrev = () => {
    setPage(prevState => {
      if(prevState === 1) return 1;
      return prevState - 1
    })
  }

  if (loading) return <h1>Loading...</h1>

  return (
    <div style={{ margin: '2rem' }}>
      <h2 style={{ textAlign: 'center' }}>List of All Users</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          columnGap: '2rem',
          rowGap: '2rem'
        }}
      >
        {apiData?.results?.map(user => (
          <Card key={user.email} {...user} />
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
       {page > 1 && <p className='cursor' onClick={handlePrev}>{page - 1}</p>}
        <h3 className='cursor'>{page}</h3>
        <p className='cursor' onClick={() => handleNext(1)}>{page + 1}</p>
        <p className='cursor' onClick={() => handleNext(2)}>{page + 2}</p>
      </div>
    </div>
  )
}

export default UsersPage
