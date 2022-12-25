import React from 'react';
import styles  from './style';

import { Navbar, Billing, CardDeal, Business, Clients, CTA, Starts,
  Footer, Testimonials, Hero } from "./components/";


const App = () => {
  return (
    <div className='text-white bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar/>
          </div> 
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero/>
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Starts/>
            <Business/>
            <Billing/>
            <CardDeal/>
            <Testimonials/>
            <Clients/>
            <CTA/>
            <Footer/>
          </div>
        </div>

    </div>
  );
};

export default App;