import React from 'react';
import styled from "styled-components";
// import { useTranslation } from 'react-i18next';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {Container} from "../styled/index";
import HotelDatailsCard from '../components/HotelDatails/HotelDatailsCard';
import RoomAndHouse from '../components/RoomAndHouse/RoomAndHouse';

const HotelDatailsSection = styled.section`
padding:40px 0 228px 0;
background-color:${(props)=>(props.theme.backgroundColor)}
`


const HotelDatails = ()=>{
    return(
        < HotelDatailsSection>
        <Container>
        <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/hotellist">
         Hotel list
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Hotel details</Breadcrumb.Item>
        </Breadcrumb>
        <HotelDatailsCard/>
        <RoomAndHouse/>
       
       
       
        </Container>







</HotelDatailsSection>
    )

}
export default HotelDatails;
