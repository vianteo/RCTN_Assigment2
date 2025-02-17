import React from "react";
import {Link} from 'react-router-dom'
 
export default function SideBar(){
    return(
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-warning">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span className="fs-5 d-none d-sm-inline">Menu</span>
                        </a>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-center" id="menu">
                            
                            <li className="nav-item">
                                <Link to="/aboutpage">About</Link>
                            </li>
                            <li>
                                <Link to="/experience">Experience</Link>
                            </li>
                            <li>
                                <Link to="/awards">Awards</Link>
                            </li>
                            <li>
                                <Link to="/interest">Interest</Link>
                            </li>
                            <li>
                                <Link to="/skill">Skills</Link>
                            </li>
                            <li>
                                <Link to="/homepage">Home</Link>
                            </li>
                        </ul>
                       
                        <hr/>
                        <div className="dropdown pb-4">
                            <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle"/>
                                {/* //<span className="d-none d-sm-inline mx-1">loser</span>// */}
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                                <li><a className="dropdown-item" href="#">New project...</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
    )
}