import React, { Component } from 'react';
import CustomButton from "../comps/custombutton"
import Header from "../comps/Header";
import Input from "../comps/input";
import Chat from "../comps/chat";
import ChatPage from '../pages/ChatPage'

export default {
    title:"Custom Button",
    component:CustomButton
}
export const MyCustomButton = () => <CustomButton />;

function CancelClick() {
    alert("Canceled");
}

export const MyCustomButtonWithOptions = () => <CustomButton 

    text="Cancel"
    color="#999"
    onClick={CancelClick}

/>;
export const MyHeader = () => <Header />;
export const MyInputWithPlaceholder = () => <Input 
    placeholder="Custom Placeholder"
/>;
export const MyChat = () => <Chat />;

export const MyChatPage = () => <ChatPage />

/*export const PageWithCustomButtons = () => <div>
    <Header 
    fontSize={15}
    color="#ABC"
    // OnMouseOver={CancelClick}
    />
    <Header 
    fontSize={25}
    color="#ff0000"
    // OnMouseOver={OkClick}
    />

    <CustomButton
    text="Cancel"
    color="#999"
    onClick={CancelClick}/>
    <CustomButton 
    text="Ok"
    color="#3F5"
    onClick={OkClick}/>
    <CustomButton 
    text="Submit"
    color="#F3F"
    onClick={SubmitClick}/>
    <CustomButton text="Menu"/>
</div>
 
function CancelClick() {
    alert("Canceled");
}

function OkClick() {
    alert("Ok");
}

function SubmitClick() {
    alert("Submitted");
}
*/