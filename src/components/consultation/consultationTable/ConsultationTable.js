import React from 'react'
import './consultationTable.css';
import DataTable from 'react-data-table-component';
import { Input, Button, Label } from "../../index";
import { column, data } from './elements/Elements';

export default function ConsultationTable() {

    setTimeout(() => {
        let counterElement = document.querySelector(".hgMgsX");
        let counterParent = document.querySelector(".sc-ezrdqu");
        counterParent.appendChild(counterElement);
        let counter = 1;
        counterElement.innerHTML = counter;

        const next = document.getElementById("pagination-next-page");
        const prev = document.getElementById("pagination-previous-page");  

        next.addEventListener("click", function () {
            counter = counter + 1;
            counterElement.innerHTML = counter;
        })

        prev.addEventListener("click", function () {
            counter = counter - 1;
            counterElement.innerHTML = counter;
        })

        const class1 = document.querySelectorAll("#cell-2-undefined")
        const class2 = document.querySelectorAll("#cell-3-undefined")
        class1.forEach(element => {
            element.classList.add("cell_2")
        })
        class2.forEach(element => {
            element.classList.add("cell_3")
        })

    }, 300);


    return (
        <div className='mainContainer '>
            <div className='card parentalCard'>
                <div className='subContainer'>
                    <Button route={"/consultation-form"} buttonClass={"addFileBtn "} linkClass={"text-dark linkClass"} title={"הוסף מוצר חדש +"} />       {/* ADD NEW PRODUCT + */}
                    <div className='row align-items-center'>
                        <Input type="search" inputClass="searchField w-100" parentalClass={"col-lg-9"} />
                        <Label labelClass="searchText" title=":לחפש" parentalClass={"col-lg-2"} />                                                  {/* FIND */}
                    </div>
                </div>
                <DataTable
                    columns={column}
                    data={data}
                    pagination
                    paginationPerPage={5}
                    paginationComponentOptions={{
                        rangeSeparatorText: "מתוך"
                    }}
                />
            </div>
        </div>
    )
}

