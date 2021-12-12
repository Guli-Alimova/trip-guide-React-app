import React from 'react';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Container } from "../../styled";
import "../TopTour/TopTourCard";
import "../TopTour/TopTour.css";
import TopTourCard from '../TopTour/TopTourCard';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore ,  { Navigation } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {useState, useEffect} from 'react';
import apiCalls from '../../config/api';
import Loader from '../Loader/Loader';
import {AiOutlineLeft}  from "react-icons/ai";
import {AiOutlineRight} from "react-icons/ai";


const TopTourSection = styled.section`
background-color:${(props)=>(props.theme.backgroundColor)};
padding:70px;
`
const TopTourTitle = styled.h3`
color:${(props)=>(props.theme.h3Title)};
font-family: DM Sans;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: 70px;
letter-spacing: -0.005em;
text-align: left;

`
const TopText = styled.p`

font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
color:${(props)=>(props.theme.ptext)};
padding-bottom:61px;

`

SwiperCore.use([Navigation]); 


const TopTour =() =>{
   const [topCity, setTopCity] = useState([])
   const [isLoading, setIsLoading] = useState (true);
   const [error, setError] = useState();
   
   const {t} = useTranslation();

   useEffect(()=>{
       const getTours = async()=>{
           try{
               const data = await apiCalls.getTours();
               setTimeout(()=>{
               console.log(data);
               setTopCity(data);
               setIsLoading(false);
               }, 3000);
   
           }catch (error){
               setError(error.message);
               setIsLoading(false);
           }
           }
        getTours()
       },[])
    
    return(
       
        <TopTourSection> 
            <Container>
              <div className='top-main'>
                  <div className='top-menu'>
                    <TopTourTitle>{t("top_title")}</TopTourTitle>
                    <TopText>{t("top_text")}</TopText>   
                  </div>
                  <div className='top-icon'>
                  <AiOutlineLeft className='my-swiper-button-prev' style={{color:"rgba(132, 135, 139, 1)", width:"36px", height:"36px"}}/>
                  <AiOutlineRight className='my-swiper-button-next' style={{color:"rgba(132, 135, 139, 1)", width:"36px", height:"36px"}} />
                  </div>
                 
                </div>  
            
             
             {error ? <h3>{error}</h3>: ''}
            {isLoading ? <Loader/> : ''} 
            {!isLoading && !error ?
             <Swiper
             
             modules={[Navigation]}
             grabCursor={true}
             spaceBetween={30}
             slidesPerView={3}
             navigation={{
                 nextEl:'.my-swiper-button-next',
                 prevEl:'.my-swiper-button-prev',
             }}
        >
            {topCity.map(el =>(<SwiperSlide key={el.id}><TopTourCard cityobj={el}/></SwiperSlide>))}

</Swiper> : ''}


            </Container>
        </TopTourSection> 

    )
}
export default TopTour;