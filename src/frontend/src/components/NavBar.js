import React from "react";
import { Link} from "react-router-dom";

import './NavBar.scss'

export const NavBar=()=>{

  return(
    <div className="NavBar">
       
    <h1 className="app-name">IPL DASHBOARD</h1>

    <Link to='/' > <h1>HOME</h1></Link>
 
     </div>
  )  
}