import React from 'react';
import './chat.css'
import Header from '../Header'
const defaultimg = require('./default.png');

const Chat = ({msg, img, name, backgroundColor}) => <div
 className="chat_card"
 style={{backgroundColor:backgroundColor}}> 
    <div className="chat_user">
    <img src={img} />
    <Header fontsize="100%" text={name}/>
    </div>
    <div className="chat_msg">
        {msg}
    </div>
</div>

Chat.defaultProps = {
    msg:"Please type Something",
    img:defaultimg,
    backgroundColor:"#EEE",
    name:"username"
}

export default Chat;