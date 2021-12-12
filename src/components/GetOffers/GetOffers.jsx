import React from 'react';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Container } from "../../styled";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import "../GetOffers/GetOffers.css";
import { useRef } from 'react';



const GetOffer = styled.div`
background-image:url(/assetts/img/bg.png);
padding:60px 92px;
background-repeat:no-repeat;
background-size:cover;
margin:0 auto;
border-radius:16px;
display:flex;
justify-content: space-between;
align-items:center;
position: absolute;
top: -150px;
border-radius: 16px;
z-index:99;
width:1170px;

`
const GetTitle = styled.h3`
font-family: Gilroy;
font-size: 44px;
font-style: normal;
font-weight: 800;
line-height: 52px;
letter-spacing: -0.5px;
text-align: left;
color:rgba(255, 255, 255, 1);

`
const GetText = styled.p`
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 28px;
letter-spacing: 0em;
text-align: left;
color:rgba(255, 255, 255, 1);
width:350px;
padding:top:16px;

`
const Getleft = styled.div`
`
const Getright = styled.div`
background-color:#fff;
//  height:54px;
padding:8px;
border-radius:4px;
margin-top:53px;
width:448px;
display:flex;
justify-content: space-between;
`
const GetInput = styled.input`
border:none;
`
const GetOffers = ()=>{

    const subscribeRef = useRef();

    const handleSubmit = (el)=>{
        el.preventDefault();
        console.log(subscribeRef.current.value)
    }
    const {t}=useTranslation();
    
    return(
       <Container>
           <GetOffer>
       
            <Getleft>
                <GetTitle>{t("get_title")}</GetTitle>
                <GetText>{t('get_text')}</GetText>
            </Getleft> 
            <form onSubmit={handleSubmit}>
            <Getright>     
                <GetInput type="text" placeholder={t("type_email")} ref={subscribeRef}/>
                <Button type="submit" style={{ backgroundColor: " rgba(53, 57, 69, 1)", border:"none"}} variant="outline-secondary" id="button-addon2">
                {t("subscribe")}
                </Button> 
            </Getright>
                </form>
            
         </GetOffer>
    
         </Container>
  

    )
}
export default GetOffers;