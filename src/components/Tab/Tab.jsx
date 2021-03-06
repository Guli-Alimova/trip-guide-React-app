import React, { useState } from 'react';
import styled from "styled-components";
import Nav from 'react-bootstrap/Nav'
import {BiHotel} from 'react-icons/bi';
import {MdFlightTakeoff} from 'react-icons/md';
import {MdCarRepair} from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { Container, Row } from '../../styled';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {AiOutlineMinusCircle} from 'react-icons/ai';
import "./Tab.css"
// import {GrLocation} from 'react-icons/gr';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import {RiArrowLeftRightLine} from 'react-icons/ri'
import { useNavigate } from "react-router";
import Select from 'react-select'
import { useRef } from 'react';
import { useEffect } from 'react';


const TabSection = styled.section`
background-color:${(props)=>(props.theme.backgroundColor)};
`
const IntroTab= styled.div`

border:none;
border-radius:20px;
position:relative;
bottom:100px;
background-color:#fff;
padding:30px;
box-shadow: 0px 12px 60px rgba(89, 89, 89, 0.1);
background-color:${(props)=>props.theme.headerBg};
`
const TabNav= styled.div`
 border-bottom:2px solid  rgba(231, 236, 243, 1);
 width:80%;
`
const TabPessengerage = styled.h5`
margin:0;
font-family: DM Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 21px;
letter-spacing: 0em;
text-align: left;
color: ${(props)=>props.theme.person};

`
const Tabbuttinleft= styled.div`
display:inline-block;


`
const TabLocation = styled.div`
height: 70px;
width: 337px;
background: ${(props)=>props.theme.tabColor};
opacity: 0.8;
border: ${(props)=>props.theme.borderInput} ;
border-radius: 8px;
padding: 0 10px;
color:${(props)=>props.theme.tabtitle}
`
const TabInput = styled.div`
display: flex;
justify-content: space-between;
margin-top:30px;
position: relative;
`
const InputTitle = styled.span`
font-family: DM Sans;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 23px;
text-align: center;
color:${(props)=>props.theme.tabtitle}
`
const TabSpan = styled.span`
display:block;
color: ${(props)=>props.theme.btnPlus};
font-family: DM Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 21px;


`
const TabCheckIn = styled.div`
  display: flex;
  flex-direction: column;
  width: 264px;   
  opacity: 0.8;
  border: ${(props)=>props.theme.borderInput} ;
  border-radius: 8px;
  padding:10px;
  height: 70px;
  background-color: ${(props)=>props.theme.tabColor};

`
const LeftRight = styled.span`
height: 29px;
width: 30px;
left: 329px;
top: 21px;
border-radius: 19px;
position: absolute;
text-align: center;
background-color:  ${(props)=>props.theme.cercle};
color: ${(props)=>props.theme.btnPlus}  ;
z-index: 99;

`
const RightLeft = styled.span`
height: 29px;
width: 30px;
left: 607px;
top: 21px;
border-radius: 19px;
position: absolute;
text-align: center;
border:none;
background-color:  ${(props)=>props.theme.cercle};
color: ${(props)=>props.theme.btnPlus}  ;
z-index: 99;

`
const ChekIn = styled.span`
font-family: DM Sans;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 23px; 
margin-left:13px; 
color:${(props)=>props.theme.tabtitle};
`
const Tabbtn = styled.button`
height: 35px;
width: 42px;
border:none;
background-color: transparent;
margin: 0 20px; 
color:${(props)=>props.theme.btnPlus}

`
const TabbuttonRight = styled.div`
display:inline-block;
padding:12px 0 9px 0;
width:148px;

`
const Searchbtn = styled.button`
width: 152px;
border-radius: 10px;
padding:10px;
background-color: rgba(59, 113, 254, 1);
margin-left:50px;
border:none;
color:#fff;
height: 70px;
`
const DropdownPassanger = styled.div`

`
const PassangerCount = styled.div`
color:${(props)=>props.theme.tabtitle};
cursor:pointer;
`
const PassengerSpan = styled.span`

`
const BigPassanger = styled.div`
width:354px;
border: ${(props)=>props.theme.borderInput} ;
padding:12px;
border-radius:16px;
background-color: ${(props)=>props.theme.tabColor};
color:${(props)=>props.theme.tabtitle}
display:none;
position:absolute;
top:-228px;
right:0;
`
const PersonNumber = styled.span`
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 16px;
display:inline-block;
color:rgba(119, 126, 144, 1);

`
const Tablet = ()=>{
   
  const checkinRef = useRef();
  const checkoutRef = useRef();
  const cityRef = useRef();
  const [adult, setAdult]=useState(1);
  const [children , setChildren] = useState(0);
  const [baby, setBaby] = useState(0);

  const count = adult + children + baby;

  const [passangerOpen, setPassangerOpen ] = useState(false);

  const passangerDropdown = ()=>setPassangerOpen (!passangerOpen) ;

   const navigate = useNavigate();
 
 

useEffect (()=>{
  cityRef.current.value = "Where are you"
  console.log(cityRef);
  checkinRef.current.value = "Add date"
  console.log(checkinRef);
  checkoutRef.current.value = "Add-date"
  console.log(checkoutRef);
},[cityRef, checkinRef, checkoutRef]);


  function handleFormSubmit(e) {
  e.preventDefault();
  console.log(cityRef.current.props.value);
  console.log(checkinRef.current.state.value);
  console.log(checkoutRef.current.state.value);
  navigate('/hotellist');
}

   const location = [
    {value:"1", label:"United State Of Emirates", name:"Dubay", location:""}, 
    {value:"2", label:"Daha", name:"Qatar", location:""}, 
    {value:"3", label:"Sydney, New South Wales, Australia", name:"Darling Harbour", location:""},
    {value:"4", label:"Bangladesh", name:"Dhaka", location:""},
    {value:"5", label:"Dubai, Dubai Emirate, United Arab Emirates", name:"Dubay", location:""},

  
  ]
    const {t} = useTranslation();
    return( 
      <TabSection> 
     <Container> 
    <IntroTab>
       
          <TabNav>
            <Row>
            
            <Nav defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
            <Nav.Link eventKey="/home" active style={{fontSize:"14px", borderBottom:"2px solid blue"}} ><BiHotel style={{fontSize:"24px"}}/>  {t('tab_hotel')}</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
            <Nav.Link eventKey="/flight" style={{fontSize:"14px"}}> <MdFlightTakeoff  style={{fontSize:"24px"}}/>  {t('tab_flight')}</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
           <Nav.Link eventKey="/car" style={{fontSize:"14px"}}><MdCarRepair  style={{fontSize:"24px"}}/> {t('tab_car')}</Nav.Link>
          </Nav.Item>
          </Nav> 
           
        <DropdownPassanger >
            <PassangerCount onClick={passangerDropdown}><PassengerSpan>{count} </PassengerSpan>{t("tab_pass")}</PassangerCount>
          
          <BigPassanger className={`passanger-tab ${passangerOpen && "open"}` }>
          <TabbuttonRight>
          <TabPessengerage> {t('tab_person') } </TabPessengerage>
          <TabSpan>{t('person_number')} </TabSpan>
          </TabbuttonRight>
          <Tabbuttinleft>
          <Tabbtn onClick={ () => {setAdult(adult>0 ? adult-1 : 0)}}>
           <AiOutlineMinusCircle style={{fontSize:"35px", color:"#ccc"}}/>
          </Tabbtn>
          <PersonNumber> {adult}</PersonNumber>
         
          <Tabbtn onClick={ () => {setAdult(adult+1)}}>
            <AiOutlinePlusCircle style={{fontSize:"35px", color:"#ccc"}}/> 
          </Tabbtn>
          </Tabbuttinleft>

          <TabbuttonRight>
          <TabPessengerage>{t('tab_children')}</TabPessengerage>
          <TabSpan>{t('children_number')}</TabSpan>
          </TabbuttonRight>
          <Tabbuttinleft>
          <Tabbtn onClick={ () => {setChildren(children>0 ? children-1 : 0)}}>
          <AiOutlineMinusCircle style={{fontSize:"35px", color:"#ccc"}}/>
          </Tabbtn>
          <PersonNumber>{children}</PersonNumber> 
          <Tabbtn onClick={ () => {setChildren(children +1)} } >
          <AiOutlinePlusCircle style={{fontSize:"35px", color:"#ccc"}}/> 
          </Tabbtn>
          </Tabbuttinleft>

          <TabbuttonRight>
          <TabPessengerage>{t('tab_infants')}</TabPessengerage>
          <TabSpan>{t('infants_number')}</TabSpan>
          </TabbuttonRight>
          <Tabbuttinleft>
          <Tabbtn onClick={ () => {setBaby(baby > 0 ? baby - 1 : 0)}}>
           <AiOutlineMinusCircle style={{fontSize:"35px", color:"#ccc"}}/>
          </Tabbtn>
          <PersonNumber> {baby}</PersonNumber> 
          <Tabbtn onClick={() => {setBaby(baby +1)}}>
            <AiOutlinePlusCircle style={{fontSize:"35px", color:"#ccc"}}/> 
          </Tabbtn>
          </Tabbuttinleft>
        </BigPassanger>
      </DropdownPassanger>

       </Row> 
            </TabNav>  
            <form onSubmit={handleFormSubmit}>
            <TabInput>
            
              <TabLocation>
                < InputTitle>{t("tab_location")}</ InputTitle>
           <Select options={location} 
           ref={cityRef}
           placeholder={`${t('tab_from')}`}
     
           />

              </TabLocation>
              <LeftRight><RiArrowLeftRightLine/></LeftRight>
              <TabCheckIn>
                <ChekIn>{t("check_in")}</ChekIn>
                <DayPickerInput 
                ref={checkinRef}
                placeholder={t("add date")}
             
              />
              </TabCheckIn>
              <RightLeft ><RiArrowLeftRightLine/></RightLeft>
              <TabCheckIn>
                <ChekIn>{t("check_out")}</ChekIn>
                <DayPickerInput 
                ref={checkoutRef}
                placeholder={t("add date")}
           
              />
              </TabCheckIn>
          
              <Searchbtn type="submit" className="tab-search">{t("search")}</Searchbtn> 
           
            


           </TabInput>
        </form>
     </IntroTab>
      </Container>
      </TabSection>   
    )
}
export default Tablet