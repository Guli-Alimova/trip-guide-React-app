import React from 'react';
import styled from "styled-components";
import { Container } from '../../styled/index';
import { useTranslation } from 'react-i18next';
import { AiFillStar } from "react-icons/ai";
import {BiBarcode} from "react-icons/bi";
import {BsCalendar2Week} from "react-icons/bs";
import {CgGlassAlt} from "react-icons/cg";
import {BiWalletAlt} from "react-icons/bi";
import "./Congratulate.css";
import {Link} from "react-router-dom";



const CongratsSection = styled.section`
padding-top:70px;
`
const CongrasText = styled.h3`
font-family: DM Sans;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: 21px;
color:${(props)=>props.theme.ptext};

`
const CongrasTitle = styled.h1`
padding-top:20px;
padding-bottom:24px;
border-bottom:2px solid rgba(230, 232, 236, 1);
font-family: DM Sans;
font-size: 48px;
font-style: normal;
font-weight: 500;
line-height: 60px;
color:${(props)=>props.theme.cardtitle}

`
const CongrateCity = styled.h2`

font-family: DM Sans;
font-size: 34px;
font-style: normal;
font-weight: 700;
line-height: 44px;
letter-spacing: -0.005em;
text-align: left;
color:${(props)=>props.theme.cardtitle};
padding-top:37px;
padding-bottom:27px;

`
const CongrasReview = styled.div`
display:flex;
justify-content: space-between;
width:374px;
`
const CongrateBedroom = styled.p`
font-family: DM Sans;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 21px;
letter-spacing: 0em;
text-align: left;
color:${(props)=>props.theme.ptext};

`
const TrandingRaiting = styled.span`

font-family: DM Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: center;
color:${(props)=>props.theme.cityname};;
margin-left:8px;

`
const HotelRewievNumber = styled.span`
color:#84878B;
`
const Congratereserv = styled.div`
display:flex;
justify-content: space-between;
`
const ReservLeft = styled.div`

`
const ReservDate = styled.div`
display:flex;
justify-content:space-between;
padding-top:25px;
padding-bottom:30px;
border-top:2px solid rgba(230, 232, 236, 1);

`
const ReservdataRight = styled.div`
padding:7px 20px 11px 20px;
background-color:${(props)=>props.theme.tabColor};
border-radius:12px;
`
const ReservdataLeft =  styled.div`
padding:7px 20px 11px 20px;
background-color:${(props)=>props.theme.tabColor};
border-radius:12px;
`
const ReservText = styled.p`
font-family: DM Sans;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 21px;
color:${(props)=>props.theme.footerText};
`
const ReservSpan= styled.span`
font-family: DM Sans;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
color:rgba(132, 135, 139, 1);
`
const ReservDatails = styled.div`
padding:19px 25px 15px 27px;
background-color:${(props)=>props.theme.tabColor};
border-radius:10px;
border:${(props)=>props.theme.borderCard};
width:380px;

`
const ReservTitile = styled.h2`
font-family: DM Sans;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: 41px;
color:${(props)=>props.theme.ptext};
`
const ReservList = styled.div`
`
const ReservDateilsSpan = styled.span`
font-family: DM Sans;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
color:${(props)=>props.theme.mathod};
display:block;
padding-bottom:22px;

`
const ReservPrice = styled.div`

`
const ReservPriceList = styled.span`
color:${(props)=>props.theme.ptext};
font-family: DM Sans;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
display:block;
padding-bottom:22px;

`
const CongrateImg = styled.img`
width:703px;
height:402px;
border-radius:20px;
`
const Congratulate = ({prop}) =>{
    const {t} = useTranslation();
    return(
    
        <CongratsSection>
            <Container>
                <CongrasText>{t("congratulate")}!</CongrasText>
                <CongrasTitle>{t("congrastitle")}</CongrasTitle>
                <CongrateCity >{prop.name}</CongrateCity>
                <CongrasReview>
                <TrandingRaiting><AiFillStar style={{ color: "#FFD166", fontSize: "22px" }} />
                {prop.rating}< HotelRewievNumber >  ({prop.reviews} {t("reviews")})</ HotelRewievNumber ></TrandingRaiting>
                <CongrateBedroom>{t("privateroom")}</CongrateBedroom>
                </CongrasReview>
                <Congratereserv>
                    <ReservLeft>
                        <ReservDate>
                        <ReservdataRight>
                            <ReservText>{t("dates")}</ReservText>
                            <ReservSpan>{t("may")} 15 - 22, 2021 </ReservSpan>
                        </ReservdataRight>
                        < ReservdataLeft>
                        <ReservText>{t("traveller")}</ReservText>
                        <ReservSpan>{t("tab_pass")}</ReservSpan>     
                        </ReservdataLeft>
                        </ReservDate>

                        <ReservDatails>
                            <ReservTitile>{t("reserv")}</ReservTitile><br/> 
                            <div className="reservdiv">
                            <ReservList>   
                               <ReservDateilsSpan><BiBarcode style={{marginRight:"10px", color:"#84878B"}}/>{t("code")}</ReservDateilsSpan> 
                               <ReservDateilsSpan><BsCalendar2Week style={{marginRight:"10px", color:"#84878B"}}/>{ t("date")}</ReservDateilsSpan>
                               <ReservDateilsSpan><CgGlassAlt style={{marginRight:"10px", color:"#84878B"}}/>{t("total")}</ReservDateilsSpan>
                               <ReservDateilsSpan><BiWalletAlt style={{marginRight:"10px", color:"#84878B"}}/>{t("mathod")}</ReservDateilsSpan>
                            </ReservList>
                            < ReservPrice>
                            <ReservPriceList>FD_158456</ReservPriceList>
                            <ReservPriceList>30 Apr, 2021</ReservPriceList>
                            <ReservPriceList>$833</ReservPriceList>
                            <ReservPriceList>{t("creditcard")}</ReservPriceList>
                            </ReservPrice>
                           </div>
                        </ReservDatails>
                       <Link to="/"> <button className="gobtn">{t("home")}</button></Link>
 
                    </ReservLeft>
                    <CongrateImg src={`/assetts/img/${prop.photo}`} alt="" />



                </Congratereserv>




            </Container>
        </CongratsSection>


    )
}
export default Congratulate;