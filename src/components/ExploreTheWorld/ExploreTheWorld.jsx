import React, { useState } from 'react';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Container } from "../../styled";
import ExploreTheWorldCard from './ExploreTheWorldCard';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import "../ExploreTheWorld/ExploreTheWorld.css";
import apiCalls from '../../config/api';
import Loader from '../Loader/Loader';
import { useEffect } from 'react';
import SwiperCore ,  { Navigation } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {AiOutlineLeft}  from "react-icons/ai";
import {AiOutlineRight} from "react-icons/ai";


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

SwiperCore.use([Navigation]); 


const ExploreTheWorld = ()=>{
    const [exploreCity, setExploreCity] = useState([]);
    const [isLoading, setIsLoading] = useState (true);
   const [error, setError] = useState();
    const {t} = useTranslation();

    useEffect(() => {
        const getExplore = async()=>{
            try{
                const data = await apiCalls.getExplore();
                setTimeout(()=>{
                console.log(data);
                setExploreCity(data);
                setIsLoading(false);
                }, 3000);
                
            }catch (error){
                setError(error.message);
                setIsLoading(false);
            }
        }
      getExplore();
    }, [])
    return(
        <ExploreSection>
            <Container>
            <div className='explore-main'>
            <div className='explore-menu'>
            <ExploreTitle>{t('explore_title')}</ExploreTitle>
            <ExploreText>10,788 {t('explore_text')}</ExploreText>
              </div>
                <div className='explore-icon'>
                <AiOutlineLeft className='button-prev' style={{color:"rgba(132, 135, 139, 1)", width:"36px", height:"36px"}}/>
                <AiOutlineRight className='button-next' style={{color:"rgba(132, 135, 139, 1)", width:"36px", height:"36px"}} />
                </div>
                 
            </div>  
            
            {error ? <h3>{error}</h3>: ''}
            {isLoading ? <Loader/> : ''} 
            {!isLoading && !error ?
     
            <Swiper
            modules={[Navigation]}
             grabCursor={true}
             spaceBetween={10}
             slidesPerView={4}
             navigation={{
                nextEl:'.button-next',
                prevEl:'.button-prev',
            }}
        >
           {exploreCity.map(el=>(<SwiperSlide key={el.id}><ExploreTheWorldCard exploreobj={el}/></SwiperSlide>))}
          
</Swiper> : ''}

            
            </Container>
        </ExploreSection>


    )
}
export default ExploreTheWorld ;