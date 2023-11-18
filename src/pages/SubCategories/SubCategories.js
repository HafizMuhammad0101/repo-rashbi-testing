import React from 'react'
import "./subcategories.css";
import { SubcategoriesTable } from '../../components/index';
export default function SubCategories() {
    return (
        <div className='row subcategories'>
            <div className='col-lg-10 bg-form'>
                <SubcategoriesTable />
            </div>
        </div>
    )
}
