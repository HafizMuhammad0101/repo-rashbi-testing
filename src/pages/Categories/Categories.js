import React from 'react'
import "./categories.css";
import { CategoriesTable } from '../../components';
export default function Categories() {
    return (
        <div className='row categories'>
            <div className='col-lg-10 bg-form'>
                <CategoriesTable />
            </div>
        </div>
    )
}
