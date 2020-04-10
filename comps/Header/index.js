//use the same component to change the fontsize
//change the text color of the header
//change the onMouseOver

import React from 'react';
import './header.css';

const Header = ({fontSize, color, text}) => <div className="header"
style={{fontSize:fontSize, color:color}}
>
    <h1 style={{fontSize:fontSize}}>{text}</h1>
</div>

// function MouseOver(){
//     alert("mouse is over");
// }

Header.defaultProps = {
    fontSize:12,
    color:"#000",
    text:"Header"
}

export default Header;