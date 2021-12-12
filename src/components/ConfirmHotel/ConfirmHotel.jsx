import React from 'react';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { AiFillStar } from "react-icons/ai";



const ConfirmHotelMain = styled.div`
padding:40px;
border:${(props)=>props.theme.borderCard};
height:966px;
margin-left:35px;
border-radius:20px;
background-color:${(props)=>props.theme.headerBg}
`
const ConfirmHotelTitle = styled.h3`

font-family: DM Sans;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 23px;
color:${(props)=>props.theme.titleColor};

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
const ConfirmHotelImg = styled.img`
height: 177px;
width: 326px;
display:block;
margin-top:26px;
margin-bottom:24px;
`
const ConfirmHotelplace = styled.span`
color:${(props)=>props.theme.hotelscity}
font-family: DM Sans;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
text-align: left;

`
const ConfirmChak  = styled.div`
display:flex;
justify-content: space-between;
`

const ConfirmDate = styled.span`
color:${(props) =>props.theme.title};
font-family: DM Sans;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
text-align: left;

`
const Confirmchackcard = styled.span`
display:block;
font-family: DM Sans;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
color:${(props)=>props.theme.guest};
padding-top:20px;

`
const BookDatailsTatile = styled.h2`
padding-top:40px;
font-family: Roboto;
font-size: 26px;
font-style: normal;
font-weight: 500;
line-height: 27px;
color:${(props)=>props.theme.titleColor};

`
const BookDatails =styled.div`
padding:40px 0 52px 0;
display:flex;
justify-content: space-between;
`
const ConfirmPrice = styled.span`
display:block;
font-family: DM Sans;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
color:${(props)=>props.theme.guest};
padding-top:20px;
`
const ConfirmTotal = styled.div`
padding:7px 12px;
display:flex;
justify-content: space-between;
align-items:center;
background-color:${(props)=>props.theme. tabColor};
border-radius:6px;
border:none;
`
const ConfirmText = styled.p`
color:rgba(177, 181, 195, 1);
padding-top:30px;
font-family: DM Sans;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 21px;
text-align:center;

`
const Confirmh3 = styled.h3`
color:${(props)=>props.theme.titleColor};
font-family: DM Sans;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
text-align: left;

`
const Confirmp = styled.p`
display:block;
font-family: DM Sans;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
color:${(props)=>props.theme.guest};
`
const ConfirmHotel =({prop})=>{

    const {t}=useTranslation();

    
  
    return(
       
        <ConfirmHotelMain>
         
         {/* {error ? <h3>{error}</h3>: ''}
            {isLoading ? <Loader/> : ''} 
            {!isLoading && !error ?
           <div> */}
            <ConfirmHotelTitle>{prop.name} </ConfirmHotelTitle>
            <AiFillStar style={{ color: "#FFD166", fontSize: "22px" }} />
            <TrandingRaiting>{prop.rating}<span className="tranding-number" style={{color:"rgba(132, 135, 139, 1)" }}>  ( {prop.reviews} reviews)</span></TrandingRaiting>
            <ConfirmHotelImg src={`/assetts/img/${prop.photo}`} alt=""/>
            {/* </div> : "" } */}
            <ConfirmHotelplace>{t("bad")}</ConfirmHotelplace>
            <ConfirmChak>
                <Confirmchackcard>{t("check_in")}</Confirmchackcard>
                <Confirmchackcard>{t("check_out")}</Confirmchackcard>
            </ConfirmChak>
            <ConfirmChak>
            <ConfirmDate>June 27, 2020 </ConfirmDate>   
            <ConfirmDate>June 30, 2020 </ConfirmDate> 
            </ConfirmChak>
            <Confirmchackcard>{t( "guest")}</Confirmchackcard>
            <ConfirmDate>2{t( "guest")}</ConfirmDate>
            <BookDatailsTatile>{t("bookdatails")}</BookDatailsTatile> 
            <BookDatails>
            <div>
            <Confirmchackcard>${prop.price}  +  5{t("tun")}</Confirmchackcard>
              <Confirmchackcard>{t("occupancy")}</Confirmchackcard>
            <Confirmchackcard>{t("servicefree")}</Confirmchackcard>
            </div>
            <div>
            <ConfirmPrice>{`$${prop.price *5}`}</ConfirmPrice> 
            <ConfirmPrice>-$125</ConfirmPrice> 
            <ConfirmPrice>$103</ConfirmPrice>   
            </div>
            </BookDatails>
            <ConfirmTotal>
                <Confirmh3>{t("totals")}</Confirmh3>
                <Confirmp>{`$${prop.price *5}`}</Confirmp>
            </ConfirmTotal>
           <ConfirmText>{t("report")}</ConfirmText> 

        
        
        </ConfirmHotelMain>



    )
}
export default ConfirmHotel;