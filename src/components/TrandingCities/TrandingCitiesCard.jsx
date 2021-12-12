import React from 'react';
import styled from "styled-components";
import "../TrandingCities/TrandingCities.css";
import { AiFillStar } from "react-icons/ai";
import { useTranslation } from 'react-i18next';


const TrandingCard = styled.div`
display:flex;
padding:24px;
width: 534px;
border-radius: 20px;
background:${(props)=>(props.theme.card)};
margin-bottom:35px;


`
const TrandingLeft = styled.div`
margin-right:23px;

`
const TrandingRight = styled.div`
`

const TrandingRaiting = styled.span`

font-family: DM Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: center;
color:${(props)=>(props.theme.cardtitle)};
margin-left:8px;

`
const TrandingTitle = styled.h4`
color:${(props)=>props.theme.cardtitle};
font-family: DM Sans;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 36px;

`
const TrandingPrice = styled.p`
color:${(props)=>props.theme.title};
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 18px;
text-align: center;
padding:26px 0;
margin:0;
`
const TrandingRait = styled.div`
display: flex;
margin-top:12px;
vertical-align: middle;
`

const TrandingDay = styled.span`
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 18px;
letter-spacing: 0em;
text-align: center;
color:#ccc;
`
const TrandinfBtn = styled.button`
padding:7px 16px;
border-radius: 6px;
background-color: rgba(49, 107, 255, 1);
border:none;
font-family: DM Sans;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 18px;
letter-spacing: 0em;
text-align: center;
color:rgba(255, 255, 255, 1);

`
const TrendingCitiesCard =({trandObj})=>{
    const {t} = useTranslation();
    return(
        <TrandingCard>
            <TrandingLeft>
               <img src = {`/assetts/img/${trandObj.photo}`} alt=""/> 
            </TrandingLeft> 
            <TrandingRight>
                <TrandingTitle>{trandObj.name}</TrandingTitle>
                <TrandingRait >
              <AiFillStar style={{ color: "#FFD166", fontSize: "22px" }} />
            <TrandingRaiting>{trandObj.rating}</TrandingRaiting>
            </TrandingRait>
            <TrandingPrice>{trandObj.price}<TrandingDay>/{t("kecha")}</TrandingDay></TrandingPrice>
            <TrandinfBtn>{t('book_now')}</TrandinfBtn>
            </TrandingRight>

        </TrandingCard>



    )
}
export default  TrendingCitiesCard;
