import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className="home__container">
        <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB28684220_.jpg" alt="imag" />
        <div className="home__row">
            {/* Product */}
            
            <Product id ={1} title='Philips Audio TAH6506BK/00 Slim & Lightweight Bluetooth Wireless Over Ear Headphones with Active Noise Cancellation, 30 Hrs Playtime & Multipoint Pairing with mic (Black) ' price={3999} image='https://m.media-amazon.com/images/I/311gy6q+bWL._SY300_SX300_.jpg' rating={4}  />
            {/* Product */}
            <Product id ={2} title='Nike Boys Mercurial Veloce Iii Df Fg sneaker ' price={48931} image='https://m.media-amazon.com/images/I/51UDX+yrWXS._UX695_.jpg' rating={4}/>
            <Product id ={3} title='Apple iPhone 14 Pro Max (128 GB) - Deep Purple ' price={127999} image='https://m.media-amazon.com/images/I/31GmCJTD0GL._SY445_SX342_QL70_FMwebp_.jpg' rating={5}/> 
        </div>
        <div className="home__row">
            {/* Product */}
            <Product id ={4} title='Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt || Men Printed Shirt (Mistry)' price={419} image='https://m.media-amazon.com/images/I/71MaGTXl7ML._AC_UL400_.jpg' rating={4} />
            <Product id ={5} title='Lymio Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt || Men Printed Shirt (Beach-Floral-BSY) ' price={399} image='https://m.media-amazon.com/images/I/717kxMoZiAL._AC_UL400_.jpg' rating={4} />
            {/* Product */}
            <Product id ={6} title='Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt || Men Printed Shirt (Mistry)' price={419} image='https://m.media-amazon.com/images/I/711LeSGXlcL._AC_UL400_.jpg' rating={3}/>
            {/* Product */}
            <Product id ={7} title='Vida Loca' price={649} image='https://m.media-amazon.com/images/I/51+5LdlGLRL._AC_UL400_.jpg' rating={4}/>
        </div>
        <div className="home__row">
            {/* Product */}
            <Product id ={8} title='FASTRACK Analog Silver Dial Mens Watch-3288NM01' price={5895} image='https://m.media-amazon.com/images/I/51-8nIOIjXL._AC_UL400_.jpg' rating={3.5}/>
            <Product id ={9} title='Amazfit Band 7 Activity Fitness Tracker, Always-on AMOLED Display, Alexa Built-in, Up to 18-Day Battery Life, 24H Heart Rate & SpO2 Monitoring, 5 ATM Water Resistant, 120 Sports Modes (Beige)' price={3499} image='https://m.media-amazon.com/images/I/61xmPxXNPUL._AC_UY218_.jpg' rating={3} />
        </div>
        <div className="home__row">
            {/* Product */}
            <Product id ={10} title='Samsung Galaxy Book3 360 Intel 13th Gen i7 EvoTM 33.78cm(13.3") Super Amoled 2-in-1 Touchscreen Laptop (16 GB/1TB SSD/Windows11/MS Office/Backlit KB/Fingerprint Sensor/Graphite/1.16Kg), NP730QFG-KA3IN' price={129900} image='https://m.media-amazon.com/images/I/71tPWK3MzHL._AC_UY218_.jpg' rating={4.5}/>
            <Product id ={11} title='Apple 2020 MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Greyhttps://m.media-amazon.com/images/I/81aTWbBrR5L._AC_UY218_.jpg' price={79900} image='https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY218_.jpg' rating={4} />
            <Product id ={12} title='HP Laptop 15s, 12th Gen Intel Core i7-1255U, 15.6 inch(39.6cm)FHD Laptop(16GB RAM,512GB SSD,Intel Iris Xe Graphics,Dual Speakers,Alexa,Numeric Keypad,Win 11,MSO 21 1.69 Kgs,Natural Silver)15s-fq5190TU' price={69900} image='https://m.media-amazon.com/images/I/81aTWbBrR5L._AC_UY218_.jpg' rating={4.5} />
        </div>
        <div className="home__row">
        <Product id ={13} title='NEW SteelSeries Arctis Nova 7 Wireless Multi-Platform Gaming Headset – Simultaneous Wireless 2.4GHz & Bluetooth – Comfort Design - Fast Charging 38Hr Battery – PC, PS, Switch, Mobile ' price={3999} image='https://m.media-amazon.com/images/I/719xhYDZj9L.__AC_SX300_SY300_QL70_FMwebp_.jpg' rating={4.5}/>
        <Product id ={14} title='BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES ' price={4299} image='https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg' rating={5}/>
        <Product id ={15} title='Tiege Hanley Essential Skin Care Routine for Men | Skin Care System Level 1 | Face Wash, Scrub, and Two' price={1499} image='https://m.media-amazon.com/images/I/71MgPo0VYJL._AC_UL320_.jpg' rating={4.5}/>
        <Product id ={16} title='Grande Cosmetics GrandeLASH-MD Lash Enhancing Serum' price={799} image='https://m.media-amazon.com/images/I/519OW1zHAtL._AC_UL320_.jpg' rating={4}/>
        </div>

        <div className="home__row">
            {/* Product */}
            <Product id ={17} title='Real Diamond & Gold Ring for Men' price={18052} image='https://m.media-amazon.com/images/I/41YcNgpIazL._AC_UL400_.jpg' rating={3.5}/>
            <Product id ={18} title='Amazfit Band 7 Activity Fitness Tracker, Always-on AMOLED Display, Alexa Built-in, Up to 18-Day Battery Life, 24H Heart Rate & SpO2 Monitoring, 5 ATM Water Resistant, 120 Sports Modes (Beige)' price={3499} image='https://m.media-amazon.com/images/I/61xmPxXNPUL._AC_UY218_.jpg' rating={3} />
        </div>
      </div>
    </div>
  )
}

export default Home
