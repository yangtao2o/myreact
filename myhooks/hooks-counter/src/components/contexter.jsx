import React, { useContext } from 'react'
import { AppContext } from './../context'

function Contexter() {
  const { username } = useContext(AppContext)

  return (
    <div>
      <p>name: {username}</p>
    </div>
  )
}

export default Contexter
