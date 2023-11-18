import React, { useEffect, useState } from 'react'
import './studiesTable.css';
import DataTable from 'react-data-table-component';
import { Input, Button, Label, Dropdown } from "../index";
import { column } from './elements/Elements';
import { getDocs, collection } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig';
export default function StudiesTable() {
    const [records, setRecords] = useState([]);
    
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
            console.warn(counter);
            counterElement.innerHTML = counter;
        })

        prev.addEventListener("click", function () {
            counter = counter - 1;
            console.warn(counter);
            counterElement.innerHTML = counter;
        })
    }, 1500);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const colRef = collection(db, "daily-studies");
                const snapshot = await getDocs(colRef);
                let recordsArray = [];
                snapshot.forEach((doc) => {
                    recordsArray.push({ ...doc.data(), id: doc.id });
                });
                setRecords(recordsArray);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
        console.log(records);
    }, []);
    
    const result = records.map((item, index) => {
        return {
            name: <Dropdown id={item.id} title="לַעֲרוֹך" ITEM={item} />,
            type: <span className='fileSpan'>{item.name}</span>,
            srNo: index + 1,
        }
    })

    return (
        <div className='mainContainer '>
            <div className='card parentalCard'>
                <div className='subContainer'>
                    <Button route={"/study-form"} buttonClass={"addFileBtn "} linkClass={"text-dark linkClass"} title={"הוסף קובץהוסף קובץ +"} />
                    <div className='row align-items-center'>
                        <Input type="search" inputClass="searchField w-100" parentalClass={"col-lg-9"} />
                        <Label labelClass="searchText" title=":לחפש" parentalClass={"col-lg-2"} />
                    </div>
                </div>
                <DataTable
                    columns={column}
                    data={result}
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

