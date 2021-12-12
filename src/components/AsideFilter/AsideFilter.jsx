import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import "./Aside.filter.css"
import {BiSearch} from "react-icons/bi"
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl'
import { Container } from '../../styled';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css'; // or include from a CDN
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import apiCalls from '../../config/api';
import Loader from '../Loader/Loader';



const FilterSection = styled.div`

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

const RangePrice = styled.div`
display: flex;
justify-content: space-between;
`
const NumberSpan = styled.span`
color:rgba(132, 135, 139, 1);
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
   const handleClick = (event) =>{
     console.log(event.target.value);
   }

   const [popular, setPopular] = useState([]);
   const [property, setProperty] = useState([]);
   const [budget, setBudget] = useState([]);
   const [ facility, setFacility] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState();
   const [ value, setValue ] = React.useState(25);

   useEffect (()=>{
      const getPopular = async()=>{
     try{
       const data = await apiCalls.getPopular();
         
         setPopular(data);
         setIsLoading(false);
     
     }catch(error){
       setError(error.message);
       setIsLoading(false);
     }
   }
getPopular();
 const   getProperty = async()=>{
  try{
    const data = await apiCalls.getProperty();
    setProperty(data);
    setIsLoading(false)
 
  }catch(error){
    setError(error.message);
    setIsLoading(false);
  }
}
getProperty();

 const   getBudget  = async()=>{
  try{
    const data = await apiCalls.getBudget();
    setBudget(data);
    setIsLoading(false)
 
  }catch(error){
    setError(error.message);
    setIsLoading(false);
  }
}
 getBudget(); 

 const  getFacilities = async()=>{
  try{
    const data = await apiCalls.getFacilities();
    setFacility(data);
    setIsLoading(false)
 
  }catch(error){
    setError(error.message);
    setIsLoading(false);
  }
}
getFacilities(); 
 
  }, []


   );
   const handleChange = ((el) =>{
    setValue(el.target.value );
    console.log(el.target.value);
})

    return(
    <FilterSection>
        <Container>
        <FilterSearchtitle >{t("search_property")}</FilterSearchtitle>
        <InputGroup className="mb-3" >
    <FormControl
      placeholder={t("search-filter")}
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      style={{backgroundColor:"transparent"}}
    />
    <Button variant="outline-secondary" id="button-addon2" >
    <BiSearch style={{color:"rgba(218, 218, 218, 1)"}}/>
    </Button>
  </InputGroup>

  <PopulatSearch>
  <FilterSearchtitle >{t("popular_filter")}</FilterSearchtitle>
  {error ? <h3>{error}</h3>: ''}
  {isLoading ? <Loader/> : ''} 
  {!isLoading && !error ?
  <Form.Group className="mb-12" controlId="formBasicCheckbox">
    {popular.map(el=><div key={el.id}>
       <Form.Check 
        onClick={handleClick}
        value={el.value}
        type="checkbox" 
        label={el.label} 
        aria-label={el.name}
        style={{color:"rgba(132, 135, 139, 1)", marginBottom:"17px"}} />
    
    </div>)}
   
  </Form.Group> : ""}
  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label={t("label-hotel")} style={{color:"rgba(132, 135, 139, 1)"}} />
  </Form.Group> */}
  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label= {t("hotel-restaurant")} style={{color:"rgba(132, 135, 139, 1)"}}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label={t("hotel-consellation")}  style={{color:"rgba(132, 135, 139, 1)"}}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label={t("hotel-prepayment")}  style={{color:"rgba(132, 135, 139, 1)"}} />
  </Form.Group> */}
  <FilterButton>{t("see_more")}</FilterButton>
 </PopulatSearch>

 <PriceRange>
 <FilterSearchtitle >{t("price_range")}</FilterSearchtitle>
 {error ? <h3>{error}</h3>: ''}
  {isLoading ? <Loader/> : ''} 
  {!isLoading && !error ?
 <FilterProgress >
 <Form>
      <Form.Group as={Row}>
        <Col xs="9">
          <RangeSlider
            value={value}
            onChange={handleChange}
            tooltip='on'
            tooltipPlacement='top'
            are-valuenow={value}
            min={30}
            max={150}
          />
        </Col>
        <Col xs="3">
          <Form.Control value={value}/>
        </Col>
      </Form.Group>
    </Form>
</FilterProgress> : ""}
<RangePrice>
  <NumberSpan >$50</NumberSpan>
  <NumberSpan >$150</NumberSpan>
</RangePrice>
 </PriceRange>

 <PriceRange>
 <FilterSearchtitle >{t("property_type")}</FilterSearchtitle>
 {error ? <h3>{error}</h3>: ''}
  {isLoading ? <Loader/> : ''} 
  {!isLoading && !error ?
 <Propert >
 <Form.Group className="mb-12" controlId="formBasicCheckbox">
    { facility.map(el=><div className='aside-main' key={el.id}>
       <Form.Check 
        onClick={handleClick}
        value={el.value}
        type="checkbox" 
        label={el.label} 
        aria-label={el.name}
        style={{color:"rgba(132, 135, 139, 1)", marginBottom:"17px"}} />    
      <NumberSpan >{el.price}</NumberSpan>
    </div> )}
     </Form.Group>


 
  </Propert> : "" }
  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label={t("label-hotel")} style={{color:"rgba(132, 135, 139, 1)"}}/>
  </Form.Group> */}
  {/* <Propert > */}
  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label= {t("apertments")}  style={{color:"rgba(132, 135, 139, 1)"}}/>
  </Form.Group> */}
  {/* <NumberSpan >141</NumberSpan>
  </Propert>
  <Propert > */}
  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label={t("resort")}  style={{color:"rgba(132, 135, 139, 1)"}}/>
  </Form.Group> */}
  {/* <NumberSpan >108</NumberSpan>  
 
  </Propert> */}
  <FilterButton>{t("see_more")}</FilterButton>
 </PriceRange>
 
 <PopulatSearch>
  <FilterSearchtitle >{t("your_budget")}</FilterSearchtitle>
  {error ? <h3>{error}</h3>: ''}
  {isLoading ? <Loader/> : ''} 
  {!isLoading && !error ?
  <Form.Group className="mb-12" controlId="formBasicCheckbox">
   {
   budget.map((el)=>
     <div className='filter-main' key={el.id}>
    <Form.Check 
      onClick={handleClick}
        value={el.value}
        type="checkbox"
        label={el.label} 
        aria-label={el.name}
     style={{color:"rgba(132, 135, 139, 1)"}}/>
 </div>)}
  </Form.Group> : ""}
    

  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
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
  </Form.Group> */}
  <FilterButton>{t("see_more")}</FilterButton>
 </PopulatSearch>

 <PriceRange>
 <FilterSearchtitle className="search-title">{t("facilities")}</FilterSearchtitle>
 {error ? <h3>{error}</h3>: ''}
  {isLoading ? <Loader/> : ''} 
  {!isLoading && !error ?
 <Propert >
 <Form.Group className="mb-12" controlId="formBasicCheckbox">
    {property.map(el=><div className='aside-main' key={el.id}>
       <Form.Check 
        onClick={handleClick}
        value={el.value}
        type="checkbox" 
        label={el.label} 
        aria-label={el.name}
        style={{color:"rgba(132, 135, 139, 1)", marginBottom:"17px"}} />    
      <NumberSpan >{el.price}</NumberSpan>
    </div> )}
     </Form.Group>  

  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
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
  <NumberSpan >108</NumberSpan> */}
  </Propert>: ""}
  <FilterButton>{t("see_more")}</FilterButton>
 </PriceRange>


  </Container>
    </FilterSection>
    )
}
export default AsideFilter;