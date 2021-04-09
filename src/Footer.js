import React, { useContext, useEffect, useState } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {MobContext} from './Mobile';


export default function Footer(){

    const [screen,setScreen] = useContext(MobContext);

    const footStyle = {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(255 245 198)',
        alignItems: 'center',
        position:'relative'
    }
    


    const [date, setDate] = useState('');
      useEffect(()=>  {
        var d = new Date();
        var n = d.getFullYear();
        setDate(n);
    },[]);

    const redirect = num => {
        if(num==0){
            window.scrollTo({
                top: 0,
                behavior:'smooth'
            })
        }
    }

    return (
        <>
       
            <div style={footStyle}>
                <div>
                    <p style={screen > 800 ? null : {fontSize:14}}>Reach me on</p>
                </div>
                <div style={{display:'flex',width:screen>800?'15%':'50%',justifyContent:'space-between'}}>
                    <a href="https://www.linkedin.com/in/zaeem-khaliq-462aa0190/" target="_blank" rel="noopener noreferrer"><LinkedInIcon style={{color:'#2867B2',fontSize:32}} /></a>
                    <a href="https://github.com/ZaeemKhaliq" target="_blank" rel="noopener noreferrer"><GitHubIcon style={{color:'black',fontSize:32}}/></a>
                    <a href="https://www.facebook.com/zaeem.khaliq/" target="_blank" rel="noopener noreferrer"><FacebookIcon style={{color:'#4267B2',fontSize:32}} /></a>
                    <a href="https://twitter.com/ZaeemKhaliq" target="_blank" rel="noopener noreferrer"><TwitterIcon style={{color:'#1DA1F2',fontSize:32}} /></a>
                </div>
                <div style={{textAlign:'center'}}>
                    <p style={screen > 800 ? null : {fontSize:14}}>Copyrights ® {date}</p>
                    <p style={screen > 800 ? null : {fontSize:14}}>Created By Zaeem Khaliq</p>
                    <button id={screen > 800 ? "scrollTopBut" : "mobscrollTopBut"} onClick={()=>redirect(0)}><KeyboardArrowUpIcon /></button>
                </div>
                
                    
                    
                
            </div>
        </>
    );
}