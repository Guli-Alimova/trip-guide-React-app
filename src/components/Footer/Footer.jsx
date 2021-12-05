import "../Footer/Footer.css";
import React from 'react';
import styled, { ThemeContext } from "styled-components";
import { useTranslation } from 'react-i18next';
import { Container } from "../../styled";
import GetOffers from "../GetOffers/GetOffers";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BsSun} from 'react-icons/bs';
import {BiMoon} from 'react-icons/bi';
import { useContext } from "react";
import { Link } from "react-router-dom";


const FooterSection = styled.section`
background-color:${(props)=>props.theme. headerBg};
padding:225px 0px 151px 0;
position:relative;
`
const FooterCol = styled.div`
`
const FooterLogo = styled.img`
width:148px;
`
const FooterCol1 = styled.div`
`
const FooterText = styled.p`
font-family: DM Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
width: 254px;
padding-top:25px;
color:${(props)=>(props.theme.footerText)};
`

const FooterBtn = styled.button`
width: 61px;
height: 37px;
background: #FCFCFD;
box-shadow: 0px 2px 2px rgba(67, 67, 67, 0.1);
border-radius: 8px;
border:none;
padding:5px;
margin:3px;
text-align: center;
`
const ColTitle = styled.h4`
font-family: DM Sans;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 36px;
letter-spacing: 0em;
text-align: left;
color:${(props)=>(props.theme.colTitle)}
`
const FooterLink = styled.ul`
padding:0;
margin:0;
list-style: none;
`
const FooterMenu = styled.li`
font-family: DM Sans;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
color:${(props)=>(props.theme.footerText)};
padding-top:16px ;

`
const Footer =()=>{
    const {theme, toggleTheme} = useContext(ThemeContext);
    const {t} = useTranslation();
    return(
        <FooterSection>
            <Container>
            <GetOffers/> 
            </Container>
            {}
            <Container>
 
            <Row>
            <Col xs={4}>
            <FooterCol>
         <FooterLogo src="/assetts/img/logo (4).png" alt =""/>
                <FooterText>{t("footer_text")}</FooterText>
                <FooterBtn onClick={()=>toggleTheme(theme === 'light' ? 'light' : 'light')}><BsSun style={{fontSize:"20px"}}/></FooterBtn>
                <FooterBtn onClick={()=>toggleTheme(theme === 'light' ? 'dark' : 'light')} ><BiMoon style={{fontSize:"20px"}}/></FooterBtn>
            </FooterCol>
            </Col>
             
            <Col xs={3}>
            <FooterCol1>
                < ColTitle>{t("col_title1")}</ColTitle>
                <FooterLink >
                 <FooterMenu >{t("col_ul")}</FooterMenu>
               <FooterMenu> {t("col_ul1")}</FooterMenu>
              <FooterMenu >{t("col_ul2")}</FooterMenu>
               <FooterMenu> {t("col_ul3")}</FooterMenu>
               <FooterMenu>{t("col_ul4")}</FooterMenu>
                </FooterLink>

            </FooterCol1>
            </Col>

            <Col  xs={3}>
            <FooterCol1>
             < ColTitle>{t("col_title2")}</ColTitle>
                <FooterLink >
                    <FooterMenu>{t("col_li")}</FooterMenu>
                    <FooterMenu >{t("col_li1")}</FooterMenu>
                    <FooterMenu >{t("col_li2")}</FooterMenu>
                    <FooterMenu >{t("col_li3")}</FooterMenu>
                    <FooterMenu>{t("col_li4")}</FooterMenu>
                </FooterLink>
            
            </FooterCol1>
            </Col>
            <Col  xs={2}>
             <FooterCol1>
             < ColTitle>{t("col_title3")}</ColTitle>
                <FooterLink >
                    <FooterMenu >{t("footer_li")}</FooterMenu>
                    <FooterMenu>{t("footer_li1")}</FooterMenu>
                    <FooterMenu>{t("footer_li2")}</FooterMenu>
                    <FooterMenu>{t("footer_li3")}</FooterMenu>
                    <FooterMenu >{t("footer_li4")}</FooterMenu>
                </FooterLink>
            
            </FooterCol1>
            </Col>
            </Row>
            </Container>

           
        </FooterSection>

    )
}
export default Footer;