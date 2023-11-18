import React from 'react'
import "./sidebarButton.css";
import { Link } from 'react-router-dom';

export default function SidebarButton({ route, title, icon, isActive, onClick }) {
    return (
        <Link to={route} className={`col-lg-12 bg-btn text-decoration-none ${isActive ? 'active' : ''}`} onClick={onClick}>
            <div className='row align-items-center text-center justify-content-end'>
                <div className='col-lg-9'>
                    <span className={`title text-dark ${isActive ? 'activeText' : ''}`} >{title}</span>
                </div>
                <div className='col-lg-3'>
                    <span className={`icon text-dark ${isActive ? 'activeText' : ''}`}>{icon}</span>
                </div>
            </div>
        </Link >
    )
}
