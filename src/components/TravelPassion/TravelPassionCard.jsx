import React from 'react';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { AiFillStar } from "react-icons/ai"
import "../TravelPassion/TravelPassion.css"

const PassionCard = styled.div`
position:relative;

`
const Toplinergradient = styled.div`
background: linear-gradient(175.54deg, rgba(2, 0, 14, 0.13) 9.38%, rgba(42, 34, 101, 0) 47.26%, rgba(15, 11, 44, 0.6) 92.77%);
   position:absolute;
   top:0px;
   left:0px;
   width:100%;
   height:100%;
   border-radius:16px;
`
const PassionImg = styled.img`
background-color: linear-gradient(8.54deg, rgba(31, 31, 31, 0.63) 17.12%, rgba(35, 35, 35, 0) 92.69%);
width:270px;
border-radius:15px;
`
const PassionTitle = styled.p`
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 32px;
letter-spacing: 0em;
text-align: left;
color:rgba(255, 255, 255, 1);
margin:0;
`
const PassionReview = styled.div`
position:absolute;
left: 11.56%;
top: 76.86%;
`
const Passionraiting = styled.span`
font-family: DM Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 21px;
letter-spacing: 0em;
text-align: left;
color:rgba(255, 255, 255, 1);
`
const TravelPassionCard =()=>{
    const {t} = useTranslation()
    return(
        <div className="passion-main">
        < PassionCard > 
        <Toplinergradient></Toplinergradient>
        < PassionImg src="/assetts/img/Mask Group (4).png" alt="" />
        <PassionReview>
       
        <PassionTitle>{t('passion_title')}</PassionTitle>
        <AiFillStar style={{ color: "#FFD166", fontSize: "22px" }} />
        <Passionraiting> 4.8 (122 {t('passion_raview')})</Passionraiting>           
        </PassionReview>
        </PassionCard>

         < PassionCard >
         <Toplinergradient></Toplinergradient>
         < PassionImg src="/assetts/img/Mask Group (1).png" alt="" />
         <PassionReview>
         <PassionTitle>{t('passion_title1')}</PassionTitle>
         <AiFillStar style={{ color: "#FFD166", fontSize: "22px" }} />
         <Passionraiting> 4.8 (122 {t('passion_raview')})</Passionraiting>           
         </PassionReview>
         </PassionCard>

          < PassionCard >
          <Toplinergradient></Toplinergradient>
          < PassionImg src="/assetts/img/Mask Group (2).png" alt="" />
          <PassionReview>
          <PassionTitle>{t('passion_title2')}</PassionTitle>
          <AiFillStar style={{ color: "#FFD166", fontSize: "22px" }} />
          <Passionraiting> 4.8 (122 {t('passion_raview')})</Passionraiting>           
          </PassionReview>
          </PassionCard>

           < PassionCard >
           <Toplinergradient></Toplinergradient>
           < PassionImg src="/assetts/img/Mask Group (3).png" alt="" />
           <PassionReview>
           <PassionTitle>{t('passion_title3')}</PassionTitle>
           <AiFillStar style={{ color: "#FFD166", fontSize: "22px" }} />
           <Passionraiting> 4.8 (122 {t('passion_raview')})</Passionraiting>           
           </PassionReview>
           </PassionCard>

    </div>
    )
}
export default TravelPassionCard;

