import React from 'react';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Container } from "../../styled";
import TravelPassionCard from './TravelPassionCard';

const TravelSection = styled.section`
padding:70px 0 244px 0;
background-color:${(props)=>(props.theme.backgroundColor)};

`
const TravelTitle = styled.h3`

font-family: DM Sans;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: 70px;
letter-spacing: -0.005em;
text-align: left;
color:${(props)=>(props.theme.h3Title)};
`
const TravelText = styled.p`

font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
color:${(props)=>(props.theme.ptext)};
padding-bottom:42px;
`
const TravelPassion =()=>{
    const {t} = useTranslation();
    return(
        <TravelSection>
            <Container>
            <TravelTitle>{t('travel_title')}</TravelTitle>
            <TravelText>{t('travel_text')}</TravelText>
            <TravelPassionCard/>

            </Container>
        </TravelSection>

    )
}
export default TravelPassion;