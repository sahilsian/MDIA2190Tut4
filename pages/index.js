import Link from 'next/Link';
import Router from 'next/router';
import './app.css';
import './index.css'
import CustomButton from '../comps/custombutton';
import { IoMdHappy } from 'react-icons/io'

function ClickIndex(){
    document.querySelector("#mainapp").style.right = "-100%";
    setTimeout(function(){
        Router.push("/ChatPage")
    }, 300)
}

function ClickContact(){
    document.querySelector("#mainapp").style.right = "-100%";
    setTimeout(function(){
        Router.push("/Contact")
    }, 1000)
}

const Index = () => <div id="mainapp">
    <div onClick={ClickIndex}>Welcome to the Chat</div>
    <IoMdHappy /> <CustomButton onClick={ClickIndex} text="Chat" color="#32a881"></CustomButton>
    <CustomButton onClick={ClickContact} text="Contact Us" color="#32a881"></CustomButton>
    </div>



export default Index;