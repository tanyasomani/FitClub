
import React, { useState } from 'react'
import './testimonials.css'
import {testimonialsData} from "../../data/testimonialsData"
import leftArrow from "../../assets/leftArrow.png"
import rightArrow from "../../assets/rightArrow.png"

import {motion} from "framer-motion"



const Testimonials = () => {
    const transition = {type:"spring", duration:3};
    const [activereviewno, setActiveReviewNo] = useState(0);
    const tlength = testimonialsData.length;
  return (
    <div className='Testimonials' id='testimonials'>
      <div className="left-t">
       <span>Testimonials</span>
       <span className='stroke-text'>What they</span>
       <span>say about us</span>
       <motion.span
        key={activereviewno}
      initial={{opacity:0, x:-100}}
      transition={transition}
      animate={{opacity:1, x:0}} 
      exit={{opacity:0, x:100}}
       >
        {testimonialsData[activereviewno].review}  
       </motion.span>
       <span style={{color:"var(--orange}"}}>
        <span>{testimonialsData[activereviewno].name}</span>
       {" "} ~ {testimonialsData[activereviewno].status}
       </span>
      </div>
      <div className="right-t">
      <motion.div
      initial={{opacity:0, x:-100}}
      transition={{...transition, duration:2}}
      whileInView={{opacity:1, x:0}}></motion.div>
      <motion.div   
      initial={{opacity:0, x:100}}
      transition={{...transition, duration:2}}
      whileInView={{opacity:1, x:0}}></motion.div>
      <motion.img
      key={activereviewno}
      initial={{opacity:0, x:100}}
      transition={transition}
      animate={{opacity:1, x:0}} 
      exit={{opacity:0, x:-100}}
      src={testimonialsData[activereviewno].image} alt="" />
      <div className="arrows">
        <img
        onClick={()=>{
          activereviewno===0 ? setActiveReviewNo(tlength-1) : setActiveReviewNo((prev)=> prev - 1)
        }} 
         src={leftArrow} alt="" />
        <img
         onClick={()=>{
          activereviewno===tlength-1 ? setActiveReviewNo(0) : setActiveReviewNo((prev)=> prev + 1)
        }} 
         src={rightArrow} alt="" />
      </div>
      </div>
    </div>
  )
}

export default Testimonials
