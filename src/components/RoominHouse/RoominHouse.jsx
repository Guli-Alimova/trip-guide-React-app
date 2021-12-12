import React from 'react';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "../RoominHouse/RoomHouse.css"
import {AiOutlineWifi} from "react-icons/ai"
import {FaBath} from "react-icons/fa";
import {MdOutlineRestaurant} from "react-icons/md"
import {RiHotelBedLine} from "react-icons/ri"
import {GrUpdate} from "react-icons/gr";
import {HiOutlineDesktopComputer} from "react-icons/hi";
import {GrPersonalComputer} from "react-icons/gr";
import {MdOutlineTv} from "react-icons/md";
import {FaPizzaSlice} from "react-icons/fa";
import {MdKeyboardHide} from "react-icons/md";
import {RiHotelLine} from "react-icons/ri"

const ExlisiveRoom = styled.div`
padding:22px 89px 0px 0;


`
const ExlisiveRoomTitle = styled.h3`
font-family: Roboto;
font-size: 40px;
font-style: normal;
font-weight: 500;
line-height: 27px;
letter-spacing: 0em;
text-align: left;
color:${(props)=>props.theme.tabtitle};
padding-bottom:10px;


`
const ExclusiveSpan = styled.h5`
color:${(props)=>props.theme.person};
font-family: DM Sans;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 36px;
letter-spacing: 0em;
text-align: left;
padding-bottom:31px;
border-bottom:2px solid rgba(230, 232, 236, 1);

`
const HotelFeatures = styled.h3`
color:${(props)=>props.theme.datailstitle};
font-family: DM Sans;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 36px;
letter-spacing: 0em;
text-align: left;

`
const FeaturesHotel = styled.div`
display:flex;
border-bottom:2px solid rgba(230, 232, 236, 1);
padding-bottom:61px;
`
const FeaturesSpan = styled.span`
margin:0 40px 0 10px;
font-family: DM Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
color:${(props)=>props.theme.featuresbtn}

`
const Tabname = styled.p`
font-family: DM Sans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
color:${(props)=>props.theme.ptext}

`
const Aminities = styled.div`
padding:60px 0;
border-bottom:2px solid rgba(230, 232, 236, 1);
`
const AminitiesTitle = styled.h3`

font-family: DM Sans;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 36px;
color:${(props)=>props.theme.datailstitle};

`
const AminitiesGroup = styled.div`
display:flex;
justify-content: space-between;

`
const AminitiesMain = styled.span`
display:block;
color:${(props)=>props.theme.ptext}


`
const AminitiesLeft = styled.div`

`
const AminitiesRight = styled.div`

`
const MoreDatails = styled.button`
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 19px;
padding:10px 31px;
border-radius:47px;
background-color:rgba(59, 113, 254, 1);
color:rgba(255, 255, 255, 1);
border:none;
margin-top:57px;

`
const RoominHouse = ()=>{
    const {t} = useTranslation()
    return(
       
        <ExlisiveRoom>
            < ExlisiveRoomTitle>{t("exlusiveTitle")}</ExlisiveRoomTitle>
            <ExclusiveSpan >{t("city_name")}</ExclusiveSpan>
            <Tabs>
            <TabList>
            <Tab>{t("description")}</Tab>
            <Tab>{t("features")}</Tab>
            <Tab>{t("roomandprice")}</Tab>
            <Tab>{t("review")}</Tab>
            </TabList>

            <TabPanel>
            <Tabname>{t("tab-text")}</Tabname>
            </TabPanel>
           {/* <TabPanel>
           <h2>Any content 2</h2>
           </TabPanel> */}
           </Tabs>
           <HotelFeatures>{t("hotel-features")}</HotelFeatures>
           <FeaturesHotel>
                <AiOutlineWifi style={{color:"#84878B"}}/><FeaturesSpan>Wi-fi</FeaturesSpan>
                <FaBath style={{color:"#84878B"}}/><FeaturesSpan>{t("bathup")}</FeaturesSpan>
                <MdOutlineRestaurant style={{color:"#84878B"}}/><FeaturesSpan>{t("breakfast")}</FeaturesSpan>
                <RiHotelBedLine style={{color:"#84878B"}}/><FeaturesSpan>{t("kinsbed")}</FeaturesSpan>
                <GrUpdate style={{color:"#84878B"}}/><FeaturesSpan>4m x 6m</FeaturesSpan>
           </FeaturesHotel>

           <Aminities>
           <AminitiesTitle>{t("amenities")}</AminitiesTitle>
           <AminitiesGroup>
               < AminitiesLeft>
               <AminitiesMain style={{paddingBottom:"26px"}}><AiOutlineWifi style={{marginRight:"10px", color:"#84878B"}}/>Free wifi 24/7</AminitiesMain>
               <AminitiesMain style={{paddingBottom:"26px"}}><HiOutlineDesktopComputer style={{marginRight:"10px", color:"#84878B"}}/>Free computer</AminitiesMain>
               <AminitiesMain style={{paddingBottom:"26px"}}><GrPersonalComputer style={{marginRight:"10px", color:"#84878B"}}/>Free wifi 24/7</AminitiesMain>
               <AminitiesMain style={{paddingBottom:"26px"}}><MdOutlineTv style={{marginRight:"10px", color:"#84878B"}}/>Free wifi 24/7</AminitiesMain>
               </ AminitiesLeft>
               <AminitiesRight>
                <AminitiesMain style={{paddingBottom:"26px"}}><FaBath style={{marginRight:"10px", color:"#84878B"}}/>Free clean bathroom</AminitiesMain>
                <AminitiesMain style={{paddingBottom:"26px"}}><FaPizzaSlice style={{marginRight:"10px", color:"#84878B"}}/>Breakfast included</AminitiesMain>
                <AminitiesMain style={{paddingBottom:"26px"}}> <MdKeyboardHide style={{marginRight:"10px", color:"#84878B"}}/>ATM</AminitiesMain>
                <AminitiesMain style={{paddingBottom:"26px"}}><RiHotelLine style={{marginRight:"10px", color:"#84878B"}}/>Nearby city</AminitiesMain>
               </AminitiesRight>
           </AminitiesGroup>
           < MoreDatails>{t("moredatails")}</MoreDatails>

           </Aminities>

       
        
        </ExlisiveRoom>


    )
}
export default RoominHouse;