
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from "styled-components";


const TopTourcard =styled.div`
position:relative;


`
const Toplinergradient = styled.div`
background: linear-gradient(175.54deg, rgba(2, 0, 14, 0.13) 9.38%, rgba(42, 34, 101, 0) 47.26%, rgba(15, 11, 44, 0.6) 92.77%);
   position:absolute;
   top:0px;
   left:0px;
   width:100%;
   height:100%;
   border-radius:16px;
`
const TopTourCard =({cityobj})=>{
    const {t} = useTranslation();
    return(
    <TopTourcard>
    <img src={`/assetts/img/${cityobj.photo}`} width="100%" alt="country"/>
    <Toplinergradient></Toplinergradient>
    <span className="top-span">{cityobj.country}</span>
    <h4 className="top-title">{cityobj.name}</h4>
    <p className="top-text">{cityobj.place_count}  {t("popularplaces")}</p>  
    </TopTourcard>
    


    )
}
export default TopTourCard;

 