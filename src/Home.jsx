import React from 'react'
import web from '../src/images/web1.gif'
import Common from './Common'

const Home = () => {
  return (
    <>
      <Common
      name="Grow Your Career With"
      imgsrc={web}
      visit= '/service'
      btname='Get Started'
      />
    </>

  )
}

export default Home
