import React from 'react'
import "./socialForm.css";
import { Label, Input, Button } from "../index"
import { FaCheck } from "react-icons/fa6";

export default function SocialForm() {
    const [type, setType] = React.useState("text");
    function focus() {
        setType("date")
    }

    const [fileName, setFileName] = React.useState('');

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];

        if (selectedFile) {
            setFileName('Selected File: ' + selectedFile.name);
        } else {
            setFileName('');
        }
    };

    return (
        <div className='socialContainer social-bg-form '>
            <div className='row align-items-center justify-content-center '>
                <div className='col-lg-10 my-2'>
                    <h3 className='mt-2 text-end fwt-600 poppins social_formHeading'>
                        לימודים יומיים
                    </h3>
                </div>
                <div className='col-lg-10 card socialCard'>
                    <div className='row justify-content-end align-items-center px-3 mt-4'>
                        <div className='col-lg-3 text-end'>
                            <h3 className='mt-2 text-end social_formHeading'>
                                טופס קישור חברתי
                            </h3>
                        </div>
                    </div>

                    <div className='row justify-content-end mt-5 social_bgCardImg'>
                        <Input parentalClass={"col-lg-6"} inputClass={"txt w-100 p-2"} type={"text"} placeholder='כתובת אתר' />  {/* URL */}
                        <Label title=":כתובת אתר" parentalClass={"text-end"} labelClass={"txtAreaLabel"} style={{ width: "15%" }} /> {/*WEBSITE*/}

                        {/* ------------ Select field ------------ */}

                        <div className='row justify-content-end align-items-center px-3 mt-4'>
                            <div className='col-lg-3 text-end'>
                                <select className='social_selectOptions py-2 pe-4 ps-2 w-100'>
                                    <option value="בחר">בחר</option>                           {/* SELECT */} 
                                    <option value="יוטיוב">יוטיוב</option>                     {/* YOUTUBE */}
                                    <option value="וואטסאפ">וואטסאפ</option>                   {/* WHATSAPP */}  
                                    <option value="אתר אינטרנט">אתר אינטרנט</option>           {/* WEBSITE */}  
                                </select>
                            </div>
                            <div className='col-lg-2 text-end' style={{width: "15%"}}>
                                <h4 className='social_formHeading'>: אפשרויות העלאה</h4>
                            </div>
                        </div>

                        {/* ------------ Choose File ------------ */}

                        <div className='col-lg-12 mt-2'>
                            <div className='row justify-content-end'>
                                <div className='col-lg-6'>
                                    <Label htmlFor="fileInput" labelClass={"fileName w-100 p-5 fwt-600"} title={!fileName ? " להוסיף תמונה +" : fileName} />
                                    <Input type="file" id="fileInput" name="fileInput" onChange={handleFileChange} style={{ display: "none" }} />
                                </div>
                                <Label title=":הוסף כיסוי" parentalClass={"text-end"} labelClass={"txtAreaLabel"} style={{ width: "15%" }} />
                            </div>
                        </div>

                        {/* ------------ Buttons ------------ */}

                        <div className='col-lg-11 text-center my-5'>
                            <div className='row justify-content-between'>
                                <Button title="אישור" icon={<FaCheck className='approvalIcon' />} ParentClass={"col-lg-5 me-3 text-start"} buttonClass={"formBtn_1 px-3 py-2"} />
                                <Button title="לְבַטֵל" ParentClass={"col-lg-5 ms-3 text-end"} buttonClass={"formBtn_2 px-3 py-2"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
