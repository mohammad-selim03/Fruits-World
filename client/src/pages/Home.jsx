// import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Accordion from '../components/home/Accordion';
import Banner from '../components/home/Banner'
import Products from '../components/home/Products';
import Categoris from '../components/home/Categoris';
import Contact from './Contact';
import UserReview from './UserReview';


const Home = () => {
    const data = useLoaderData();
    
    return (
        <div>
           
            <Banner/>
            <Products data={data}/>
            <Categoris/>
            <UserReview/>
            <Accordion/>
            <Contact/>
            
           
        </div>
    );
};

export default Home;