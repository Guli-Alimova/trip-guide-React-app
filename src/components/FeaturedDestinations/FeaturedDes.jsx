import React from 'react';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Container } from "../../styled";
import "../FeaturedDestinations/FeaturedDes.css";

const FeaturedSection = styled.section`
background-color:${(props)=>(props.theme.backgroundColor)};
padding:70px;

`
const FeaturedTitle = styled.h3`

font-family: DM Sans;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: 70px;
letter-spacing: -0.005em;
text-align: left;
color:${(props)=>(props.theme.h3Title)};

`
const FeaturedText = styled.p`

font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
color:${(props)=>(props.theme.ptext)};

`

const FeaturedCard = styled.div`

height: 280px;
width: 870px;
border-radius: 18px;
margin-bottom:30px;

`
const FeaturedbigBox = styled.div`
display:flex;
justify-content: space-between;
`
const FeaturedCard1= styled.div`

height: 408px;
width: 408px;
border-radius: 20px;
position:relative;
&:not(:last-child){
  margin-right:auto;
}

`
const FeaturedCard2= styled.div`

height: 220px;
width: 270px;
border-radius: 15px;
position:relative;
 margin-bottom:30px;
// &:not(:last-child) {
//    margin-bottom:8px;
}


`



const Toplinergradient1 = styled.div`
background: linear-gradient(
175.54deg,rgba(2,0,14,0.13) 9.38%,rgba(42,34,101,0) 47.26%,rgba(15,11,44,0.6) 92.77%);
position: absolute;
top: 0px;
left: 0px;
right:0;
// bottom:469px;
border-radius: 16px;     
width: 100%;
height: 37.3%;
 
`
const Toplinergradient = styled.div`
background: linear-gradient(175.54deg, rgba(2, 0, 14, 0.13) 9.38%, rgba(42, 34, 101, 0) 47.26%, rgba(15, 11, 44, 0.6) 92.77%);
 position:absolute;
top:0px;
left:0px;
right:0;
border-radius:16px;
width:100%;
height:100%;

`
const Toplinergradient2 = styled.div`
background: linear-gradient(175.54deg, rgba(2, 0, 14, 0.13) 9.38%, rgba(42, 34, 101, 0) 47.26%, rgba(15, 11, 44, 0.6) 92.77%);
 position:absolute;
top:0px;
left:0px;
border-radius:16px;
z-index:100;
width:100%;
height:98%;
`
const FeaturedBox = styled.div`

position:relative;
`
const FeaturedBox2 = styled.div`
`
const FeaturedImg = styled.div`
display:flex;
`
const FeaturedSpan = styled.span`
height: 28px;
width: 66px;
border-radius: 20px;
background: #FFFFFF;
box-shadow: 0px 4px 10px rgba(40, 40, 40, 0.12);
display: block;
text-align: center;
font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 24px;
color: #FF543D;
position: absolute;
top:19px;
left:28px;
z-index:120;

`
const FeaturedImage = styled.img`
 position:relative;

`
const FeaturedDes =()=>{
    const {t} = useTranslation();
    return(
     < FeaturedSection >
     <Container>
     <FeaturedTitle>{t('featured_title')}</FeaturedTitle>
     <FeaturedText>{t('featured_text')}</FeaturedText>
    <FeaturedbigBox>
    <FeaturedBox>
     <FeaturedCard>
      <FeaturedSpan>3.5</FeaturedSpan>
      <FeaturedImage src="/assetts/img/image (1).png" width="870px" alt=""/><Toplinergradient1></Toplinergradient1>
      <div className="featured-active"> 
      <h3 className="featured-title1">{t("city-name")}</h3>
      <img src="/assetts/img/avator.png" alt=""/>
      <span className="featured-activitie">196 {t("active")}</span>
     </div>
     </FeaturedCard>
      <FeaturedImg>
     <FeaturedCard1>
     
     <FeaturedSpan>3.5</FeaturedSpan>
      <FeaturedImage src="/assetts/img/image (2).png" width="408px"  alt=""/> <Toplinergradient></Toplinergradient>
      <div className="featured-active2">
      <h3 className="featured-title2">{t("city-name2")}</h3>
      <img src="/assetts/img/avator.png" alt=""/>
      <span className="featured-activitie1">196 {t("active")}</span>
      </div>
     </FeaturedCard1> 
      
     <FeaturedCard1>
     
     <FeaturedSpan>3.5</FeaturedSpan>
      <FeaturedImage src="/assetts/img/image (3).png" width="408px" alt=""/><Toplinergradient></Toplinergradient>
       <div className="featured-active3">
      <h3 className="featured-title3">{t("city-name3")}</h3>
      <img src="/assetts/img/avator.png" alt=""/>
      <span className="featured-activitie1">196 {t("active")}</span>
      </div>
     </FeaturedCard1>
     </FeaturedImg>
   </FeaturedBox>
   <FeaturedBox2>
    <FeaturedCard2>
    <Toplinergradient2></Toplinergradient2>
    <FeaturedSpan>3.5</FeaturedSpan>
      <FeaturedImage src="/assetts/img/image (4).png" width="270px" height="215px" alt=""/> 
      <div className="featured-active4">
      <h3 className="featured-title4">{t("city-name3")}</h3>
      <img src="/assetts/img/avator.png" alt=""/>
      <span className="featured-activitie2">196  {t("active")}</span>
      </div>
    </FeaturedCard2>
    <FeaturedCard2>
    <Toplinergradient2></Toplinergradient2>
    <FeaturedSpan>3.5</FeaturedSpan>
      <FeaturedImage src="/assetts/img/image (5).png" width="270px" height="215px" alt=""/>  
      <div className="featured-active5">
      <h3 className="featured-title4">{t("city-name5")}</h3>
      <img src="/assetts/img/avator.png" alt=""/>
      <span className="featured-activitie2">196  {t("active")}</span>
      </div>
    </FeaturedCard2>
    <FeaturedCard2>
    <Toplinergradient2></Toplinergradient2>
    <FeaturedSpan>3.5</FeaturedSpan>
      <FeaturedImage src="/assetts/img/image (6).png" width="270px" height="215px" alt=""/>    
      <div className="featured-active6">
      <h3 className="featured-title4">{t("city-name5")}</h3>
      <img src="/assetts/img/avator.png"  alt=""/>
      <span className="featured-activitie2">196  {t("active")}</span>
      </div>
    </FeaturedCard2>
   
    </FeaturedBox2> 
    </FeaturedbigBox>
     </Container>
     
     </FeaturedSection>
      
    )
}
export default FeaturedDes;