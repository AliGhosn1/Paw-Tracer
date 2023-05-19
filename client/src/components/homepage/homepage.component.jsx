import React from 'react'

import { signOutUser } from '../../utils/firebase/firebase.utils'

const HomePage = () => {
  return (
    <div>
      home.component
      <button onClick={signOutUser}/>
    </div>

  )
}

export default HomePage