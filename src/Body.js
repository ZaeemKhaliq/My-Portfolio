import { useContext, useEffect, useState } from "react";
import ReactTypingEffect from 'react-typing-effect';
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade';
import axios from 'axios';
import {MobContext} from './Mobile';
import Bounce from 'react-reveal/Bounce';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

export default function Body(){

    const [screen,setScreen] = useContext(MobContext);
    const [loading, setLoading] = useState(false);

    const projects = [{
        img: 'https://i.ibb.co/1L4rj9v/Screenshot-630.png',
        alt: 'pakwheels',
        href: 'https://pak-wheels-clone.web.app/',
        name: 'Pak Wheels Clone',
        description: `Clone website of Pak Wheels made with basic ReactJS and connected with firebase's firestore.`
    },{
        img: 'https://rameezahmedportfolio.netlify.app/static/media/cov1.36baf7be.PNG',
        alt: 'dailyshopping',
        href: 'http://sabkhreed-lo.com/',
        name: 'DailyShopping',
        description: `A general E-commerce website made with HTML, CSS and JavaScript with ASP.NET backened and SQL Server database. Contributed in developing admin panel of the website.`
    },{
        img: 'https://i.ibb.co/2MLcT1M/Screenshot-562.png',
        alt: 'notes',
        href: 'https://notes-12cb9.web.app/',
        name: 'Notes',
        description: 'A simple to do task list made with basic ReactJS.'
    },];

    const skills = [{
        img:'https://rameezahmedportfolio.netlify.app/static/media/html.c051d222.png',
        alt: 'HTML5',
        name: 'HTML5'
    },{
        img: 'https://cdn.iconscout.com/icon/free/png-512/css3-8-1175200.png',
        alt: 'CSS3',
        name: 'CSS3'
    },{
        img: 'https://www.lorecentral.org/wp-content/uploads/2017/11/Javascript-shield.png',
        alt: 'JavaScript',
        name: 'JavaScript'
    },{
        img: 'https://cdn-blog.lawrencemcdaniel.com/wp-content/uploads/2020/06/09140550/React-logo.png',
        alt: 'React',
        name: 'ReactJS'
    },{
        img: 'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png',
        alt: 'Firebase',
        name: 'Firebase'
    },{
        img: 'data:image/png;base64,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',
        alt: 'Bootstrap',
        name: 'Bootstrap'
    },{
        img: 'https://opencollective-production.s3.us-west-1.amazonaws.com/ada636e0-395b-11ea-8ab7-b3f0317bbc7c.png',
        alt: 'Material UI',
        name: 'Material UI'
    }];

    
 
    console.log(window.pageYOffset);
    console.log(document.documentElement.scrollTop);



    const [details,setDetails] = useState({name:'',email:'',message:''});
    console.log(details);


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setDetails((prev) => ({...prev,[name] : value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading((prevLoading) => !prevLoading);

        axios({
            method: "POST", 
            url:"https://contact-backened.herokuapp.com/send", 
            data:  details
          }).then((response)=>{
            setLoading((prevLoading) => !prevLoading);
            if (response.data.status === 'success') {
              alert("Message Sent."); 
              resetForm()
            } else if (response.data.status === 'fail') {
              alert("Message failed to send.")
            }
          })
    }

    const resetForm = () =>{
        setDetails({name:'',email:'',message:''});
    }


    return (
        <main>
            <section className={screen > 800 ? "intro" : "mobintro"} style={{paddingTop:100}}>
                
                <div style={screen > 800 ? {width:'90%',margin:'150px auto'} : {width:'90%',margin:'50px auto'}}>
                    <p style={{fontSize:screen > 800 ? 26 : 20,color:'white',textAlign:'center',fontFamily:'Montserrat',fontWeight:'400'}}>Hello! Welcome to My Portfolio</p>
                    <p style={{fontSize:screen > 800 ? 50 : 20,color:'white',textAlign:'center',fontFamily:'Montserrat'}}>I Am <p style={{display:'inline',fontWeight:'bolder'}} id="demo">
                        <ReactTypingEffect
                        
                            speed="100"
                            eraseSpeed="50"
                            eraseDelay="2000"
                            typingDelay="1000"
                            text={["MUHAMMAD ZAEEM KHALIQ.", "REACT DEVELOPER."]}
                            style={{color:'white'}}
                        />
                        </p>
                        </p>
                    <div style={screen > 800 ? {textAlign: 'center'} : {textAlign: 'center',marginTop:50}}>
                        <a href="https://drive.google.com/file/d/1esJASl3HE_LaU9Bmve_eqC5rPNCSYn_0/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button id="resume">View My RESUME</button></a>
                    </div>
                    
                </div>
            </section>

            
            <section className="about" style={{paddingTop:1,height:560}} id="about">
                <div style={{textAlign:'center'}}>
                    <h1 style={{fontFamily:'Nunito',display:'inline-block',borderBottom:'3px solid black'}}>ABOUT ME</h1>
                </div>
                <div style={screen > 800 ? {width:'80%',margin:'0 auto',display:'flex',justifyContent:'space-between'} : {width:'80%',margin:'0 auto',display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
                    <div style={screen>800? null : {textAlign:'center'}}>
                        <img src="https://i.ibb.co/JsMkxtr/SuitPic.jpg" alt="profile" style={screen > 800 ? {width:350,height:350} : {width:150,height:150}}/>
                    </div>
                    <div style={screen > 800 ? {width:'65%'} : {textAlign:'center'}}>
                        <h2 style={{margin:0}}>MUHAMMAD ZAEEM KHALIQ</h2>
                        <p>I am a software engineering undergraduate from NED University of Engineering and Technology, Karachi, interested in web designing and development. I'm into MERN stack development and currently working on ReactJs.</p>
                    </div>
                </div>
            </section>



            <section className="projects" style={{backgroundColor:'rgb(243, 243, 243)',paddingTop:1,paddingBottom:30}}>
                <div>
                    <div style={{textAlign:'center'}}>
                        <h1 style={{fontFamily:'Nunito',display:'inline-block',borderBottom:'3px solid black'}}>PROJECTS</h1>
                    </div>

                    <div style={{display:'flex',width:'80%',margin:'0 auto',justifyContent:'space-between',flexWrap:'wrap'}}>
                        <Fade left>
                            {projects.map(project => {
                                return(
                                    <>
                                    <div>
                                        <div className={screen > 800 ? "container" : "mobcontainer"}>
                                            <img src={project.img} alt={project.alt} id={screen > 800 ? "pic1" : "mobpic1"} />
                                            
                                            <div className="overlay">
                                                <div className="text"><a href={project.href} style={{textDecoration:'none',color:'white'}} target="_blank">Visit Site</a></div>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 style={{textAlign:'center'}}>{project.name}</h3>
                                        </div>
                                        <div style={{width:screen > 800 ? 300 : null,margin:'0 auto'}}>
                                            <p style={{textAlign:'center'}}>{project.description}</p>
                                        </div>
                                    </div>
                                    </>
                                );
                            })}
                        </Fade>
                    </div>
                </div>
            </section>


            <section className="skills" style={screen > 800 ? {backgroundColor:'white',height:'auto',paddingTop:30,minHeight:530,paddingBottom:30} : {backgroundColor:'white',height:'auto',paddingTop:30,minHeight:350,paddingBottom:30}}>
                <div style={{textAlign:'center'}}>
                    <h1 style={{fontFamily:'Nunito',display:'inline-block',borderBottom:'3px solid black'}}>SKILLS</h1>
                </div>
                <div style={screen > 800 ? {display:'flex',width:'75%',margin:'0 auto',justifyContent:'center',flexWrap:'wrap'} : {display:'flex',width:'55%',margin:'0 auto',justifyContent:'space-evenly',flexWrap:'wrap'}}>
                    <Bounce left>
                    {skills.map(skill => {
                        return (
                            <>
                            <div>
                                <img src={skill.img} alt={skill.alt} style={screen > 800 ? {height:150,width:150} : {height:50,width:50}} />
                                {screen > 800 ?
                                <h3 style={{textAlign:'center'}}>{skill.name}</h3>
                                :
                                <h6 style={{textAlign:'center'}}>{skill.name}</h6>
                                }
                                
                            </div>
                            </>
                        );
                    })}
                    </Bounce>
                </div>
            </section>

            <section className="contact" style={{backgroundColor:'rgb(243, 243, 243)',paddingTop:1,paddingBottom:30,height:screen>800 ? 755: 670}}>
                <div id={screen > 800 ? "contactDiv" : null}>
                   
                    <div style={{textAlign:'center'}}>
                        <h1 style={{fontFamily:'Nunito',display:'inline-block',borderBottom:'3px solid black',marginBottom:0}}>CONTACT ME</h1>
                        <p style={{marginBottom:0}}>You can send a message to me on my email.</p>
                        <br></br>
                    </div>
                    <div style={screen > 800 ? {width:'750px',margin:'0 auto'} : {margin:'0 auto'}}>
                        <form onSubmit={handleSubmit} method="POST">
                            <div style={screen > 800 ? {display:'flex',justifyContent:'space-between'} : {display:'flex',justifyContent:'space-between',flexDirection:'column',textAlign:'center'}}>
                                <div>
                                    <label style={{fontFamily:'Montserrat',fontWeight:'bolder'}}>Name</label>
                                    <br></br>
                                    <input type="text" id="name" name="name" value={details.name || ''} onChange={handleChange} placeholder="Your name..." />
                                </div>
                                <br></br>
                                
                                <div>
                                    <label style={{fontFamily:'Montserrat',fontWeight:'bolder'}}>Email</label>
                                    <br></br>
                                    <input type="text" id="email" name="email" value={details.email || ''} onChange={handleChange} placeholder="Your Email address..." />
                                </div>
                            </div>
                            <br></br>

                            <div style={screen > 800 ? null : {textAlign:'center'}}>
                            <label style={{fontFamily:'Montserrat',fontWeight:'bolder'}}>Message</label>
                            <br></br>
                            {screen > 800 ?
                            <textarea cols="80" rows="10" id="message" name="message" value={details.message || ''} onChange={handleChange} placeholder="Your Message..." ></textarea>
                            :
                            <textarea cols="32" rows="10" id="message" name="message" value={details.message || ''} onChange={handleChange} placeholder="Your Message..." ></textarea>
                            }
                            </div>
                            
                            <br></br>
                            <br></br>
                            <div style={{textAlign:'center'}}>
                                <input type="submit" value="Send Message" id="submitBut" />
                            </div>
                            <div style={{textAlign:'center',margin:'10px auto',display:'flex',justifyContent:'space-between',alignItems:'center',width:'25%'}}>
                                <Fade
                                in={loading}
                                style={{
                                    transitionDelay: loading ? '50ms' : '0ms',
                                }}
                                unmountOnExit
                                >
                                    <Typography variant="button" display="block" gutterBottom>
                                        SENDING MESSAGE
                                    </Typography>
                                    <CircularProgress />
                                </Fade>
                            </div>
                        </form>
                    </div>
                </div>


            </section>

        </main>
    );
}