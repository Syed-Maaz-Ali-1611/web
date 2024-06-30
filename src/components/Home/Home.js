import React, { useEffect } from 'react';
import Image from '../../assets/images/home1.jpg';
import Image2 from '../../assets/images/image2.gif';
import MissionImage from '../../assets/images/mission.png';
import VisionImage from '../../assets/images/vision.jpg';
import './Home.css';

function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);
  const handleContactClick = () => {
    // history.push('/contact');
  };

  return (
    <div className='main'>
      <div className='main-section fade-in-section'>
        <div className='content-homepage typewriter'>
        
          <h2>WEPPSO</h2>
            <h4 class="btn-shine">
              We transform your tech vision to reality from design to development,
              with an emphasis on ground-breaking innovation and user-centric experiences.
            </h4>
            <button className="button-cta " onClick={handleContactClick}>Contact Us</button>

          
        </div>
        <div className='image-first'>
          <img src={Image} alt='Home1' />
        </div>
      </div>

      {/* second section */}
      <div className='second-section fade-in-section'>
        <div className='content-secondpage'>
          <h2>EMPOWERING DIGITAL SERVICES</h2>
          <h4>We’re a leading full-service product development agency, specializing in the entire website and application design and development services.</h4>
        </div>
      </div>

      {/* third section */}
      <div className='third-section fade-in-section'>
        <div className='content-thirdpage'>
          <h2>Why Choosing Weppso?</h2>
          <h4>At Weppso, we go beyond just building software; we forge partnerships. Our  team of experts encompasses the entire spectrum of your needs,
            from bespoke software development to comprehensive maintenance and ongoing support.We meticulously craft a collaborative and gratifying experience.</h4>
        </div>
        <div className='image-thirdpage'>
          <img src={Image2} alt='Gif' />
        </div>
      </div>

      {/* Tab make your own  */}
      <div className = 'Make-section'>
        <div className='content-makepage'>
        <h5>Weppso</h5>
        <h2>Make your own pieces. <br/>everywhere!</h2>
        <h4>Weppso is good wherever you go. You can use it to start creating parts of an existing project or to create a new composition project.
        </h4>
        </div>
      </div>

      {/* mission section */}
      <div className='mission-section fade-in-section'>
        <div className='image-mission'>
          <img src={MissionImage} alt='Mission'/>
        </div>
        <div className='content-mission'>
          <h2>Our Mission</h2>
          <h4>Our mission is to seamlessly integrate our clients as valued members of the Weppso
           team by providing engaging and immersive products.</h4>
        </div>
      </div>

      {/* forefont section */}
      <div className='forefront-section'>
        <div className='content-forefront'>
          <h2>FOREFRONT OF THE NEW INNOVATION</h2>
          <h4>
Our experts will conduct thorough consultations to gather insights and evaluate your current setup. We will then analyze your objectives to recommend the most suitable tools and technologies.
</h4>
        </div>
      </div>

      {/* vision section */}
      <div className='vision-section fade-in-section'>
        <div className='content-vision'>
          <h2>Our Vision</h2>
          <h4>Our vision is to revolutionize the digital landscape by creating technology that empower brands. We aspire to set standards 
            of excellence in technology and user experience.</h4>
        </div>
        <div className='image-vision'>
          <img src={VisionImage} alt='Vision'/>
        </div>
      </div>

      {/* last section  */}
      <div className='last-section'>
        <div className='content-lastsection'>
        <h2>Make An Appointment To See Our Team; We Would Be <br/> Happy To Help.</h2>
<h4> Please Contact Us With Any Inquiries Or More Information About Our Services.</h4>  
<button className="button-cta " onClick={handleContactClick}>Contact Us</button>

    </div>
      </div>

    </div>
  );
}

export default Home;
