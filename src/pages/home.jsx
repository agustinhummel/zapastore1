import React from 'react'
import Store from '../componets/store'
import Video from '../componets/video'
import Banner from '../componets/banner'
import Testimonial from '../componets/testimonial'
import Contact from '../componets/contact'
const home = () => {
  return (
    <div>
      {/* <div><Video/></div> */}
      <div><Banner/></div>
      <div><Store/></div>
      {/* <div><Testimonial/></div> */}
      <div><Contact/></div>
    </div>
  )
}

export default home
