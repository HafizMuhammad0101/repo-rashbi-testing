import React from 'react'
import "./sidebar.css";
import profilePic from "../../assets/images/logo.png";
import { SidebarButton } from "../index";
import { elements } from "./elementsArray";
import { ImExit } from "react-icons/im";


export default function Sidebar() {
    const [activeButton, setActiveButton] = React.useState(window.location.pathname);

    const handleButtonClick = (to) => {

        setActiveButton(to);

    };
    return (
        <div className='col-lg-2 sidebar'>
            <div className='row justify-content-between align-items-center mt-2 mb-4'>
                <div className='col-lg-6 '>
                    <h1 className='userName'>רשב"י</h1>
                </div>
                <div className='col-lg-5'>
                    <img src={profilePic} alt='profile' className='img-fluid' />
                </div>
            </div>
            <div className='row justify-content-center mt-4'>
                {
                    elements.map((item, index) => {
                        return (
                            <SidebarButton
                                key={index}
                                title={item.title}
                                icon={item.icon}
                                route={item.to}
                                isActive={activeButton === item.to}
                                onClick={() => handleButtonClick(item.to)}
                                
                            />
                        )
                    })
                }
            </div>
            <div className='row align-items-end logOutRow'>
                <SidebarButton route="/logout" title="מנהל מערכת" icon={<ImExit size={25} />} />
            </div>
        </div>

    )
}
