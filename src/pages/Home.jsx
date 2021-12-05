import React from 'react';
import Intro from '../components/Intro/Intro';
import Tablet from '../components/Tab/Tab';
import BestPlaces from '../components/BestPlaces/BestPlaces';
import FeaturedDes from '../components/FeaturedDestinations/FeaturedDes';
import TopTour from '../components/TopTour/TopTour';
import ExploreTheWorld from '../components/ExploreTheWorld/ExploreTheWorld';
import TrandingCities from '../components/TrandingCities/TrandingCities';
import TravelPassion from '../components/TravelPassion/TravelPassion';


const Home = () => {
  
    return (
        <div>
         <Intro/>
         <Tablet/>
         <BestPlaces/>
         <FeaturedDes/>
         <TopTour/>
         <ExploreTheWorld/>
         <TrandingCities/>
         <TravelPassion/>
       
         
        </div>
    );
}

export default Home;
