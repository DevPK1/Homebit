import React from 'react'
import { PageHero } from '../Component'
import AboutIMG from '../assests/aboutimg.jpg'
const AboutPage = () => {
  return (
    <div className='container about-wrapper'>
      <PageHero title='about'/>
      <div className="row">
        <div className="col-lg-6">
          <img src={AboutIMG} alt="about-img" className='img-fluid' />
        </div>
        <div className="col-lg-6 about-bg">
          <p className='title mt-5'>About HOME BIT</p>
          <article>
          Home Bits was founded by Ingvar Kamprad in 1943 and came to life as a mail order catalogue business in 
          the forested town of Älmhult, Sweden. Today, it’s a global home furnishing brand that brings affordability, 
          design and comfort to people all over the world. We may have come a long way since our humble beginnings, 
          but our vision remains the same: to create a better everyday life for the many people. Explore the Home Bits story here, 
          to learn more about our heritage, what drives us today and the ways we seek to positively impact people and planet.
          </article>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
