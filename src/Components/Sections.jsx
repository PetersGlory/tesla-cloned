import React from 'react'
import styled from 'styled-components'

const Sections = ({title,desc,bg, left, right, index}) => {
  return (
    <Wrap key={index} bgImage={bg}>
        <ItemText>
            <h1>{title}</h1>
            <p>{desc}</p>
        </ItemText>
        <Buttons>
            <ButtonGroup>
                <LeftButton>
                    {left}
                </LeftButton>
                {right && 
                <RightButton>
                    {right}
                </RightButton>
                }
            </ButtonGroup>
            <DownArrow className="bi bi-chevron-down"></DownArrow>
        </Buttons>

    </Wrap>
  )
}

export default Sections
const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url('/assets/images/${props.bgImage}')`};
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom: 40px;
    @media(max-width: 784px){
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32,0.8);
    height: 40px;
    width: 250px;
    color: #fff !important;
    border-radius: 100px;
    display:flex;
    justify-content: center;
    align-items: center;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`
const RightButton = styled(LeftButton)`
    background-color: white;
    color: black !important;
    opacity: 0.85;
`

const DownArrow = styled.i`
    height: 40px;
    font-weight: bold !important;
    color: white !important;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center !important;
    align-items: center;
    margin-top: 10px;
`