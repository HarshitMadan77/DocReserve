import React from 'react'
import aboutImg from '../../assets/images/about.png'
import aboutCarImg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section>
        <div className="container">
            <div className="flex justigy-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 prder-2 lg:order-1">
                    <img src={aboutImg} alt="" />
                    <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                        <img src={aboutCarImg} alt=''/>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                    <h2 className='heading'>Proud to be the ones to provide Health</h2>
                    <p className='text__para'>
                        With over 30 years of experience, our platform allows patients to seamlessly book sessions with top doctors at their own clinics. 
                        Our commitment to excellence ensures that every patient receives the highest standard of medical care.
                    </p>
                    <p className='text__para mt-[20px]'>
                        Our team of experienced healthcare professionals is dedicated to providing personalized, compassionate services, 
                        utilizing the latest advancements in medical technology. Whether you need routine check-ups, specialized treatments, or ongoing support, 
                        our platform makes it easy to connect with the best medical experts, ensuring a healthier and brighter future for all.
                    </p>
                    <Link to='/'><button className='btn mt-[20px]'>Learn More</button></Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About