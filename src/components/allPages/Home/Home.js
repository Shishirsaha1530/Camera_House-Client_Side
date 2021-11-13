import React from 'react';
import TopBanner from './TopBanner/TopBanner';
import BottomBanner from './BottomBanner/BottomBanner';
import About from './../About/About';
import ContactUs from './../Contact/ContactUs';
import FrequentAsk from './../FAQ/FrequentAsk';
import Footer from './../Footer/Footer';
import AllCamera from './../Product/AllProducts/AllCamera';
import Review from './../Review/Review';

const Home = () => {
    return (
        <div>
            <TopBanner> </TopBanner>
            <BottomBanner> </BottomBanner>
            <About> </About>
            <AllCamera> </AllCamera>
            <Review> </Review>
            <FrequentAsk> </FrequentAsk>
            <ContactUs> </ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;