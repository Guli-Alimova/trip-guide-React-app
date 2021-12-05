import PriceList from "../PriceList/PriceList"
import React from 'react';
import styled from "styled-components";
import RoominHouse from "../RoominHouse/RoominHouse";

const BigSection = styled.div`
display:flex;

`
const RoomAndHouse = ()=>{
    return(
        <BigSection>
        <RoominHouse/>
          <PriceList/>   
        </BigSection>
       

    )
}
export default  RoomAndHouse 