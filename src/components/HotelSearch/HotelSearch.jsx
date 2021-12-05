
import React from 'react';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {AiOutlineMinusCircle} from 'react-icons/ai';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import {RiArrowLeftRightLine} from 'react-icons/ri';
import Dropdown from 'react-bootstrap/Dropdown';
import Select from 'react-select'
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import {Container, Row} from "../../styled/index";

const Hotelsection =styled.section`
background-color:${(props)=>props.theme.backgroundmain};
`
const HotelTab= styled.div`

border:none;
border-radius:20px;
bottom:100px;
background-color:#fff;
padding:30px;
box-shadow: 0px 12px 60px rgba(89, 89, 89, 0.1);

`
const HotelNav= styled.div`
 position:relative;

`
const TabPessengerage = styled.span`
height: 21px;
width: 108px;
font-family: DM Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 21px;
letter-spacing: 0em;
text-align: left;
color: rgba(177, 181, 195, 1);

`
const HotelButtonleft= styled.div`

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
const Tabbuttinleft= styled.div`
display:inline-block;

`
const LeftRight = styled.span`
height: 29px;
width: 30px;
left: 329px;
top: 21px;
border-radius: 19px;
position: absolute;
text-align: center;
border:none;
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
background-color: #fff;
margin: 0 20px; 
color:${(props)=>props.theme.btnPlus}

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
const TabbuttonRight = styled.div`
display:inline-block;
padding-bottom:11px;
width:148px;

`
const TabNav= styled.div`
 border-bottom:2px solid  rgba(231, 236, 243, 1);
 width:80%;
`
const DropdownPassanger = styled.div`

`
const PassangerCount = styled.div`
`
const PassengerSpan = styled.span`

`
const BigPassanger = styled.div`
display:flex;
justify-content: space-between;
flex-wrap:wrap;
width:354px;
border: ${(props)=>props.theme.borderInput} ;
padding:12px;
border-radius:16px;s
background: ${(props)=>props.theme.tabColor};
color:color:${(props)=>props.theme.tabtitle}

`
const TabSpan = styled.span`
display:block;
color: ${(props)=>props.theme.btnPlus};
`
const HotelSearch =()=>{

  

  // const cityRef = useRef(null);
  const [adult, setAdult]=useState(1);
  const [children , setChildren] = useState();
  const [baby, setBaby] = useState();

  const count = adult + children + baby;

  
 

  const location = [
    {value:"1", label:"United State Of Emirates", name:"Dubay", location:""}, 
    {value:"2", label:"Daha", name:"Qatar", location:""}, 
    {value:"3", label:"Sydney, New South Wales, Australia", name:"Darling Harbour", location:""},
    {value:"4", label:"Bangladesh", name:"Dhaka", location:""},
    {value:"5", label:"Dubai, Dubai Emirate, United Arab Emirates", name:"Dubay", location:""},

  
  ]
   const navigate = useNavigate();
 
   function handleFormSubmit(e) {
  e.preventDefault();
 
  navigate('/hoteldatails')
}
    const {t} = useTranslation();
  return(     
    

    <Hotelsection>
     <Container> 
      <HotelTab>
        <TabNav>
          <Row>
      <DropdownPassanger>
            <PassangerCount><PassengerSpan>{count} </PassengerSpan>{t("tab_pass")}</PassangerCount>
          <BigPassanger>
         
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
         
           placeholder={`${t('tab_from')}`}
     
           />

              </TabLocation>
              <LeftRight><RiArrowLeftRightLine/></LeftRight>
              <TabCheckIn>
                <ChekIn>{t("check_in")}</ChekIn>
                <DayPickerInput 
               dayPickerProps={{
              month: new Date(2018, 10),
              showWeekNumbers: true,
              todayButton: 'Today',
              }}
              />
              </TabCheckIn>
              <RightLeft ><RiArrowLeftRightLine/></RightLeft>
              <TabCheckIn>
                <ChekIn>{t("check_out")}</ChekIn>
                <DayPickerInput 
               dayPickerProps={{
              month: new Date(2018, 10),
              showWeekNumbers: true,
              todayButton: 'Today',
              }}
              />
              </TabCheckIn>
          
              <Searchbtn type="submit" className="tab-search">Search</Searchbtn> 
           
            


           </TabInput>
        </form>
         
           
           
           
            


     </HotelTab>
      </Container>
      </Hotelsection>

    )
  
}
export default HotelSearch;