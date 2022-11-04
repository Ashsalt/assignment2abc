import React from 'react'

const Card = ({ picture, name, gender, email }) => {
  return (
    <div
      style={{
        border: '1px solid #c3c3c3',
        padding: '0.75rem 1rem',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div>
        <img
          style={{
            width: '5rem',
            height: '5rem',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            objectFit: 'contain'
          }}
          src={picture.large}
          alt='pics'
        />
      </div>
      <div style={{ marginLeft: '1rem' }}>
        <p>Fullname: {name.first + ' ' + name.last}</p>
        <p>Gender: {gender}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  )
}

export default Card
