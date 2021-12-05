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
import {FiDatabase} from "react-icons/fi"


const HotelSet = styled.div`
 display:flex;
border-radius: 20px;
border: 1px solid #E7ECF3;
box-sizing: border-box;
 width:970px;
 margin-bottom:50px;
 margin-left:53px;


`
const HotelLeft = styled.div`
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
padding-top:15px;
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
width: 176px;
height: 49px;;
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
width: 176px;
height: 49px;;
padding:4px 20px;
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
const HotelPanel = ()=>{
    return(

        <HotelSet>
            <HotelLeft>
                <img src = "/assetts/img/image (10).png" width="100%" height="100%" alt=""/>
            </HotelLeft>
            <HotelRight>
                <HotelTitle>Zuich, Switzerland</HotelTitle>
               <HotelRaiting>
                <AiFillStar style={{ color: "#FFD166", fontSize: "22px" }} />
               <TrandingRaiting>4.91<span className="tranding-number">  (122 reviews)</span></TrandingRaiting>
               <HotelsCity><CgFlagAlt style={{ color: "rgba(132, 135, 139, 1)", fontSize: "13px" }}/>Zuich town, Switzerland</HotelsCity>
               </HotelRaiting>

               < HotelLocation>
               <HotelPlace><GrLocation style={{ color: "rgba(132, 135, 139, 1)", fontSize: "16px" }}  /> Zuich Hotel, Switzerland</HotelPlace>
               <HotelPlace><BsCalendar2Range style={{ color: "rgba(132, 135, 139, 1)", fontSize: "16px" }}/> 15.05.2021-16.05.2021</HotelPlace>
               </HotelLocation>

               <HotelFligth><MdFlight style={{ color: "rgba(132, 135, 139, 1)"}}/> Depature from zuich </HotelFligth>
               <HotelOrder>
               <HotelComfort>
                   <HoterlOffer><AiOutlineWifi style={{ color: "rgba(132, 135, 139, 1)" , fontSize: "16px"}}/>Free Wifi</HoterlOffer>
                   <HoterlOffer><RiParkingBoxLine style={{ color: "rgba(132, 135, 139, 1)" , fontSize: "16px"}}/>Free parking</HoterlOffer>
                   <HoterlOffer><MdOutlineLocalOffer style={{ color: "rgba(132, 135, 139, 1)" , fontSize: "16px"}}/>Special offer</HoterlOffer>
                   <HoterlOffer> <IoIosGlobe style={{ color: "rgba(132, 135, 139, 1)" , fontSize: "16px"}}/>Visit hotel website </HoterlOffer>
                   <HoterlOffer><FiDatabase style={{ color: "rgba(132, 135, 139, 1)" , fontSize: "16px"}}/>Taking safety measures</HoterlOffer>
               </HotelComfort> 
               <HotelPrice>
                   <HotelBtn>$320<HotelFor> For Two</HotelFor></HotelBtn>
                   <HotelBook>Book Now</HotelBook>
               </HotelPrice>
               </HotelOrder>
            </HotelRight>
        </HotelSet>



        /* <HotelSet>
            <HotelLeft>
                <img src = "/assetts/img/image (10).png" width="100%" height="100%" alt=""/>
            </HotelLeft>
            <HotelRight>
                <HotelTitle>Zuich, Switzerland</HotelTitle>
               <HotelRaiting>
                <AiFillStar style={{ color: "#FFD166", fontSize: "22px" }} />
               <TrandingRaiting>4.91<span className="tranding-number">  (122 reviews)</span></TrandingRaiting>
               <HotelsCity><CgFlagAlt style={{ color: "rgba(132, 135, 139, 1)", fontSize: "13px" }}/>Zuich town, Switzerland</HotelsCity>
               </HotelRaiting>

               < HotelLocation>
               <HotelPlace><GrLocation style={{ color: "rgba(132, 135, 139, 1)", fontSize: "16px" }}  /> Zuich Hotel, Switzerland</HotelPlace>
               <HotelPlace><BsCalendar2Range style={{ color: "rgba(132, 135, 139, 1)", fontSize: "16px" }}/> 15.05.2021-16.05.2021</HotelPlace>
               </HotelLocation>

               <HotelFligth><MdFlight style={{ color: "rgba(132, 135, 139, 1)"}}/> Depature from zuich </HotelFligth>
               <HotelOrder>
               <HotelComfort>
                   <HoterlOffer><AiOutlineWifi style={{ color: "rgba(132, 135, 139, 1)" , fontSize: "16px"}}/>Free Wifi</HoterlOffer>
                   <HoterlOffer><RiParkingBoxLine style={{ color: "rgba(132, 135, 139, 1)" , fontSize: "16px"}}/>Free parking</HoterlOffer>
                   <HoterlOffer><MdOutlineLocalOffer style={{ color: "rgba(132, 135, 139, 1)" , fontSize: "16px"}}/>Special offer</HoterlOffer>
                   <HoterlOffer> <IoIosGlobe style={{ color: "rgba(132, 135, 139, 1)" , fontSize: "16px"}}/>Visit hotel website </HoterlOffer>
                   <HoterlOffer><AiOutlineSafety style={{ color: "rgba(132, 135, 139, 1)" , fontSize: "16px"}}/>Taking safety measures</HoterlOffer>
               </HotelComfort> 
               <HotelPrice>
                   <HotelBtn>$320<HotelFor> For Two</HotelFor></HotelBtn>
                   <HotelBook>Book Now</HotelBook>
               </HotelPrice>
               </HotelOrder>
            </HotelRight>
        </HotelSet>


        <HotelSet>
            <HotelLeft>
                <img src = "/assetts/img/image (10).png" width="100%" height="100%" alt=""/>
            </HotelLeft>
            <HotelRight>
                <HotelTitle>Zuich, Switzerland</HotelTitle>
               <HotelRaiting>
                <AiFillStar style={{ color: "#FFD166", fontSize: "22px" }} />
               <TrandingRaiting>4.91<span className="tranding-number">  (122 reviews)</span></TrandingRaiting>
               <HotelsCity><CgFlagAlt style={{ color: "rgba(132, 135, 139, 1)", fontSize: "13px" }}/>Zuich town, Switzerland</HotelsCity>
               </HotelRaiting>

               < HotelLocation>
               <HotelPlace><GrLocation style={{ color: "rgba(132, 135, 139, 1)", fontSize: "16px" }}  /> Zuich Hotel, Switzerland</HotelPlace>
               <HotelPlace><BsCalendar2Range style={{ color: "rgba(132, 135, 139, 1)", fontSize: "16px" }}/> 15.05.2021-16.05.2021</HotelPlace>
               </HotelLocation>

               <HotelFligth><MdFlight style={{ color: "rgba(132, 135, 139, 1)"}}/> Depature from zuich </HotelFligth>
               <HotelOrder>
               <HotelComfort>
                   <HoterlOffer><AiOutlineWifi style={{ color: "rgba(132, 135, 139, 1)" , fontSize: "16px"}}/>Free Wifi</HoterlOffer>
                   <HoterlOffer><RiParkingBoxLine style={{ color: "rgba(132, 135, 139, 1)" , fontSize: "16px"}}/>Free parking</HoterlOffer>
                   <HoterlOffer><MdOutlineLocalOffer style={{ color: "rgba(132, 135, 139, 1)" , fontSize: "16px"}}/>Special offer</HoterlOffer>
                   <HoterlOffer> <IoIosGlobe style={{ color: "rgba(132, 135, 139, 1)" , fontSize: "16px"}}/>Visit hotel website </HoterlOffer>
                   <HoterlOffer><AiOutlineSafety style={{ color: "rgba(132, 135, 139, 1)" , fontSize: "16px"}}/>Taking safety measures</HoterlOffer>
               </HotelComfort> 
               <HotelPrice>
                   <HotelBtn>$320<HotelFor> For Two</HotelFor></HotelBtn>
                   <HotelBook>Book Now</HotelBook>
               </HotelPrice>
               </HotelOrder>
            </HotelRight>
        </HotelSet> */











    )
}
export default HotelPanel;