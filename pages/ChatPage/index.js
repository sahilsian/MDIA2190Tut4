import React, {useState, useEffect} from 'react';
import Router from 'next/router';
import './chatpage.css';
import Chat from '../../comps/chat';
import CustomButton from '../../comps/custombutton';
import Header from '../../comps/Header';
import Input from '../../comps/input';

import { IoMdHappy } from 'react-icons/io'
/*
var welcome_state = "Welcome to my App!"
function setWelcome() {
    welcome = "Start with Sending a Message.";
    document.querySelector("#Welcome").innerText = welcome;
}*/



const ChatPage = ({}) => {
    const [welcome, setWelcome] = useState("Welcome to my App!")
    const  [msg, setMsg] = useState("Please type something!");
    const [resp, setResp] = useState("Let me respond to you!")

    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector("#chatpage").style.left = 0;
        }, 300);
        
    }, []);

    function clickIndex(){
        Router.back()
    }
    

    return <div id="chatpage"> 
    <div id="welcome">
        <Header fontSize={32} text={welcome} />
    </div>
    <div id="chats" onClick={()=> {
        setWelcome("Start with sending a message.");
    }}>
        <Chat name={"User 1"} msg={msg} />
        
        <p />
        <Chat img={"https://cdn2.iconfinder.com/data/icons/hobby-butterscotch-vol-1/512/Building_Robots-512.png"} name={"Chat Bot"} msg={resp} backgroundColor={"#FAB"} />
    </div>
    <div id="controls">
        <Input onClick={(val)=>{
            setMsg(val);
            var new_resp = CheckResponse(val)
            setResp(new_resp);
            ///alert(val);
            /*if(val === "hi"){
                setResp("I love pie")
            }*/
        }} />
    </div>
    <CustomButton text="Back" color="#32a881" onClick={clickIndex}/>

</div>
}

function CheckResponse(inp){
    switch(inp.toLowerCase()){
        case "hi":
            return "I love pie!!!";

        case "How are you?":
            return "Great!";

        default:
            return "I dont understand what you are trying to say";
    }
}

ChatPage.defaultProps = {
    
}

export default ChatPage;