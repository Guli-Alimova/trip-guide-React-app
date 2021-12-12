import React from 'react';
import styled from "styled-components";
import {GrLocation} from 'react-icons/gr';
import {RiHotelLine} from 'react-icons/ri';
import "../ExploreTheWorld/ExploreTheWorld.css";
import { AiFillStar } from "react-icons/ai"
import { useTranslation } from 'react-i18next';

const Explorecard = styled.div`
border: 1px solid colTitle;
border-radius: 20px;
// height: 362px;
// width: 270px;
padding:14px;
background:${(props)=>(props.theme.card)};
&:hover{
    background-color:#fff;
    box-shadow: 0px 20px 51px rgba(96, 96, 96, 0.1);
}
`
const ExploreImg = styled.img`
height: 152px;
width: 242px;
border-radius: 16px;


`

const ExploreReiting = styled.span`
color:${(props)=>(props.theme.cardtitle)};
font-family: DM Sans;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 21px;
letter-spacing: 0em;
text-align: left;
display:block;
margin-left:8px;

`
const Exploretheme = styled.h4`
color:${(props)=>(props.theme.cardtitle)};
font-family: DM Sans;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 26px;
letter-spacing: 0em;
text-align: left;

`
const ExploreAddres =styled.span`
color:${(props)=>(props.theme.hotelscity)};
font-family: DM Sans;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 21px;
letter-spacing: 0em;
text-align: left;
margin-bottom:15px;
display: block;
`

const Explorereyt = styled.span`
color:#ccc;
font-family: DM Sans;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 21px;
letter-spacing: 0em;
text-align: left;
`
const ExploreCity = styled.span`
font-family: DM Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 21px;
letter-spacing: 0em;
text-align: left;
color:${(props)=>(props.theme.hotelscity)};
margin-left:10px;

`
const ExplorePlace = styled.div`
display: flex ;
margin-top:20px;
margin-bottom:12px;
`
const ExploreSpace = styled.div`
display: flex;
justify-content: space-between;
`
const ExplorePrice = styled.span`
color:rgba(49, 107, 255, 1);
font-family: DM Sans;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 23px;
background-color: rgba(49, 107, 255, 0.2);
border-radius:6px; 
display: block;
padding:5px 10px;
`
const ExploreTheWorlCard = ({exploreobj})=>{
    const {t} =useTranslation();
    return(
        <Explorecard>
            <ExploreImg src={`/assetts/img/${exploreobj.image}`} alt="photo"/>
            <ExplorePlace>
           <AiFillStar style={{ color: "#FFD166", fontSize: "20px" }}/>
            <ExploreReiting>{exploreobj.rating}<Explorereyt > </Explorereyt></ExploreReiting>
            </ExplorePlace>
            <ExploreSpace>
                <Exploretheme>{exploreobj.title}</Exploretheme>
                <ExplorePrice >{exploreobj.price}</ExplorePrice>
            </ExploreSpace>
            <ExploreAddres >{exploreobj.radius} to Town Center</ExploreAddres>
            <div><GrLocation style={{ color: "rgba(132, 135, 139, 1)", fontSize: "14px"}}/>< ExploreCity>{exploreobj.location}</ ExploreCity></div>
           <div> <RiHotelLine style={{ color: "rgba(132, 135, 139, 1)", fontSize: "14px"}}/>< ExploreCity>{t("avaible")} {exploreobj.rooms}</ ExploreCity></div>
        </Explorecard> 


    )
}
export default ExploreTheWorlCard;