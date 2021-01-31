import React, { useEffect, useState } from 'react'
import "./Nav.css"

const Nav = () => {

    const [show,setShow]=useState(false);
    useEffect(()=>{
    window.addEventListener("scroll",()=>{
        if(window.scrollY>100){
            setShow(true)
        }else{
           setShow(false)
        }
    })

    return ()=>{
        window.removeEventListener("scroll",()=>{});
    }
    },[])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
             alt="Netflix logo"
            />

          <img 
          className="nav__profile"
          src="https://occ-0-3195-3663.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABaPolEEq5s2QRP_CDO2Y0XKN6lbRAkH-S-B5XcfR-7xdSV2k-1VPzx54xaySu7czNLu8U4t5Q8lhLZMzIBPgxcA.png?r=a41"
          alt="Profile"/>
        </div>
    )
}

export default Nav
