import React from 'react'
import tops from '../src/images/tops.jpg'

import Common from './Common'

const About = () => {
  return (
    <>
     <Common
     name="Welcome To About Page Of"
     imgsrc={tops}
     visit= '/contact'
     btname='Contact Now'
     />
    </>
  )
}

export default About
