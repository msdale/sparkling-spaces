import React from 'react';

import "./MaidDashboard.css"

import DashboardImage from '../assets/dashboard/dashboard.png';
import Stars from "../assets/dashboard/stars.png"

const MaidDashboard = () => {

    return (
        <div id="maid-dashboard">
            <div>
                <div className="">
                    <img src={DashboardImage} alt="dashboard header" />
                </div>
            </div>
            <div className='section'>
                <div className='title is-2'>Scheduled Cleanings</div>
                <div className='columns m-3'>
                    <div className='column is-one-third has-text-centered'>
                        <div className="card">
                            <header className="card-header">
                                <p className="card-header-title has-text-link">
                                    4/1/2022 @ 1pm
                                </p>
                            </header>
                            <div className="card-content">
                                <div className="content">
                                    Sue Smith
                                    <br />
                                    Partial clean
                                    <br />
                                    123 Main St
                                </div>
                            </div>
                            <footer className="card-footer">
                                <a href="/nomatch" className="card-footer-item">Contact</a>
                                <a href="/nomatch" className="card-footer-item has-text-danger">Cancel</a>
                            </footer>
                        </div>
                    </div>
                    <div className='column is-one-third has-text-centered'>
                        <div className="card">
                            <header className="card-header">
                                <p className="card-header-title has-text-link">
                                    4/3/2022 @ 10am
                                </p>
                            </header>
                            <div className="card-content">
                                <div className="content">
                                    Danny Davito
                                    <br />
                                    Full clean
                                    <br />
                                    654 First St.
                                </div>
                            </div>
                            <footer className="card-footer">
                                <a href="/nomatch" className="card-footer-item">Contact</a>
                                <a href="/nomatch" className="card-footer-item has-text-danger">Cancel</a>
                            </footer>
                        </div>
                    </div>
                    <div className='column is-one-third has-text-centered'>
                        <div className="card">
                            <header className="card-header">
                                <p className="card-header-title has-text-link">
                                    4/5/2022 @ 8am
                                </p>
                            </header>
                            <div className="card-content">
                                <div className="content">
                                    Jane Doe
                                    <br />
                                    Move-Out clean
                                    <br />
                                    789 Electric Ave.
                                </div>
                            </div>
                            <footer className="card-footer">
                                <a href="/nomatch" className="card-footer-item">Contact</a>
                                <a href="/nomatch" className="card-footer-item has-text-danger">Cancel</a>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section'>
                <div className='title is-2'>Client Feedback</div>
                <div className="container m-3">
                    <div className="notification has-background-primary">
                    <button className="delete"></button>

                        NEW: Sally did a wonderful job and went above and beyond. Thank you Sparkling Spaces for a super clean home! (Johnny C.)
                    </div>
                    <div className="notification has-background-primary-light">
                        I love Tuesdays because it means Sally will be here to refresh our home. She provides fast and efficient service and is always polite. Love Sparkling Spaces and cannot recommend them enough. (Liv K.)
                    </div>
                    <div className="notification has-background-primary-light">
                        This was my first experience and it could not have been mor enjoyable - coming home to a freshly cleaned home is the best feeling. Thank you Sally! (Annie M.)
                    </div>
                </div>
            </div>
            <div className='section'>
                <div className='title is-2'>My Rating</div><br />
                <div className='container has-text-centered'>
                    <img src={Stars} alt="star rating" className='stars' />
                </div>
            </div>
            <div className='section'>
                <div className='columns is-vcentered'>
                    <div className='column is-one-third has-text-centered'>
                        <button className='button is-link is-rounded'>Contact Supervisor</button>
                    </div>
                    <div className='column is-one-third has-text-centered'>
                        <button className='button is-danger is-rounded'>Rating Forgiveness Request</button>
                    </div>
                    <div className='column is-one-third has-text-centered'>
                        <button className='button is-info is-rounded'>Request PTO</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default MaidDashboard