import {useEffect} from 'react';
import Router from 'next/router';
import CustomButton from '../../comps/custombutton';
import Header from '../../comps/Header';
import './contact.css';
import { MdEmail } from 'react-icons/md'

const Contact = () => {

    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector("#contactpage").style.left = 0;
        }, 300);
        
    }, []);

    function clickIndex(){
        Router.back()
    }

    return <div id="contactpage"> 
    <Header text="Contact me!" fontSize="24"/>
    <CustomButton text='email' />
    <CustomButton text="Back" color="#32a881" onClick={clickIndex}></CustomButton>
    </div>
}
export default Contact;