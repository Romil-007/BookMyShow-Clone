import React from 'react'
import './AppContainer.css'

const AppContainer = ({ children }) => {
  return (
    <div className='app-container'>
      {children}
    </div>
  )
}

export default AppContainer
