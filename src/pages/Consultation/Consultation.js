import React from 'react'
import "./consultation.css";
import { ConsultationTable } from '../../components';
export default function Consultation() {
    return (
        <div className='row consultation'>
            <div className='col-lg-10 bg-form'>
                <ConsultationTable />
            </div>
        </div>
    )
}
