import Breadcrumb from 'react-bootstrap/Breadcrumb'
import React from 'react';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Container, Row } from "../styled/index";
import HotelSearch from '../components/HotelSearch/HotelSearch';
import HotelPanel from '../components/HotelPanel/HotelPanel';
import AsideFilter from '../components/AsideFilter/AsideFilter';

const HotelSection = styled.section`
background-color:${(props)=>props.theme.backgroundmain};
`
const Hoteldiv = styled.div`
display:flex;
justefy-content:space-between;
padding:70px 0 120px 0;

`
const Crumb = styled.div`
padding:40px  0 59px 55px;
background-color:${(props)=>props.theme.backgroundmain};
`
const HotelList =()=>{
    return(
        <HotelSection>

            <Crumb>
            <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Hotel list</Breadcrumb.Item>
            </Breadcrumb>  
            </Crumb>
        
            <HotelSearch/> 
            <Hoteldiv>  
            <AsideFilter/> 
            <div>
            <HotelPanel/>
            <HotelPanel/>
            <HotelPanel/>
            </div>
            </Hoteldiv>
            

       


       
        
             
               
               
                
              
           
          

          </HotelSection>

     
    )
}
export default HotelList;