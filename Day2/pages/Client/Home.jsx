import React, { useState, useEffect } from 'react'
import { Navbar } from '../../components/Navbar'
import vid from "../../assets/video1.mp4";
import vid1 from "../../assets/video2.mp4";
import img3 from "../../assets/beachweds.jpg";
import img4 from "../../assets/babygirl.jpg";
import img5 from "../../assets/babybirth.jpg";
import img6 from "../../assets/dining.jpg";
import img from "../../assets/bgsss.jpg";
import Contact from '../Contact';
import {GiPartyPopper} from "react-icons/gi"
import { Footer } from '../../components/Footer'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const nav = useNavigate()

    const routeProducts = () => {
        nav('/products')
    }


    return (
        <>
            <div className='main'>
                <Navbar/>
            </div>
            <div>
                <video className='vid' src={vid} autoPlay loop muted></video>
            </div>
            <div>
                <video className='vid1' src={vid1} autoPlay loop muted></video>
            </div>
            <div>
    <img  className="image2"  src={img} />
   </div>
             <div>
    <h1 className="cs">
        <i>EventCraftPro</i>
    </h1>
    <h1 className="eventmemory">
        <i>" Life is an Event , Make it memorable..! "</i>
    </h1>
   </div>
   <div>
   <h1 className="pp2">
            <GiPartyPopper/>
        </h1>

        <h1 className="pp1">
            <GiPartyPopper/>
        </h1>
   <p className="para">
            EventCraftPro is a sophisticated online platform designed to streamline and simplify the process of planning and booking various aspects<br/>
             of events, ranging from small gatherings to large-scale conferences and everything in between. This website serves as a one-stop destination <br/>
             for event organizers, offering a wide range of features and services to ensure the seamless execution of events.
        </p>

        <p className="para1">
        With our EventCraftPro family, you can transform your event planning experience into a seamless, efficient, and stress-free process.
        Whether you're organizing a corporate conference, a wedding, a charity gala, or a small family gathering, our platform provides the tools
        and resources you need to create memorable events that exceed expectations. Embark on a journey to make your event dreams a reality.
        </p>
   </div>
   <div>
        <h2 className="works">
            Here are some of our works..!
        </h2>
       </div>

       <div className="blockmoves  ">
           <div className="block"> </div>
           <div>
            <img className="image3" src={img3} />
            <img className="image4" src={img4} />
            <img className="image5" src={img5} />
            <img className="image6" src={img6} />
           </div>
           </div>
           <div className='magenda'>

           </div>
           <div>
            <Contact/>
           </div>
           <div>
            <Footer/>
           </div>

           
        </>

       
    )
}
export default Home;
