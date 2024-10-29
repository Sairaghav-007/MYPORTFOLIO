import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox = ({text,link,btnText}) => (
    <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
         {btnText}
         <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1 : (
        <h1 className='sm:text-xl sm:leading-snug
        text-center neo-brutalism-blue py-4 px-8
        text-white mx-5'>Hi, I am <span className='font-semibold'>Sai Raghav</span>👋
        <br />
        A Software Engineer from India</h1>
    ),
    2 : (
        <InfoBox text="Student at Sri SaiRam Engineering College" link="/about" btnText="Learn More"/>
      
    ),
    3 : (
        <InfoBox text="View my amazing projects " link="/projects" btnText="Visit my Portfolio"/>
    ),
    4 : (
        <InfoBox text="Student at Sri SaiRam Engineering College" link="/contact" btnText="Let's Talk"/>
    )
}



const HomeInfo = ({CurrentStage}) => {
    console.log(CurrentStage)
  return renderContent[CurrentStage] || null
}

export default HomeInfo