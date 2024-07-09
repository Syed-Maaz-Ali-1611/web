import React from 'react'
import "./Services.css"
import Web from '../../assets/images/web.png'
import App from '../../assets/images/app.png'
import Product from '../../assets/images/product.png'
import SQA from '../../assets/images/sqa.png'
import SEO from '../../assets/images/seo.png'
import Graphics from '../../assets/images/graphics.png'
import Game from '../../assets/images/game.png'
import Content from '../../assets/images/writer.png'

function Services() {
  return (
    <div className='main'>



      <div className='section1'>
        <div className='content-section1'>
          <h2>Transformative Solutions for Every Stage of Your Product Cycle</h2>
          <h4>End-To-End Software Development Services. We are helping customers digitalize existing business, build innovative new products, and augment teams with high performance members.</h4>
        </div>
      </div>


      <div className='testimonials'>
  <h2>What We Offer</h2>
  <div className='service-section'>
    <div className='service-item'>
      <img src={Web} alt='web' className='service-image' />
      <h3>Web App Development</h3>
      <p>Our expert developers build powerful, scalable web solutions to elevate your online presence and engage users with exceptional web experiences.</p>
    </div>
    <div className='service-item'>
      <img src={App} alt='app' className='service-image' />
      <h3>Mobile App Development</h3>
      <p>We build high-performing mobile apps that boost sales and engagement. We deliver across platforms to keep you ahead in the mobile world.</p>
    </div>
    <div className='service-item'>
      <img src={Product} alt='product' className='service-image' />
      <h3>Product Design UI/UX</h3>
      <p>Our UI/UX experts craft exceptional designs that grab user attention and deliver intuitive experiences with all proper branding.</p>
    </div>
    <div className='service-item'>
      <img src={SQA} alt='sqa' className='service-image' />
      <h3>Software Quality Assurance (SQA)</h3>
      <p>We meticulously test, guaranteeing your product is bug-free and runs smoothly with flawless user experience and superior performance.</p>
    </div>
    <div className='service-item'>
      <img src={Graphics} alt='graphics' className='service-image' />
      <h3>Graphics Design</h3>
      <p>We deliver intuitive and responsive interfaces, captivating visuals (branding, marketing) that tell your brand story and engage the audience.</p>
    </div>
    <div className='service-item'>
      <img src={SEO} alt='seo' className='service-image' />
      <h3>SEO (Search Engine Optimization)</h3>
      <p>Boost your online presence, enhance your site’s visibility through comprehensive on-page, off-page, and technical SEO by our specialists.</p>
    </div>
    <div className='service-item'>
      <img src={Content} alt='content' className='service-image' />
      <h3>Content Creation</h3>
      <p>We craft high-impact content for blogs, websites, and articles that will engage your audience and amplify your brand voice.</p>
    </div>
    <div className='service-item'>
      <img src={Game} alt='game' className='service-image' />
      <h3>Game Development</h3>
      <p>We create engaging and immersive gaming experiences that captivate players and keep them coming back for more.</p>
    </div>
  </div>
</div>
      <div className='section10'>
        <div className='content-section10'>
          <h4>Experience the pinnacle of digital innovation and transformation with our comprehensive suite of services, designed to propel your business forward at every stage of the product cycle. Let’s build the future together!</h4>
        </div>
      </div>


    </div>
  )
}

export default Services
