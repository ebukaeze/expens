import React from 'react';
import * as Unicons from "@iconscout/react-unicons";
import { Link } from "react-router-dom";


function Dashboard() {
    return (
        <section className="dashboard">
            <div className="dashboard__container grid">
                <Link to="/expense" className="grid__card">
                    <div className="card__content">
                        <i className="uil track__icon"><Unicons.UilChartPie size="100"/></i>
                        <h2 className="card__tilte">Track Expenses</h2>
                        <div>
                        <h3 className="card__subtitle">Follow up with the analysis</h3>
                         <span class="arrow__right"><Unicons.UilArrowRight /></span>
                        </div>
                        <div></div>
                    </div>
                </Link>
                 <Link to="/income" className="grid__card">
                    <div className="card__content">
                        <i className="uil track__icon"><Unicons.UilAnalysis size="100"/></i>
                        <h2 className="card__tilte">Track Income</h2>
                        <div>
                        <h3 className="card__subtitle">Follow up with the analysis</h3>
                        </div>
                    </div>
                </Link>
            </div>
            
        </section >
    )
}

export default Dashboard
