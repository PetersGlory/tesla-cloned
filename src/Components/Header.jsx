import React, {useState} from 'react'
import styled from 'styled-components'

const Header = () => {
    const [sidebarOption, setSidebarOption] = useState(false)
    
  return (
    <Container>
        <a>
            <img src="/assets/images/logo.svg" alt="logo" />
        </a>

        <Menu>
            
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a> 
                <a href="#">Model Y</a>
                <a href="#">Solar Roof</a>
                <a href="#">Solar Panels</a>
            
        </Menu>

        <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Account</a>
            <CustomMenu onClick={()=>setSidebarOption(true)}>
                Menu
            </CustomMenu>
        </RightMenu>

        <SideNav show={sidebarOption}>
            <CloseWrapper onClick={()=>setSidebarOption(false)}>
                <CustomClose className="bi bi-x-circle" />
            </CloseWrapper>
            <li>
                <a href="#">Existing Inventory</a>
            </li>
            <li>
                <a href="#">Used Inventory</a>
            </li>
            <li>
                <a href="#">Trade-In</a>
            </li>
            <li>
                <a href="#">Test Drive</a>
            </li>
            <li>
                <a href="#">Insurance</a>
            </li>
            <li>
                <a href="#">Cybertruck</a>
            </li>
            <li>
                <a href="#">Roadster</a>
            </li>
            <li>
                <a href="#">Semi</a>
            </li>
            <li>
                <a href="#">Charging</a>
            </li>
            <li>
                <a href="#">Powerwall</a>
            </li>
            <li>
                <a href="#">Commercial Energy</a>
            </li>
            <li>
                <a href="#">Utilites</a>
            </li>
            <li>
                <a href="#">Find Us</a>
            </li>
            <li>
                <a href="#">Support</a>
            </li>
            <li>
                <a href="#">Investor Relations</a>
            </li>
        </SideNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
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
    display:flex;
    flex-direction: column;
    transition: 0.7s ease-in-out;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};

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