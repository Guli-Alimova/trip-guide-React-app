import React from 'react';
import styled from "styled-components";


const BestPlace = styled.div`
height: 202px;
width: 270px;
border-radius: 10px;
border: ${(props)=>(props.theme.borderCard)};
padding:28px 30px;
background-color:transparent;
margin-bottom:30px;
 &:hover{
    background-color:${(props)=>props.theme.card};
    box-shadow: 0px 20px 51px rgba(96, 96, 96, 0.1);
}

`
const BestImg = styled.img`
height: 70px;
width: 70px;
margin-bottom:18px;
`
const BestTitle = styled.h3`

font-family: DM Sans;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 26px;
letter-spacing: 0em;
text-align: left;
width:145px;
padding-bottom:12px;
color: ${(props)=>(props.theme.cardtitle)};

`
const BestText = styled.p`

font-family: DM Sans;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 21px;
letter-spacing: 0em;
text-align: left;
color: ${(props)=>(props.theme.title)};


`
const BestPlacesCard =()=>{
    return(
        < BestPlace >
        <BestImg src="/assetts/img/image.png" alt=""/>
        <BestTitle>Batu, East Java</BestTitle>
        <BestText>86 Destinations</BestText>
        </BestPlace>

    )
}
export default BestPlacesCard;