import React from 'react';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import {RiMarkPenLine} from "react-icons/ri";
import Form from 'react-bootstrap/Form'
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
padding-top:48px;
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
padding:8px  0 22px 0;
border-radius:15px;
background-color:${(props)=>props.theme. pricebg};
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

const YourTour =()=>{
    const {t} = useTranslation()
    return(
        <ConfirmMain>
            <ConfirmTitle>{t("confirm")}</ConfirmTitle>
            <TourTitle>{t("yourtour")}</TourTitle>
            <TourDate>
            <Form.Label >{t("date")}</Form.Label>
            <Form.Control  placeholder="May 15 - 22, 2021"/>
            </TourDate>
            <TourDate>
            <Form.Label >{t("traveller")}</Form.Label>
            <Form.Control  placeholder="1 passanger"/>
            </TourDate>
            <CreditBox>
            < CreditCard>{t("credit")}</CreditCard>
            <Creditbtn><img src="/assetts/img/image 329.png" alt="" /></Creditbtn>
            <Creditbtn><img src="/assetts/img/image 327.png" alt="" /></Creditbtn>
            <Creditbtn><img src="/assetts/img/image 328.png" alt="" /></Creditbtn>
            <Creditbtn><img src="/assetts/img/image 235.png" alt="" /></Creditbtn>
            </CreditBox>

        </ConfirmMain>

    )
}
export default YourTour