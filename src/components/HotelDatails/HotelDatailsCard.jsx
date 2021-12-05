import {Container} from '../../styled/index';
import React from 'react';
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import {CgFlagAlt} from "react-icons/cg";
import ReactStars from "react-rating-stars-component";
import { useTranslation } from 'react-i18next';


const HotelMainDatails = styled.div`
`
const Datailstitle = styled.h1`
 color:${(props)=>(props.theme.datailstitle)};
font-family: DM Sans;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: 70px;
letter-spacing: -0.005em;
text-align: left;

`
const HotelRaiting =  styled.div`
display: flex;
margin-top:12px;
vertical-align: middle;
margin-bottom:50px;
`
const TrandingRaiting = styled.span`

font-family: DM Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: center;
color:${(props)=>(props.theme.cityname)};;
margin-left:8px;

`
const HotelsCity = styled.span`
color:${(props)=>(props.theme.cityname)};
font-family: DM Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 21px;
letter-spacing: 0em;
text-align: left;
margin-left:20px;
`
const HotelRewievNumber = styled.span`
color:#84878B;
`
const HotelImage = styled.div`
display:flex;
justefy-content:space-between;
`
const HotelPhoto = styled.img`
border-radius:20px;
width:1240px;
height:632px;
margin-bottom:42px;
`
const HotelButtondatails = styled.div`
display:flex;
align-items:center;
`
const HotelbtnGreen = styled.button`
padding:5px 16px
border-radius:5px;
margin-right:17px;
font-family: DM Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 21px;
border:none;
padding:3px;
background-color:${(props)=>(props.theme.bggreen)};
color:${(props)=>(props.theme.colorgreen)};
`
const HotelbtnYellow = styled.button`
padding:5px 16px
border-radius:5px;
margin-right:17px;
font-family: DM Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 21px;
border:none;
background-color:${(props)=>(props.theme.bgyellow)};
color:${(props)=>(props.theme.coloryellow)}

`
const HotelbtnBlue = styled.button`
padding:5px 16px
border-radius:5px;
margin-right:17px;
font-family: DM Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 21px;
border:none;
background-color:${(props)=>(props.theme.bgblue)};
color:${(props)=>(props.theme.colorblue)}


`
const HotelbtnPink = styled.button`
padding:5px 16px
border-radius:5px;
margin-right:17px;
font-family: DM Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 21px;
border:none;
background-color:${(props)=>(props.theme.bgpink)};
color:${(props)=>(props.theme.colorpink)};


`
const HotelbtnOrange = styled.button`
padding:5px 16px
border-radius:5px;
border:none;
font-family: DM Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 21px;
border:none;
background-color:${(props)=>(props.theme.bgorange)};
color:${(props)=>(props.theme.colororange)};
margin-right:17px;

`
const HotelDatailsCard =()=>{
  const {t} = useTranslation()
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
       
    return(

        <Container>
        <HotelMainDatails>
          <Datailstitle>{t("datailtitle")}</Datailstitle>
    
        <HotelRaiting>
            <AiFillStar style={{ color: "#FFD166", fontSize: "22px" }} />
            <TrandingRaiting>4.91< HotelRewievNumber >  (122 reviews)</ HotelRewievNumber ></TrandingRaiting>
            <HotelsCity><CgFlagAlt style={{ color: "rgba(132, 135, 139, 1)", fontSize: "13px" }}/>Zuich town, Switzerland</HotelsCity>
            </HotelRaiting>
            <HotelImage>
                <HotelPhoto src="/assetts/img/img1.png" alt=""/> 
               
            </HotelImage>  
        </HotelMainDatails>    
            
           <HotelButtondatails>
               <HotelbtnGreen>5.0</HotelbtnGreen>  
               <HotelbtnYellow>{t("perfect")}</HotelbtnYellow>
               <HotelbtnBlue>{t("label-hotel")}</HotelbtnBlue>
               <HotelbtnPink>{t("Building")}</HotelbtnPink>
               <HotelbtnOrange>{t("topValue")}</HotelbtnOrange>
               <ReactStars
               count={5}
               onChange={ratingChanged}
               size={28}
               activeColor="#ffd700"/>

            </HotelButtondatails>   
             
         


   
        </Container>

    )
}
export default HotelDatailsCard;