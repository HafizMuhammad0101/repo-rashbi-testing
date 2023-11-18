import React from 'react'
import './selectField.css'

export default function SelectField() {
    return (
        <div className='row justify-content-end align-items-center px-3 mt-4'>
            <div className='col-lg-3 '>
                <select className='selectOptions py-2 pe-4 ps-2 w-100'>
                    <option value="PDF העלה כקובץ">PDF העלה כקובץ</option>
                    <option value="העלה כטקסט">העלה כטקסט</option>
                </select>
            </div>
            <div className='col-lg-2 text-end'>
                <h4 className='formHeading'>: אפשרויות העלאה</h4>
            </div>
        </div>
    )
}
