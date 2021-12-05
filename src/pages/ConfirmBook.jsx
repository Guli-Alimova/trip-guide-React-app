import React from 'react';
import styled from "styled-components";
import { Container } from '../styled';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import YourTour from '../components/YourTour/YourTour';


const ConfirmSection = styled.section`
padding:40px 0 120px 0;
background-color:${(props)=>(props.theme.backgroundColor)}
`
const ConfirmBook =()=>{
    return(
        <ConfirmSection>
            <Container>
            <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/hotellist">
            Hotel list
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/hoteldatails">
             Hotel details
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Confirm and pay</Breadcrumb.Item>
           </Breadcrumb>
           <YourTour/>

            </Container>
        </ConfirmSection>


    )
}
export default ConfirmBook;