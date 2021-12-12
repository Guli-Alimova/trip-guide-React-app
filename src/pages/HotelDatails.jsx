import React from 'react';
import styled from "styled-components";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {Container} from "../styled/index";
import HotelDatailsCard from '../components/HotelDatails/HotelDatailsCard';
import RoomAndHouse from '../components/RoomAndHouse/RoomAndHouse';
import {AiOutlineRight} from "react-icons/ai";
import { useParams } from 'react-router-dom';
import apiCalls from '../config/api';
import Loader from "../components/Loader/Loader";
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';



const HotelDatailsSection = styled.section`
padding:40px 0 228px 0;
background-color:${(props)=>(props.theme.backgroundColor)}
`
const BreadCr = styled.div`
a{
    color:${(props)=>props.theme.popularfilter};
    text-decoration:none;
}
li{
    color:${(props)=>props.theme.btnPlus};
}
}
`


const HotelDatails = ()=>{
  const {t} = useTranslation()
    const [hoteldetail, setHoteldetail] = useState([]);
  const [isLoading, setIsLoading] = useState (true);
  const [error, setError] = useState();
  const {id} = useParams();
  useEffect(()=>{
    console.log(id);

    const  getHotelDetail = async () =>{
      try{
        const data = await apiCalls.getHotelDetail(id);
        setTimeout(() => {
        setHoteldetail(data);
        setIsLoading(false); 
        }, 3000);
      

      }catch (error){
        setError(error.message);
        setIsLoading(false);
      }
    }
    getHotelDetail();
  }, [id])

    return(
        < HotelDatailsSection>
        <Container>
        <BreadCr> 
        <Breadcrumb>
        <Breadcrumb.Item href="/">{t("uy")}</Breadcrumb.Item><AiOutlineRight style={{marginTop:"5px", color:"rgba(59, 62, 68, 1)"}}/>
        <Breadcrumb.Item href="/hotellist">
        {t("hotellist")}
        </Breadcrumb.Item><AiOutlineRight style={{marginTop:"5px", color:"rgba(59, 62, 68, 1)"}}/>
        <Breadcrumb.Item active>{t("hoteldetail")}</Breadcrumb.Item>
        </Breadcrumb>
        </BreadCr>
        
        {error ? <h3>{error}</h3>: ''}
        {isLoading ? <Loader/> : ''} 
        {!isLoading && !error ?
      
          <HotelDatailsCard prop={hoteldetail}/>    
       : ''}
      
       <RoomAndHouse prop ={hoteldetail} />
       
       
       
        </Container>







</HotelDatailsSection>
    )

}
export default HotelDatails;
