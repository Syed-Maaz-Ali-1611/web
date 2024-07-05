import React from 'react'
import './About.css'
import Section2 from '../../assets/images/mission.png'
import Section4 from '../../assets/images/com.png'
function About() {
  return (
    <div className='About-main'>
        <div className='section-1'>
            <div className='content-section-1'>
                <h2>WEPSSO</h2>
                <h4>Where Vision Becomes Applause-Worthy Reality</h4>
            </div>
        </div>

        <div className='section-2'>
            <div className='content-section-2'>
                <h2>ALLOW US INTRODUCE OURSELVES</h2>
                <h4>At Weppso, we build apps, websites, and graphics –using the tools that propel game-changing companies and global influencers into the spotlight. 
Our reputation is glowing client feedback which is a testament to our dedication to groundbreaking custom solutions
</h4>
            </div>
            <div className='section-2-image'>
                <img src={Section2} alt='section-2-image' />
            </div>

        </div>


        <div className='section-3'>
            <div className='content-section-3'>
                <h2>TRUST, QUALITY AND OPENESS</h2>
                <h4>Your Vision, Our Expertise</h4>
                <h5>We believe in true partnership. We work alongside you and your team prioritizing unwavering quality, utilizing multi-stage QA processes and the best-in-class solutions to bring your vision to life.</h5>
            </div>
        </div>

        <div className='section-4'>
        <div className='section-4-image'>
                <img src={Section4} alt='section-4-image' />
            </div>
            <div className='content-section-4'>
                <h2>COMMUNICAION</h2>
                <h4>Keeping You in the LOOP</h4>
                <h5>Crystal-clear communication is our mantra. We ditch the technical jargon and ensure you understand the process. By providing regular updates throughout the cycle, and post-launch, keeping you informed with product performance data and next steps.</h5>
            </div>
          
        </div>

        <div className='section-5'>
            <div className='content-section-5'>
                <h2>OUR CLIENTS</h2>
                <h4>We don't just work for you, we partner with you. Our talented team collaborates seamlessly to deliver solutions that perfectly align with your unique business needs.

Thank you, existing customers, for your trust and support.
</h4>
            </div>
        </div>

        <div className='section-6'>
            <div className='content-section-6'>
                <h2>Our Expertise, Your Success.</h2>
                <div className='testemonials-1'>
                    <h3>Technical Prowess</h3>
                    <p>Our certified IT experts excel in cloud computing, cybersecurity, AI, and machine learning. We bring proven expertise to solve complex challenges across industries, driving successful digital transformations.</p>
                </div>
                <div className='testemonials-2'>
                    <h3>Innovation Leadership</h3>
                    <p>We harness emerging technologies like blockchain, IoT, and advanced analytics to create cutting-edge solutions. Our forward-thinking approach keeps your business ahead in the rapidly evolving digital landscape.</p>
                </div>

                <div className='testemonials-3'>
                    <h3>Client-Centric Solutions</h3>
                    <p> Your business goals shape our strategy. We design custom IT solutions tailored to your unique needs, industry, and growth objectives. Our agile methodology ensures adaptable development aligned with your vision.</p>
                </div>

                <div className='testemonials-4'>
                    <h3>Uncompromising Quality</h3>
                    <p>Experience robust, scalable, and secure IT infrastructure that elevates operational excellence. Our rigorous QA processes and adherence to industry standards guarantee high-performance, future-proof systems.</p>
                </div>

                <div className='testemonials-5'>
                    <h3>Dedicated Support</h3>
                    <p> Benefit from 24/7 proactive maintenance and responsive support. Our team uses advanced monitoring tools to ensure optimal performance, providing regular updates and strategic technology planning for long-term success.</p>
                </div>
            </div>
        </div>
      


    </div>
  )
}

export default About
