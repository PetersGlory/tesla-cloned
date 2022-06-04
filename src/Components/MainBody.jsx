import React,{useState} from 'react'
import styled from 'styled-components'
import Sections from './Sections'

const MainBody = () => {
    const [pages, setPages] = useState([
        {title:"Model 3",description:"Order Online for Touchless Delivery",left:"Custom Order",right:"Existing Inventory",bg:"model-3.jpg"},
        {title:"Model Y",description:"Order Online for Touchless Delivery",left:"Custom Order",right:"Existing Inventory",bg:"model-y.jpg"},
        {title:"Model S",description:"Order Online for Touchless Delivery",left:"Custom Order",right:"Existing Inventory",bg:"model-s.jpg"},
        {title:"Model X",description:"Order Online for Touchless Delivery",left:"Custom Order",right:"Existing Inventory",bg:"model-x.jpg"},
        {title:"Solar Panels",description:"Lowest Cost Solar Panels in America",left:"Order Now",right:"LEARN MORE",bg:"solar-panel.jpg"},
        {title:"Solar Roof",description:"Produce Clean Energy From Your Roof",left:"Order Now",right:"LEARN MORE",bg:"solar-roof.jpg"},
        {title:"Accessories",description:"",left:"Order Now",right:"",bg:"accessories.jpg"},
    ])
  return (
    <Container>
        {pages && pages.map((page, index)=>(
            <Sections 
            title= {page.title}
            desc = {page.description}
            bg = {page.bg}
            left = {page.left}
            right = {page.right}
            index = {index}
            />
        ))}
    </Container>
  )
}

export default MainBody

const Container = styled.div`
    height: 100vh;
`