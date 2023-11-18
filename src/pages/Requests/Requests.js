import React from 'react'
import "./request.css";
import { RequestTable } from '../../components';
export default function Requests() {
    return (
        <div className='row request'>
            <div className='col-lg-10 bg-form'>
                <RequestTable />
            </div>
        </div>
    )
}
