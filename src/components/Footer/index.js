import React from "react";

import { Wrapper,Content } from "./footer.syle";

const Footer = ({bottom}) =>{

    return(
        <Wrapper>
            <Content className={bottom} >
                <div>
                <a href="https://github.com/PetersGlory/tesla-john" target='_blank' >Tesla-Clone &copy; 2022</a>
                </div>
                <div>
                <a href="#" target='_blank'>Privacy & Legal</a>
                <a href="#" target='_blank'>Vehicle Recalls</a>
                <a href="#" target='_blank'>Contact</a>
                <a href="#" target='_blank'>Careers</a>
                <a href="#" target="_blank" >News</a>
                <a href="#" target="_blank" >Engage</a>
                <a href="#" target="_blank" >Locations</a>
                </div>
            </Content>
        </Wrapper>
    )
}

export default Footer
