import React from 'react';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import {RiMarkPenLine} from "react-icons/ri";
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';

const ConfirmMain = styled.div`

`
const ConfirmTitle = styled.h1`
color:${(props)=>props.theme.titleColor};
font-family: DM Sans;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: 60px;
letter-spacing: -0.005em;
text-align: left;
padding-bottom:24px;
border-bottom:2px solid rgba(230, 232, 236, 1)

`
const TourTitle = styled.h2`
color:${(props)=>props.theme.titleColor};
font-family: DM Sans;
font-size: 34px;
font-style: normal;
font-weight: 700;
line-height: 44px;
letter-spacing: -0.005em;
text-align: left;
padding-top:40px;
padding-bottom:24px;

`
const TourDate = styled.div`
padding:8px   22px ;
border-radius:15px;
background-color:${(props)=>props.theme.tabColor};
margin-bottom:20px;
width:470px;
`
const CreditBox = styled.div`
padding-bottom:30px;
padding-top:48px;
border-bottom:2px solid rgba(230, 232, 236, 1);
`
const CreditCard = styled.h2`
color:${(props)=>props.theme.titleColor};
font-family: DM Sans;
font-size: 34px;
font-style: normal;
font-weight: 700;
line-height: 44px;
letter-spacing: -0.005em;
text-align: left;


`
const Creditbtn = styled.button`
border:${(props)=>props.theme.borderCard};
border-radius:6px;
margin-right:12px;
width:96px;
height:48px;
text-align:center;
background-color:${(props)=>props.theme.pricebg}
margin-bottom:30px;
border-bottom:2px solid rgba(230, 232, 236, 1);
`
const Creditimg = styled.img`
margin:40px 20px 40px 0;

`
const CardNumber = styled.input`
padding:12px 20px;
border-radius:10px;
border:${(props)=>props.theme.borderCard};
width:471px;
background-color:${(props)=>props.theme.pricebg}
`
const Cardspan = styled.span`
display:block;
font-family: DM Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
color:${(props)=>props.theme.footerText};
padding-top:20px;
padding-bottom:10px;

`
const Cardcode = styled.div`
display:flex;
justify-content: space-between;

`
const Codeinput = styled.input`
padding:11px 0 11px 20px;
border:${(props)=>props.theme.borderCard};
border-radius:11px;
margin-bottom:20px;
background-color:${(props)=>props.theme.pricebg}



`
const Confirmbtn = styled.button`
padding:11px 19px;
background-color:rgba(59, 113, 254, 1);
border-radius:36px;
border:none;
color:rgba(255, 255, 255, 1);
margin-top:40px;
`
const Datetext = styled.p`

font-family: DM Sans;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
color:${(props)=>props.theme.footerText};
margin:0;

`
const Traveller = styled.span`
display:block;
font-family: DM Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
color:${(props)=>props.theme.footerText};
`
const YourTour =({prop})=>{
    const {t} = useTranslation()
    return(
        <ConfirmMain>
            <ConfirmTitle>{t("confirm")}</ConfirmTitle>
            <TourTitle>{t("yourtour")}</TourTitle>
            <TourDate>
            <Datetext >{t("date")}</Datetext>
            <Traveller>May 15 - 22, 2021</Traveller>
            </TourDate>
            <TourDate>
            <Datetext >{t("traveller")}</Datetext>
            <Traveller>1 {t("tab_pass")}</Traveller>
            </TourDate>
            <CreditBox>
            < CreditCard>{t("credit")}</CreditCard>
            <Creditbtn><img src="/assetts/img/image 329.png" alt="" /></Creditbtn>
            <Creditbtn><img src="/assetts/img/image 327.png" alt="" /></Creditbtn>
            <Creditbtn><img src="/assetts/img/image 328.png" alt="" /></Creditbtn>
            <Creditbtn><img src="/assetts/img/image 235.png" alt="" /></Creditbtn>
            </CreditBox>
            <Creditimg src="/assetts/img/card 1.png" alt=""/>
            <Creditimg src="/assetts/img/card 2.png" alt=""/>
            <Cardspan>{t("cardNumber")}</Cardspan>
            <CardNumber type="text" placeholder="5884 6241 4444 3333"/>
            <Cardcode>
            <Cardspan>{t("expirydate")}</Cardspan>
            <Cardspan>CVC/CVV</Cardspan>    
            </Cardcode> 

            <Cardcode>
            <Codeinput type="text" placeholder="MM/YY"/>
            <Codeinput type="password" placeholder="***"/>
            </Cardcode>
            <Form.Check type="checkbox" label="Save Card" style={{color:"rgba(132, 135, 139, 1)"}}/>
            <Link to={`/hotelcong/${prop.id}`}><Confirmbtn type="submit">{t("confirmandbook")}</Confirmbtn></Link>
            
            

        </ConfirmMain>

    )
}
export default YourTour