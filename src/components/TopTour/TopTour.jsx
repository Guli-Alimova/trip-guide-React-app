import React from 'react';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Container } from "../../styled";
import "../TopTour/TopTourCard";
import "../TopTour/TopTour.css";
import TopTourCard from '../TopTour/TopTourCard';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore , { Autoplay } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from 'swiper';




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

`
SwiperCore.use([Autoplay]);
SwiperCore.use([Pagination]); 


const TopTour =() =>{
   
    const {t} = useTranslation();
    
    return(
       
        <TopTourSection> 
            <Container>
             <TopTourTitle>{t("top_title")}</TopTourTitle>
             <TopText>{t("top_text")}</TopText>
         
             <Swiper
             
             modules={[Navigation, Pagination, {Autoplay}]}
             grabCursor={true}
             spaceBetween={30}
             slidesPerView={3}
            //  pagination={{ clickable: true }}

             loop autoplay={{delay:3000, disableOnInteraction:false}}
        >
           <SwiperSlide><TopTourCard/></SwiperSlide>
           <SwiperSlide><TopTourCard/></SwiperSlide>
           <SwiperSlide><TopTourCard/></SwiperSlide>
    
</Swiper>


            </Container>
        </TopTourSection> 

    )
}
export default TopTour;