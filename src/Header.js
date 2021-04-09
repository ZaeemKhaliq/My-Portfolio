import Button from '@material-ui/core/Button';
import { useContext, useEffect, useState } from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import {MobContext} from './Mobile';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

export default function Header(){

    const [screen,setScreen] = useContext(MobContext);
    console.log(screen);

    const [color,setColor] = useState('white');
    const [display,setDisplay] = useState('none');
    const [display1,setDisplay1] = useState('none');
    const [display2,setDisplay2] = useState('none');
    const [display3,setDisplay3] = useState('none');
    const [display4,setDisplay4] = useState('none');
    
    console.log(display);

    useEffect(()=>{
       
        window.addEventListener("scroll",changed);

        if(window.pageYOffset > 100){
            document.getElementById("navBar").classList.add("navBarChanged");
            document.getElementById("heading").classList.add("navBarChanged");
            setColor('black');
        }
        else{
            document.getElementById("navBar").classList.remove("navBarChanged");
            document.getElementById("heading").classList.remove("navBarChanged");
            setColor('white');
        }

        if(window.pageYOffset >=0 && window.pageYOffset<=479){
            setDisplay('block');
        }
        else{
            setDisplay('none');
        }

        if(window.pageYOffset >479 && window.pageYOffset <=1044){
            setDisplay1('block');
        }
        else{
            setDisplay1('none');
        }

        if(window.pageYOffset >1044 && window.pageYOffset <=1610){
            setDisplay2('block');
        }
        else{
            setDisplay2('none');
        }

        if(window.pageYOffset >1610 && window.pageYOffset <=2280){
            setDisplay3('block');
        }
        else{
            setDisplay3('none');
        }

        if(window.pageYOffset >2280){
            setDisplay4('block');
        }
        else{
            setDisplay4('none');
        }

        return () => {
            window.removeEventListener("scroll",changed);
        }
    },[]);

    
    const changed = () =>{
        if(window.pageYOffset > 100){
            document.getElementById("navBar").classList.add("navBarChanged");
            document.getElementById("heading").classList.add("navBarChanged");
            setColor('black');
        }
        else{
            document.getElementById("navBar").classList.remove("navBarChanged");
            document.getElementById("heading").classList.remove("navBarChanged");
            setColor('white');
        }

        if(window.pageYOffset >=0 && window.pageYOffset<=479){
            setDisplay('block');
        }
        else{
            setDisplay('none');
        }

        if(window.pageYOffset >479 && window.pageYOffset <=1044){
            setDisplay1('block');
        }
        else{
            setDisplay1('none');
        }

        if(window.pageYOffset >1044 && window.pageYOffset <=1610){
            setDisplay2('block');
        }
        else{
            setDisplay2('none');
        }

        if(window.pageYOffset >1610 && window.pageYOffset <=2191){
            setDisplay3('block');
        }
        else{
            setDisplay3('none');
        }

        if(window.pageYOffset >2191){
            setDisplay4('block');
        }
        else{
            setDisplay4('none');
        }
    }

    const head = {
        height: 100,
        borderBottom:'1px solid black',
        width:'100%',
        display: 'flex',
        backgroundColor:'transparent',
        zIndex: '1',
        position: 'fixed'
    };

    const mobhead = {
        height: 60,
        borderBottom:'1px solid black',
        width:'100%',
        display: 'flex',
        backgroundColor:'transparent',
        zIndex: '1',
        position: 'fixed'
    };

    const redirect = (num) => {
        if(num==0){
            window.scrollTo({
                top: 0,
                behavior:'smooth'
            })
        }
        if(num==1){
            window.scrollTo({
                top: screen > 800 ? 557 : 440,
                behavior:'smooth'
            })
        }
        if(num==2){
            window.scrollTo({
                top: screen > 800 ? 1116 : 1000,
                behavior:'smooth'
            })
        }
        if(num==3){
            window.scrollTo({
                top: screen > 800 ? 1710 : 2240,
                behavior:'smooth'
            })
        }
        if(num==4){
            window.scrollTo({
                top: screen > 800 ? 2280 : 2750,
                behavior:'smooth'
            })
        }
   }

   

    const buttons = [{
        name: 'Home',
        id: 0,
        display: display
    },{
        name: 'About',
        id: 1,
        display: display1
    },{
        name: 'Projects',
        id: 2,
        display: display2
    },{
        name: 'Skills',
        id: 3,
        display: display3
    },{
        name: 'Contact Me',
        id: 4,
        display: display4
    }];




    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    

    return (
        <div style={screen > 800 ? head : mobhead} id="navBar">
            <div style={{flex: '0.5'}}>
                {screen > 800 ? 
                <h1 style={{color:'white',display:'inline-block'}} id="heading">MY PORTFOLIO</h1>
                :
                <h3 style={{color:'white',display:'inline-block'}} id="heading">MY PORTFOLIO</h3>
                }
            </div>

            {screen > 800 ? 
            <div style={{flex:'0.5',display:'flex',justifyContent:'space-around',alignSelf:'center'}}>

                {buttons.map(button => {
                    return (
                        <>
                            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                <Button style={{color:color}} onClick={()=>redirect(button.id)}>{button.name}</Button>
                                <FiberManualRecordIcon style={{color:color,fontSize:14,display:button.display}} />
                            </div>
                        </>
                    );  
                })}
                <div>
                    <Button color="primary" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/u/0/uc?id=1esJASl3HE_LaU9Bmve_eqC5rPNCSYn_0&export=download" variant="contained">RESUME</Button>
                </div>
                
            </div>
            :
            <div style={screen > 800 ? {flex:'0.5'} : {flex:'0.5',alignSelf:'center',textAlign:'right'}}>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} color="primary" variant="contained">
                    <MenuIcon />
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {buttons.map(button => {
                        return(
                            <>
                                <MenuItem onClick={()=>{
                                    redirect(button.id)
                                    handleClose()
                                }}>{button.name}</MenuItem>
                            </>
                        );
                    })}
                </Menu>
            </div>
            }
        </div>
    );
}