import React from 'react';
import styled from "styled-components";
import{Container} from '../../styled';
import "../../styled";
import { useTranslation } from 'react-i18next';

const IntroSection = styled.section`
background-image:url(/assetts/img/intro-bg.png);
background-repeat: no-repeat;
background-size:cover;
background-position: center center;
width: 100%;

`
const IntroTitle = styled.h1`
font-family: Poppins;
font-size: 64px;
font-weight: 700;
line-height: 80px;
letter-spacing: -0.005em;
width: 487px;
margin:0;
padding-top:141px;
padding-bottom:200px;

`

const Intro= ()=>{
    const { t } = useTranslation();
    return(
        
        <IntroSection>
        <Container>
        <IntroTitle>{t('intro_text')}</IntroTitle>
       
      </Container>
      
       </IntroSection>


    )
}
export default Intro;