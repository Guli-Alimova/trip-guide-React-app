import React from 'react';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import {BiSearch} from "react-icons/bi"
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl'
import { Container } from '../../styled';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar'
import "../AsideFilter/Aside.filter.css";
import  Range from 'react-bootstrap/FormRange'


const FilterSection = styled.div`
margin-right:40px;
width:290px;

`
const PopulatSearch = styled.div`
padding:30px 0 17px 0;
 border-bottom:2px solid rgba(231, 236, 243, 1);
`
const FilterSearchtitle = styled.div`
font-family: DM Sans;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 23px;
color:${(props)=>props.theme.filterColor};
width:235px;
padding-bottom:15px;
`
const FilterButton = styled.button`
color:rgba(20, 92, 230, 1);
border:none;
background-color:transparent;
color:${(props)=>props.theme.filterSeemore};
`
const PriceRange = styled.div`
padding:30px 0 15px 0;
border-bottom:2px solid rgba(244, 245, 246, 1);

`
const FilterProgress = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const FilterInput = styled.input`
width: 60px;
padding: 3px;
height: 32px;
border-radius:9px;
border:2px solid #316BFF;
background-color:transparent;
`
const RangePrice = styled.div`
display: flex;
justify-content: space-between;
`
const NumberSpan = styled.span`
color:rgba(132, 135, 139, 1)
font-family: DM Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: right;

`
const Propert = styled.div`
display: flex;
justify-content: space-between;
`
const AsideFilter=()=>{

    const {t} = useTranslation();
  
    return(
    <FilterSection>
        <Container>

        <FilterSearchtitle >{t("search_property")}</FilterSearchtitle>
        <InputGroup className="mb-3" >
    <FormControl
      placeholder={t("search-filter")}
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <Button variant="outline-secondary" id="button-addon2" >
    <BiSearch style={{color:"rgba(218, 218, 218, 1)"}}/>
    </Button>
  </InputGroup>

  <PopulatSearch>
  <FilterSearchtitle >{t("popular_filter")}</FilterSearchtitle>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label={t("label-hotel")} style={{color:"rgba(132, 135, 139, 1)"}} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label= {t("hotel-restaurant")} style={{color:"rgba(132, 135, 139, 1)"}}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label={t("hotel-consellation")}  style={{color:"rgba(132, 135, 139, 1)"}}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label={t("hotel-prepayment")}  style={{color:"rgba(132, 135, 139, 1)"}} />
  </Form.Group>
  <FilterButton>{t("see_more")}</FilterButton>
 </PopulatSearch>


 <PriceRange>
 <FilterSearchtitle >{t("price_range")}</FilterSearchtitle>
 <FilterProgress >
 <Range/>
  <Form.Label></Form.Label>
  
<FilterInput></FilterInput>
</FilterProgress>
<RangePrice>
  <NumberSpan >$50</NumberSpan>
  <NumberSpan >$150</NumberSpan>
</RangePrice>
 </PriceRange>

 <PriceRange>
 <FilterSearchtitle >{t("property_type")}</FilterSearchtitle>
 <Propert >
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label={t("label-hotel")} style={{color:"rgba(132, 135, 139, 1)"}}/>
  </Form.Group>
  <NumberSpan >108</NumberSpan>
  </Propert>
  <Propert >
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label= {t("apertments")}  style={{color:"rgba(132, 135, 139, 1)"}}/>
  </Form.Group>
  <NumberSpan >141</NumberSpan>
  </Propert>
  <Propert >
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label={t("resort")}  style={{color:"rgba(132, 135, 139, 1)"}}/>
  </Form.Group>
  <NumberSpan >108</NumberSpan>
  </Propert>
  <FilterButton>{t("see_more")}</FilterButton>
 </PriceRange>

 <PopulatSearch>
  <FilterSearchtitle >{t("your_budget")}</FilterSearchtitle>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label={t("Less_than")}  style={{color:"rgba(132, 135, 139, 1)"}}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label= {t("price-hotel")}  style={{color:"rgba(132, 135, 139, 1)"}}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label={t("price-expencive")}  style={{color:"rgba(132, 135, 139, 1)"}}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label={t("big-price")}  style={{color:"rgba(132, 135, 139, 1)"}}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label={t("Greater_than")}  style={{color:"rgba(132, 135, 139, 1)"}}/>
  </Form.Group>
  <FilterButton>{t("see_more")}</FilterButton>
 </PopulatSearch>

 <PriceRange>
 <FilterSearchtitle className="search-title">{t("facilities")}</FilterSearchtitle>
 <Propert >
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label={t("sports")}  style={{color:"rgba(132, 135, 139, 1)"}} />
  </Form.Group>
  <NumberSpan >108</NumberSpan>
  </Propert>
  <Propert >
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label= {t("Berbeque")} style={{color:"rgba(132, 135, 139, 1)"}}/>
  </Form.Group>
  <NumberSpan >141</NumberSpan>
  </Propert>
  <Propert >
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label={t("living_room")}  style={{color:"rgba(132, 135, 139, 1)"}}/>
  </Form.Group>
  <NumberSpan >108</NumberSpan>
  </Propert>
  <Propert >
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label={t("room_service")}  style={{color:"rgba(132, 135, 139, 1)"}}/>
  </Form.Group>
  <NumberSpan >108</NumberSpan>
  </Propert>
  <Propert >
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label= {t("swimming-pool")}  style={{color:"rgba(132, 135, 139, 1)"}}/>
  </Form.Group>
  <NumberSpan >141</NumberSpan>
  </Propert>
  <Propert >
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label={t("spa")}  style={{color:"rgba(132, 135, 139, 1)"}}/>
  </Form.Group>
  <NumberSpan >108</NumberSpan>
  </Propert>
  <FilterButton>{t("see_more")}</FilterButton>
 </PriceRange>








  </Container>
    </FilterSection>
    )
}
export default AsideFilter;