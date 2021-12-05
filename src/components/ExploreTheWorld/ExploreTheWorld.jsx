import React from 'react';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Container } from "../../styled";
import ExploreTheWorldCard from './ExploreTheWorldCard';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore , { Autoplay } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';


const ExploreSection=styled.div`
background-color:${(props)=>(props.theme.backgroundColor)};
padding:70px;

`
const ExploreTitle = styled.h3`
color:${(props)=>(props.theme.h3Title)};
font-family: DM Sans;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: 70px;
letter-spacing: -0.005em;
text-align: left;
`

const ExploreText = styled.p`
color:${(props)=>(props.theme.ptext)};
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
padding-bottom:49px;

`

SwiperCore.use([Autoplay]);


const ExploreTheWorld = ()=>{
    const {t} = useTranslation();
    return(
        <ExploreSection>
            <Container>
            <ExploreTitle>{t('explore_title')}</ExploreTitle>
            <ExploreText>10,788 {t('explore_text')}</ExploreText>
            <Swiper
             modules={[Autoplay]} 
             grabCursor={true}
             spaceBetween={10}
             slidesPerView={4}
             loop autoplay={{delay:3000, disableOnInteraction:false}}
        >
           <SwiperSlide><ExploreTheWorldCard/></SwiperSlide>
           <SwiperSlide><ExploreTheWorldCard/></SwiperSlide>
           <SwiperSlide><ExploreTheWorldCard/></SwiperSlide>
           <SwiperSlide><ExploreTheWorldCard/></SwiperSlide>
</Swiper>

            
            </Container>
        </ExploreSection>


    )
}
export default ExploreTheWorld ;