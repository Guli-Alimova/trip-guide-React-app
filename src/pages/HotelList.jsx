import Breadcrumb from 'react-bootstrap/Breadcrumb'
import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Container } from "../styled/index";
import HotelSearch from '../components/HotelSearch/HotelSearch';
import HotelPanel from '../components/HotelPanel/HotelPanel';
import AsideFilter from '../components/AsideFilter/AsideFilter';
import {AiOutlineRight } from "react-icons/ai";
import apiCalls from '../config/api';
import Loader from '../components/Loader/Loader';
import {BiLoaderCircle} from "react-icons/bi";



const HotelSection = styled.section`
background-color:${(props)=>props.theme.backgroundmain};
padding:40px 0 322px 0;
margin:0 auto;

`
const Hoteldiv = styled.div`
display:flex;
justify-content: space-between;
padding:70px;
`
const Crumb = styled.div`
padding:0 0 59px 55px;
background-color:${(props)=>props.theme.backgroundmain};
`
const LoadBtn = styled.button`
padding:10px 42px;
text-align:center;
border-radius:47px;
font-family: DM Sans;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
border:1px solid rgba(177, 181, 195, 1);
background-color:transparent;
color:${(props)=>props.theme.footerText};

`
const Load = styled.div`
display:flex;
justify-content:center;
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

const HotelList =()=>{
    const [hotel, sethotel]= useState([]);
    const [isLoading, setIsLoading] = useState (true);
    const [error, setError] = useState();

   const {t} = useTranslation();
    

    useEffect(()=>{
        const getHotels = async()=>{
            try{
                const data = await apiCalls.getHotels();
                setTimeout(() => {
                console.log(data);
                sethotel(data);
                setIsLoading(false);   
                }, 3000);
             
            }catch (error){
                setError(error.message);
                setIsLoading(false);
            }
            }
            getHotels()
        },[])
    return(
        <HotelSection >
           
           <BreadCr>  
            <Crumb>
            <Breadcrumb>
            <Breadcrumb.Item href="/" style={{color:"rgba(59, 62, 68, 1)"}}>{t("uy")}</Breadcrumb.Item><AiOutlineRight style={{marginTop:"5px", color:"rgba(59, 62, 68, 1)"}}/>
            <Breadcrumb.Item active>{t("hotellist")}</Breadcrumb.Item>
            </Breadcrumb>  
            </Crumb>
           </BreadCr> 
         
            <Container>
            <HotelSearch/> 
           </Container>
            <Hoteldiv>  
            <AsideFilter/> 
            
            {error ? <h3>{error}</h3>: ''}
            {isLoading ? <Loader/> : ''} 
            {!isLoading && !error ?

            <div>{hotel.map(el =>(<HotelPanel key={el.id} hotelObj={el}/>))}
            
           
            </div> : '' }
            </Hoteldiv>
            < Load>
             <LoadBtn><BiLoaderCircle style={{marginRight:"17px"}}/>{t("viewall")}</LoadBtn>
                
            </ Load>
           
    

          </HotelSection>

     
    )
}
export default HotelList;