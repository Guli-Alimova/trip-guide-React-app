import React from 'react';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import DayPickerInput from 'react-day-picker/DayPickerInput';
// import "./PriceList.css";
import Form from 'react-bootstrap/Form'

const PriceCheck = styled.div`
padding:30px 46px;
border:${(props)=>props.theme.borderCard};
border-radius:20px;
background-color:${(props)=>props.theme.pricebg}

`
const PriceHeader = styled.div`
display:flex;
justefy-content:space-between;
padding-bottom:22px;
border-bottom:2px solid rgba(230, 232, 236, 1);

`
const Price = styled.h2`
font-family: Roboto;
font-size: 21px;
font-style: normal;
font-weight: 500;
line-height: 27px;
letter-spacing: 0em;
text-align: left;
color:${(props)=>props.theme.ptext}
`
const PriceTwo = styled.span`
color:${(props)=>props.theme.price}
font-family: DM Sans;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 23px;
margin:0 56px 0 10px;

`
const PriceBtn = styled.button`
padding:6px 10px;
border-radius: 25px;
background-color:rgba(20, 92, 230, 1);
font-family: DM Sans;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 18px;
color:rgba(255, 255, 255, 1);
border:none;

`
const Pricewrapper = styled.div`
display:flex;
flex-wrap:wrap;
padding:20px 0;

`
const ChackSpan = styled.div`

`
const Checktitle = styled.span`
display:block;
font-family: DM Sans;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
color:${(props)=>props.theme.person};


`
const GuestTitle = styled.h4`
padding-bottom:11px;
font-family: DM Sans;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
color:${(props)=>props.theme.person};

`

const ExtraFeatures = styled.div`
padding:11px 0 24px 0; 

`
const ExtraLeft = styled.div`
display:flex;
justify-content: space-between;
`

const ExtrsSpan = styled.span`
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 27px;
color:rgba(177, 181, 195, 1);
display:block;

`

const Pricebox = styled.div`
width:316px;
padding:13px 20px;
background-color:${(props)=>props.theme.tabColor};
// color:${(props)=>props.theme.tabColor};
border-radius:10px;
`
const Pricecard = styled.div`
display:flex;
justify-content: space-between;

`
const Pricename = styled.h5`
color:${(props)=>props.theme.footerText};
font-family: DM Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 21px;
letter-spacing: 0em;
text-align: left;

`
const PriceSpan = styled.span`
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 27px;
color:${(props)=>props.theme.footerText};
display:block;

`
const Totalprice = styled.div`
display:flex;
justify-content: space-between;
margin:12px 0 23px 0;
`
const Totalcost = styled.span`
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 27px;
letter-spacing: 0em;
text-align: right;

`
const BookNow = styled.button`
padding:11px 109px;
background-color:rgba(49, 107, 255, 1);
color:rgba(255, 255, 255, 1);
border-radius:12px;
border:none;
display:block;
`
const Charged = styled.span`
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 27px;
color:${(props)=>props.theme.footerText};
text-align:center;
display:block;
margin-top:12px;
`
const PriceList =()=>{
    const {t} = useTranslation();
    return(
        <PriceCheck>
            <PriceHeader>
                <Price>$142<span style={{color:"#84878B"}}>/night</span></Price>
                <PriceTwo>185$</PriceTwo>
                <PriceBtn>20% OFF</PriceBtn>
            </PriceHeader>
            <Pricewrapper>
                <ChackSpan>
                < Checktitle>{t("check_in")}</Checktitle>
                <DayPickerInput 
               dayPickerProps={{
              month: new Date(2018, 10),
              showWeekNumbers: true,
              todayButton: 'Today',
              }}
              />
               </ChackSpan>
                <ChackSpan>
                < Checktitle>{t( "check_out")}</Checktitle>
                <DayPickerInput 
               dayPickerProps={{
              month: new Date(2018, 10),
              showWeekNumbers: true,
              todayButton: 'Today',
              }}
              /> 
              </ChackSpan>
            </Pricewrapper>
            <GuestTitle>{t("guest")}</GuestTitle>
            <Form.Select aria-label="Default select example">
            <option>{t("personNumber")}</option>
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
            </Form.Select>
            <GuestTitle>{t("extraTitle")}</GuestTitle>
            <ExtraFeatures>
                <ExtraLeft>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label={t("pet")} style={{color:"rgba(132, 135, 139, 1)" , fontSize:"14px"}}/>
                </Form.Group>
                < ExtrsSpan>$13</ExtrsSpan>
                </ExtraLeft>
                <ExtraLeft>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label={t("breackfestperson")} style={{color:"rgba(132, 135, 139, 1)" , fontSize:"14px"}}/>
                </Form.Group>
                 < ExtrsSpan>$10</ExtrsSpan>
                 </ExtraLeft>
                <ExtraLeft>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label={t("parkingday")} style={{color:"rgba(132, 135, 139, 1)" , fontSize:"14px"}}/>
                </Form.Group>
                < ExtrsSpan>$6</ExtrsSpan>
                </ExtraLeft>
                <ExtraLeft>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label={t("extrapillow")} style={{color:"rgba(132, 135, 139, 1)" , fontSize:"14px"}}/>
                </Form.Group>
                < ExtrsSpan>Free</ExtrsSpan>
                </ExtraLeft>
            </ExtraFeatures>
            <GuestTitle>{t("extraprice")}</GuestTitle>
            <Pricebox>
            <Pricecard>
                <Pricename>{t("nights")}</Pricename>
                <PriceSpan>$500</PriceSpan>
            </Pricecard>
            <Pricecard>
                <Pricename>{t("discount")}</Pricename>
                <PriceSpan>$200</PriceSpan>
            </Pricecard>
            <Pricecard>
                <Pricename>{t("breackfestperson")}</Pricename>
                <PriceSpan>$10</PriceSpan>
            </Pricecard>
            <Pricecard>
                <Pricename>{t("servicefee")}</Pricename>
                <PriceSpan>$5</PriceSpan>
            </Pricecard>
            </Pricebox>
            <Totalprice>
                <GuestTitle>{t("total")}</GuestTitle>
                <Totalcost>$300</Totalcost>
            </Totalprice>
            <BookNow>{t("booknow")}</BookNow>
            <Charged>{t("charged")}</Charged>




        </PriceCheck>



    )
}
export default PriceList;