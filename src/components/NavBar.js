import React from 'react'
import styled from 'styled-components/macro';



const Header = styled.div`
position: absolute;
width: 100%;
height: 10%;
left: 0%;
top: 0%;

background: red;
border: 1px solid rgba(0, 0, 0, 0.3);
box-sizing: border-box;
text-align: center;
align-items: center;
`


const NavBar = () => {
    //const title = "title"
    return (
        <div>
            <Header>
                {/* <p>{props.title}</p> */}
            </Header>
        </div>
    )
}

export default NavBar
