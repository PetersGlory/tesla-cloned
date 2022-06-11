import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Header = () => {
    const [sidebarOption, setSidebarOption] = useState(false)
    
  return (
    <Container>
        <Link to="/">
            <img src="/assets/images/logo.svg" alt="logo" />
        </Link>

        <Menu>
            
                <Link to="/models">Model S</Link>
                <Link to="/">Model 3</Link>
                <Link to="/">Model X</Link> 
                <Link to="/">Model Y</Link>
                <Link to="/">Solar Roof</Link>
                <Link to="/">Solar Panels</Link>
            
        </Menu>

        <RightMenu>
            <Link to="#">Shop</Link>
            <Link to="#">Account</Link>
            <CustomMenu onClick={()=>setSidebarOption(true)}>
                Menu
            </CustomMenu>
        </RightMenu>

        <SideNav show={sidebarOption}>
            <CloseWrapper onClick={()=>setSidebarOption(false)}>
                <CustomClose className="bi bi-x-circle" />
            </CloseWrapper>
            <li>
                <Link to="#">Existing Inventory</Link>
            </li>
            <li>
                <Link to="#">Used Inventory</Link>
            </li>
            <li>
                <Link to="#">Trade-In</Link>
            </li>
            <li>
                <Link to="#">Test Drive</Link>
            </li>
            <li>
                <Link to="#">Insurance</Link>
            </li>
            <li>
                <Link to="#">Cybertruck</Link>
            </li>
            <li>
                <Link to="#">Roadster</Link>
            </li>
            <li>
                <Link to="#">Semi</Link>
            </li>
            <li>
                <Link to="#">Charging</Link>
            </li>
            <li>
                <Link to="#">Powerwall</Link>
            </li>
            <li>
                <Link to="#">Commercial Energy</Link>
            </li>
            <li>
                <Link to="#">Utilites</Link>
            </li>
            <li>
                <Link to="#">Find Us</Link>
            </li>
            <li>
                <Link to="#">Support</Link>
            </li>
            <li>
                <Link to="#">Investor Relations</Link>
            </li>
        </SideNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: absolute;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content:space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right:0;
    z-index: 1000;

`

const Menu = styled.div`
    display: flex;
    justify-content: center !important;
    align-items: center !important;
    a{
        font-weight: 500;
        flex-wrap: nowrap;
        padding: 6px 10px;
        border-radius:10px;
        font-size: 15px;
        color:#171a20 !important;
        transition: color .33s ease;
    }

    
    @media(max-width: 784px){
        display: none;
    }
    a:hover{
        background-color: #737373ad;
        transition: 0.5s;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a{
        font-weight: 500;
        margin-right: 10px;
        color:#171a20 !important;
        transition: color .33s ease;
        padding: 6px 10px;
        border-radius:10px;
    }
    
    @media(max-width: 784px){
        a{
            display: none;
        }
    }
    
    a:hover{
        background-color: #737373ad;
        transition: 0.5s;
    }
`

const CustomMenu = styled.p`
    cursor: pointer;
    margin-right: 10px;
    font-weight: 500;
    color:#171a20 !important;
    transition: color .33s ease;
    margin-top: 25px !important;
   
    a:hover{
        background-color: #737373ad;
        transition: 0.5s;
    }
`

const SideNav = styled.div`
    position: fixed;
    top:0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index:10000;
    list-style: none;
    padding:20px !important;
    overflow-y: scroll;
    display:flex;
    flex-direction: column;
    transition: 0.7s ease-in-out;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    ::-webkit-scrollbar {
        width: 0.3em;
      }
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      }
      ::-webkit-scrollbar-thumb {
        background-color: rgba(233, 171, 171, 0.89);
        outline: 1px solid rgba(186, 186, 186, 0.775);
      }
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,0.2);

        a{
            font-weight: 500;
            color:#171a20 !important;
            transition: color .33s ease;
            width: 200px;
        }
    }

`

const CustomClose = styled.i`
    margin: 15px 15px;
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex !important;
    justify-content: flex-end;
`