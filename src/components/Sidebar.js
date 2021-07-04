import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import * as Unicons from "@iconscout/react-unicons";
import profile from '../assets/images/profilebg.png';

function Sidebar() {
    const [ click, setClick ] = useState(false);

    const handleClick = () => setClick(!click);
    const openContainer = () => setClick(false);
    return (
        <section className={ click ? "sidebar active" : "sidebar"}>
            <div className="sidebar__container container">
                <div className="header">
                <Link to="/" className="logo">
                    <i className="uil logoAlt"><Unicons.UilBriefcase /></i>
                    <div className="logo__name">Expens</div>
                </Link>
                
                <i className="menu__icon" onClick={handleClick}>
                   { click ? <Unicons.UilApps /> : <Unicons.UilTimes />}</i>
               </div>

               <ul className="nav__list">
                   <li className="nav__item">
                       
                           <i className="uil search-alt"><Unicons.UilSearch/></i>
                          <input type="text" className={click ? "place active" : "place"} placeholder="search..." onClick={openContainer}/>
                            <span className="tooltips">Search</span> 

                   </li>
                   <li className="nav__item">
                       <Link to="/" className="nav__link">
                           <i className="uil dash-alt"><Unicons.UilEstate/></i>
                           <span className="link__name">Dashboard</span>
                       </Link>
                       <span className="tooltips">Dashboard</span> 
                   </li>
                   <li className="nav__item">
                       <Link to="/expense" className="nav__link">
                           <i className="uil user-alt"><Unicons.UilChartPie/></i>
                           <span className="link__name">Track Expense</span>
                       </Link>
                       <span className="tooltips">Track Expense</span> 
                   </li>
                   <li className="nav__item">
                       <Link to="/income" className="nav__link">
                           <i className="uil grid-alt"><Unicons.UilAnalytics/></i>
                           <span className="link__name">Track Income</span>
                       </Link>
                       <span className="tooltips">Track Income</span> 
                   </li>
                   <li className="nav__item">
                       <Link to="/" className="nav__link">
                           <i className="uil user-alt"><Unicons.UilUser/></i>
                           <span className="link__name">User</span>
                       </Link>
                       <span className="tooltips">User</span> 
                   </li>
                   <li className="nav__item">
                       <Link to="/" className="nav__link">
                           <i className="uil grid-alt"><Unicons.UilChart/></i>
                           <span className="link__name">Analytics</span>
                       </Link>
                       <span className="tooltips">Analytics</span> 
                   </li>
                   
                    <li className="nav__item">
                       <Link to="/" className="nav__link">
                           <i className="uil grid-alt"><Unicons.UilSetting/></i>
                           <span className="link__name">Setting</span>
                       </Link>
                       <span className="tooltips">Setting</span> 
                   </li>
               </ul>
               <div className="profile__content">
                   <div className="profile">
                       <div className="profile__details">
                             <img src={profile} alt="profile" className="user"/> 
                           <div className="name__job">
                               <h3 className="name">Ebuka Victor</h3>
                               <div className="job">web developer</div>
                           </div>
                       </div>
                       <i className="uil logout"><Unicons.UilSignout/></i>
                   </div>
               </div>
            </div>
            
        </section>
    )
}

export default Sidebar
