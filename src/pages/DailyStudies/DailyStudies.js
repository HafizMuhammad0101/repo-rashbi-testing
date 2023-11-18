import React from 'react'
import "./dailyStudies.css";
import { StudiesTable } from '../../components/index';
export default function DailyStudies() {
    return (
        <div className='row dailyStudies'>
            <div className='col-lg-10 bg-form'>
                <StudiesTable />
            </div>
        </div>
    )
}
