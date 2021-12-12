import React from 'react';
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import {CgFlagAlt} from "react-icons/cg";
import {GrLocation} from "react-icons/gr";
import {BsCalendar2Range} from "react-icons/bs";
import {MdFlight} from "react-icons/md";
import {AiOutlineWifi} from "react-icons/ai";
import {RiParkingBoxLine} from "react-icons/ri";
import {MdOutlineLocalOffer} from "react-icons/md"
import {IoIosGlobe} from "react-icons/io"
import "./HotelPanel.css";
import {FiDatabase} from "react-icons/fi";
import {Link} from "react-router-dom";
import { useTranslation } from 'react-i18next';


const HotelSet = styled.div`
 display:flex;
border-radius: 20px;
border: 1px solid #E7ECF3;
box-sizing: border-box;
margin-bottom:50px;



`
const HotelLeft = styled.div`
width:420px;
height:471px;
border-radius:20px;
`
const HotelImg = styled.img`
width:100%;
height:100%;
border-bottom-left-radius: 20px;
border-top-left-radius:20px;
`
const HotelRight= styled.div`
padding:30px;

`
const HotelTitle = styled.h3`
color:${(props)=>props.theme.titleColor};
font-family: DM Sans;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: 60px;
letter-spacing: -0.005em;
text-align: left;

`
const TrandingRaiting = styled.span`

font-family: DM Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: center;
color:${(props)=>props.theme.cityname};;
margin-left:8px;

`
const HotelLocation = styled.div`

`
const HotelComfort = styled.div`


`
const HotelPrice = styled.div`
display:flex;
flex-direction:column;
`
const HotelRaiting =  styled.div`
display: flex;
margin-top:12px;
vertical-align: middle;
margin-bottom:50px;
`
const HotelOrder = styled.div`
display:flex;
justify-content: space-between;
`
const HotelsCity = styled.span`
color:${(props)=>props.theme.cityname};
font-family: DM Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 21px;
letter-spacing: 0em;
text-align: left;
margin-left:20px;
`
const HotelPlace = styled.span`
color:${(props)=>props.theme.cityname};
font-family: DM Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: center;
padding-right : 19px ;
`
const HotelFligth = styled.span`
display: block ;
padding:15px 0 35px 0;
color:${(props)=>props.theme.cityname}
`
const HoterlOffer = styled.span`
color:${(props)=>props.theme.popularfilter};
font-family: DM Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 21px;
text-align: left;
display: block;
padding:6px 0;

`
const HotelBtn = styled.button`

padding:4px 20px;
border-radius:37px;
background-color:${(props)=>props.theme.buttonColor};
border:none;
margin:10px;
font-family: DM Sans;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: 41px;
color:${(props)=>props.theme.titleColor}

`
const HotelBook = styled.button`

padding:10px 20px;
border-radius:37px;
background-color: rgba(59, 113, 254, 1);
border:none;
margin:10px;
color:rgba(255, 255, 255, 1);
font-family: DM Sans;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 26px;
`
const HotelFor = styled.span`

font-family: DM Sans;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
color:rgba(132, 135, 139, 1);
`

const HotelPanel = ({hotelObj})=>{
    const {t} = useTranslation();
    return(

        <HotelSet>
            <HotelLeft>
                <HotelImg  src = {`/assetts/img/${hotelObj.photo}`}   alt="hotel"/>
            </HotelLeft>
            <HotelRight>
                <HotelTitle>{hotelObj.name}</HotelTitle>
               <HotelRaiting>
                <AiFillStar style={{ color: "#FFD166", fontSize: "22px" }} />
               <TrandingRaiting>{hotelObj.rating}<span className="tranding-number">  ({hotelObj.reviews} {t("reviews")})</span></TrandingRaiting>
               <HotelsCity><CgFlagAlt style={{ color: "rgba(132, 135, 139, 1)", fontSize: "13px" }}/>{hotelObj.location}</HotelsCity>
               </HotelRaiting>

               < HotelLocation>
               <HotelPlace><GrLocation style={{ color: "rgba(132, 135, 139, 1)", fontSize: "16px", marginRght:"10px" }}  /> {hotelObj.location}</HotelPlace>
               <HotelPlace><BsCalendar2Range style={{ color: "rgba(132, 135, 139, 1)", fontSize: "16px" , marginRght:"10px"}}/> 15.05.2021-16.05.2021</HotelPlace>
               </HotelLocation>

               <HotelFligth><MdFlight style={{ color: "rgba(132, 135, 139, 1)", marginRght:"10px"}}/> {t("depture")} </HotelFligth>
               <HotelOrder>
               <HotelComfort>
                   <HoterlOffer><AiOutlineWifi style={{ color: "rgba(132, 135, 139, 1)" , fontSize: "16px", marginRight:"10px"}}/>{t("freewifi")}</HoterlOffer>
                   <HoterlOffer><RiParkingBoxLine style={{ color: "rgba(132, 135, 139, 1)" , fontSize: "16px", marginRight:"10px"}}/>{t("parking")}</HoterlOffer>
                   <HoterlOffer><MdOutlineLocalOffer style={{ color: "rgba(132, 135, 139, 1)" , fontSize: "16px", marginRight:"10px"}}/>{t("offer")}</HoterlOffer>
                   <HoterlOffer> <IoIosGlobe style={{ color: "rgba(132, 135, 139, 1)" , fontSize: "16px",marginRight:"10px"}}/>{t("visit")}</HoterlOffer>
                   <HoterlOffer><FiDatabase style={{ color: "rgba(132, 135, 139, 1)" , fontSize: "16px",marginRight:"10px"}}/>{t("saferty")}</HoterlOffer>
               </HotelComfort> 
               <HotelPrice>
                   <HotelBtn>${hotelObj.price}<HotelFor> {t("fortwo")}</HotelFor></HotelBtn>
                   <Link to={`/hoteldatails/${hotelObj.id}`}><HotelBook>{t("booknow")}</HotelBook></Link>
               </HotelPrice>
               </HotelOrder>
            </HotelRight>
        </HotelSet>

    )
}
export default HotelPanel;