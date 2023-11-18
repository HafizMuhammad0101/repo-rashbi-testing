import React from 'react'
import './socialTable.css';
import DataTable from 'react-data-table-component';
import { Input, Button, Label } from "../index";
import { column, data } from './elements/Elements';

export default function SocialTable() {

    return (
        <div className='mainContainer '>
            <div className='card parentalCard'>
                <div className='subContainer'>
                    <Button route={"/social-form"} buttonClass={"addFileBtn "} linkClass={"text-dark linkClass"} title={"הוסף קישור חדש +"} />
                </div>
                <DataTable
                    columns={column}
                    data={data}
                />
            </div>
        </div>
    )
}

