import React from 'react';
import styled from "styled-components";
import i18next from "i18next";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import {VscBellDot } from "react-icons/vsc";
import{Row} from '../../styled'
import {CgProfile} from 'react-icons/cg';
import {FaSignOutAlt} from 'react-icons/fa';
import "../Header/Header.css";
import {VscChromeClose} from "react-icons/vsc";
import { Link } from 'react-router-dom';



const HeaderMain = styled.div`
padding:20px;
background-color:${(props)=>props.theme.headerBg};

`
const HeaderLeft = styled.div`
background-color:transparent;
// background-color:${(props)=>props.theme.headerBg};
`
const HeaderRight = styled.div`

`


const HeaderLang = styled.img`
width:20px ;
`
const HeaderButton = styled.button`
padding:5px;
border:none;
border-radius:5px;
margin-top:24px;
display:block;
width: 200px;
`
const HeaderLogoDark = styled.img`
width:148px;
display:${(props)=>props.theme.HeaderLogoDark};

`
const HeaderLogoWhite = styled.img`
width:148px;
display:${(props)=>props.theme.HeaderLogoLight};

`

const Header = ()=>{


  //Valyuta
  const [show, setShow] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [showLang, setShowLang] = useState(false);
  const handleCloseLang = () => setShowLang(false);
  const handleShowLang = () => setShowLang(true);


const handleValyuta = (element) =>{
    setCurrency(element.target.innerText)
  }
 //Language

  const [curlng, setCurlng] =useState("flagUSA.svg");

 
  //profile
  const [ProfileShow, setProfileShow] = useState(false);
  const [bell, setBell] = useState (false);


    return( 
        <HeaderMain>
          <Row>
            <HeaderLeft>  
              <Link to="/"><HeaderLogoDark  src="/assetts/img/logo (4).png"   alt ="logo"/></Link>
              <Link to="/"><HeaderLogoWhite src="/assetts/img/logow.png" alt="logo"/></Link>
            </HeaderLeft>
            
            <HeaderRight>
              <Button variant="primary" onClick={handleShow}>
              {currency}
              </Button>

 
      <Modal show={show} onHide={handleClose}>
       <Button variant="secondary" onClick={handleClose}>
         X
        </Button>
        <Modal.Body  >
      <HeaderButton onClick={handleValyuta } >USD </HeaderButton> 
      <HeaderButton onClick={handleValyuta } >GBP </HeaderButton>
      <HeaderButton onClick={handleValyuta }   >CAD </HeaderButton></Modal.Body>
      </Modal>
    

      
      <Button variant="primary" onClick={handleShowLang}>
      <img src={`/assetts/img/${curlng}`} width="20px" alt="img"/>
      </Button>
    <Modal show={showLang} onHide={handleCloseLang}>
        <Button variant="secondary" onClick={handleCloseLang}>
        <VscChromeClose/>
        </Button>
      <Modal.Body  >
        <HeaderButton onClick={() => {i18next.changeLanguage('ru') && setCurlng("images.jpeg")}} >
        <HeaderLang src="/assetts/img/images.jpeg" width="20px" alt="rus"/>Russan</HeaderButton>
       <HeaderButton onClick={() => {i18next.changeLanguage('uz') && setCurlng("uzflag.jpg")
          }}><HeaderLang src="/assetts/img/uzflag.jpg" width="20px" alt="uzb"/>Uzbek</HeaderButton>
        <HeaderButton onClick={() => {i18next.changeLanguage('en') && setCurlng("flagUsa.svg")
          }}><HeaderLang src="/assetts/img/flagUSA.svg" width="20px" alt="eng"/>English(uk)</HeaderButton>   
      </Modal.Body>
    </Modal>


 
    <Button onClick={() => setBell(true)}><VscBellDot/></Button>
    <div className='modal'>
      <Modal
        size="l"
        show={bell}
        onHide={() => setBell(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
    <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
       <div>
        <p> <img src="/assetts/img/Ellipse 2098.png" alt="photo11" style={{borderRadius:"50%"}} />You Booked and earn 8 point for on custoner 
           creation Steve Mathew </p>
        <span>4 weeks ago</span>
        </div>
        <div>
      
        <p> <img src="/assetts/img/Ellipse 2099.png" alt="photo1"/>You Booked and earn 8 point for on custoner 
           creation Steve Mathew </p>
        <span>4 weeks ago</span>
        </div>
        <div>
    
        <p>  <img src="/assetts/img/Ellipse 2101.png" alt="photo3"/>You Booked and earn 8 point for on custoner 
           creation Steve Mathew </p>
        <span>4 weeks ago</span>
        </div>
        <div>
        
        <p> <img src="/assetts/img/Ellipse 2102.png" alt="photo4"/>You Booked and earn 8 point for on custoner 
           creation Steve Mathew </p>
        <span>4 weeks ago</span>
        </div></Modal.Body>
      </Modal> 
</div>
      <Button onClick={() => setProfileShow(true)}><img className="profile-img" src="/assetts/img/Rectangle 1058.jpg" alt="profile"/>Delower</Button>
        <Modal
          size="s"
          show={ProfileShow}
          onHide={() => setProfileShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <HeaderButton ><CgProfile/>My Profile</HeaderButton>
        <HeaderButton ><FaSignOutAlt/>Sign Out</HeaderButton></Modal.Body>
       
      </Modal>
          </HeaderRight>
                </Row>
    
        </HeaderMain>

    )
}
export default Header;