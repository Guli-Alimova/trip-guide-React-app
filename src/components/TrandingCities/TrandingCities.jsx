import React from 'react';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Container } from "../../styled";
import TrendingCitiesCard from './TrandingCitiesCard';

const TrandingSection= styled.section`
padding:59px;
background-color:${(props)=>(props.theme.trand)};

`
const Trendingtitle = styled.h3`
color:${(props)=>(props.theme.h3Title)};
font-family: DM Sans;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: 70px;
letter-spacing: -0.005em;
text-align: center;


`
const TrandingText = styled.p`
font-family: DM Sans;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: center;
color:${(props)=>(props.theme.ptext)};
margin-bottom:50px;
`
const TrandingMain = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`
const TrandingCities =()=>{
    const {t} = useTranslation();
    return(
        <TrandingSection>
            <Container>
            <Trendingtitle>{t('trend_title')}</Trendingtitle>
            <TrandingText>{t('trend_text')}</TrandingText>
            <TrandingMain>
            <TrendingCitiesCard/>
            <TrendingCitiesCard/>
            <TrendingCitiesCard/>
            <TrendingCitiesCard/>
            <TrendingCitiesCard/>
            <TrendingCitiesCard/>
            </TrandingMain>
            </Container>
        </TrandingSection>


    )
}
export default TrandingCities;