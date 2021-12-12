import React from 'react';
import styled from "styled-components";
import { Container } from '../styled/index';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {AiOutlineRight } from "react-icons/ai";
import Congratulate from '../components/Congratulation/Congratulate';
import { useParams } from 'react-router-dom';
import apiCalls from '../config/api';
import Loader from "../components/Loader/Loader";
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';


const CongratulateSection = styled.section`
background-color:${(props)=>(props.theme.backgroundColor)};
padding:40px  0 324px 0;
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
const Congratulations =()=>{
  const {t} = useTranslation();
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
        <CongratulateSection>
             <Container>
               <BreadCr>
            <Breadcrumb>
            <Breadcrumb.Item href="/">{t("uy")}</Breadcrumb.Item>
            <Breadcrumb.Item href="/hotellist"><AiOutlineRight style={{color:"rgba(59, 62, 68, 1)"}}/>
            {t("hotellist")}
            </Breadcrumb.Item>
            <Breadcrumb.Item href={`/hoteldatails/${hoteldetail.id}`}><AiOutlineRight style={{ color:"rgba(59, 62, 68, 1)"}}/>
            {t("hoteldetail")}<AiOutlineRight style={{ color:"rgba(59, 62, 68, 1)"}}/>
            </Breadcrumb.Item>
            <Breadcrumb.Item href={`/hotelconfirm/${hoteldetail.id}`}>
            {t("confirmation")} <AiOutlineRight style={{ color:"rgba(59, 62, 68, 1)"}}/>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{t( "congratulate")}</Breadcrumb.Item>
           </Breadcrumb>
           </BreadCr>
           {error ? <h3>{error}</h3>: ''}
            {isLoading ? <Loader/> : ''} 
            {!isLoading && !error ?
           <Congratulate prop={hoteldetail}/>: "" }
           
         
        </Container>
        </CongratulateSection>


    )
}
export default Congratulations;