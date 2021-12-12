import React from 'react';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Container } from "../../styled";
import BestPlacesCard from "../BestPlaces/BestPlacesCard";

const BestSection= styled.section`
background-color:${(props)=>(props.theme.backgroundColor)};
padding:70px;
`
const SearchTitle = styled.h2`
font-family: DM Sans;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: 70px;
letter-spacing: -0.005em;
text-align: center;
color: ${(props)=>(props.theme.popularfilter)}

`

const SearchText = styled.p`

font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: center;
color: rgba(132, 135, 139, 1);
width:543px;
margin:0 auto;
padding-bottom:64px;

`
const BestCardbox = styled.div`
display:flex;
flex-wrap:wrap;
justify-content: space-between;

`

const BestPlaces = ()=>{
    const {t} = useTranslation();
   
    return(
      
        <BestSection>
        <Container>
        <SearchTitle>{t('search_title')}</SearchTitle>
        <SearchText>{t('search_text')}</SearchText>
        <BestCardbox> 
        <BestPlacesCard/>
      
        </BestCardbox>
        </Container> 
        </BestSection>
 
      
    )
}
export default BestPlaces;