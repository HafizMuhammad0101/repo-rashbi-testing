import React from 'react'
import './categoriesTable.css';
import DataTable from 'react-data-table-component';
import { Input, Button, Label } from "../../index";
import { column, data } from './elements/Elements';

export default function CategoriesTable() {

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
    }, 300);


    return (
        <div className='mainContainer '>
            <div className='card parentalCard'>
                <div className='subContainer'>
                    <Button route={"/category-form"} buttonClass={"addFileBtn "} linkClass={"text-dark linkClass"} title={"הוסף קטגוריה חדשה +"} />       {/* ADD A NEW CATEGORY + */}
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

