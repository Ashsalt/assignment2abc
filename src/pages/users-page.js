import React, { useEffect, useState } from 'react'

import Card from '../components/card'

const UsersPage = () => {
  const [apiData, setApiData] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchUsers = async () => {
    setLoading(true)
    let response = await fetch('https://randomuser.me/api/?results=50')
    const data = await response.json()
    setApiData(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  console.log({ apiData })

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
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <p>Prev</p>
        <p>page....</p>
        <p>Next</p>
      </div>
    </div>
  )
}

export default UsersPage
