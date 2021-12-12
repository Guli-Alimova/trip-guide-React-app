import React, { useState } from 'react';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Container } from "../../styled";
import TrendingCitiesCard from './TrandingCitiesCard';
import { useEffect } from 'react';
import apiCalls from '../../config/api';
import Loader from '../Loader/Loader';


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
    const [trandCity, setTrandCity] = useState([]);
    const [isLoading, setIsLoading] = useState (true);
    const [error, setError] = useState();
    const {t} = useTranslation();


    useEffect(()=>{
        const getCities = async()=>{
            try{
            const data = await apiCalls. getCities();
            console.log(data);
            setTrandCity(data);
            setIsLoading(false);
        }  catch (error){
            setError(error.message);
            setIsLoading(false);
        }
        }
      getCities();
    }, []);
    return(
        <TrandingSection>
            <Container>
            <Trendingtitle>{t('trend_title')}</Trendingtitle>
            <TrandingText>{t('trend_text')}</TrandingText>
            {error ? <h3>{error}</h3>: ''}
            {isLoading ? <Loader/> : ''} 
            {!isLoading && !error ?
           <TrandingMain >{trandCity.map(el=>
           (<div key={el.id}>  <TrendingCitiesCard  trandObj={el}/>
            </div> ))}
           </TrandingMain>: ''}
            </Container>
        </TrandingSection>


    )
}
export default TrandingCities;