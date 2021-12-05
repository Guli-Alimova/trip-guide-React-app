import React from 'react';
import styled from "styled-components";


const TopTourcard =styled.div`
position:relative;


`
const Toplinergradient = styled.div`
background: linear-gradient(175.54deg, rgba(2, 0, 14, 0.13) 9.38%, rgba(42, 34, 101, 0) 47.26%, rgba(15, 11, 44, 0.6) 92.77%);
   position:absolute;
   top:0px;
   left:0px;
   width:95%;
   height:100%;
   border-radius:16px;
`
const TopTourCard =()=>{
    return(
    <TopTourcard>
    <img src="/assetts/img/image (8).png" width="350px" alt=""/>
    <Toplinergradient></Toplinergradient>
    <span className="top-span">Japan</span>
    <h4 className="top-title">Japan</h4>
    <p className="top-text">10 Popular Places</p>  
    </TopTourcard>
    


    )
}
export default TopTourCard;

 