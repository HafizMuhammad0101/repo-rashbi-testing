import React from 'react'
import "./links.css";
import SocialTable from '../../components/socialTable/SocialTable';
import { Dropdown } from '../../components';
export default function Links() {
    return (
        <div className='row links'>
            <div className='col-lg-10 bg-form'>
                <SocialTable />
            </div>
        </div>
    )
}
