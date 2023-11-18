import React from 'react'
import "./consultationForm.css";
import { Label, Input, Button, Textarea } from "../../index"
import { FaCheck } from "react-icons/fa6";

export default function ConsultationForm() {
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
        <div className='consultationContainer consultation_bg_form '>
            <div className='row align-items-center justify-content-center '>
                <div className='col-lg-10 my-2'>
                    <h3 className='mt-2 text-end fwt-600 poppins consultation_formHeading'>
                        לימודים יומיים
                    </h3>
                </div>
                <div className='col-lg-10 card consultationCard'>
                    <div className='row justify-content-end align-items-center px-3 mt-4'>
                        <div className='col-lg-3 text-end'>
                            <h3 className='mt-2 text-end consultation_formHeading'>
                                טופס קישור חברתי
                            </h3>
                        </div>
                    </div>

                    <div className='row justify-content-end consultation_bgCardImg'>
                        <div className='row justify-content-end'>
                            <Textarea rows={5} parentalClass={"col-lg-9 mt-3"} textareaClass={"textArea p-2"} />
                            <Label title=":תוכן לימוד" parentalClass={"col-lg-1 mt-3 text-end"} labelClass={"txtAreaLabel"} style={{ width: "15.5%" }} />
                        </div>

                        {/* ------------ Select field ------------ */}

                        <div className='row py-3'>
                            <div className='d-flex justify-content-end w-50'>
                                <Input parentalClass={"col-lg-6"} inputClass={"txt p-2"} type={"text"} placeholder='כתובת אתר' />  {/* URL */}
                                <Label title=":כמות:" parentalClass={"col-lg-6 text-end"} labelClass={"txtAreaLabel"} style={{ width: "15%" }} /> {/* AMOUNT */}
                            </div>
                            <div className='d-flex justify-content-end w-50'>
                                <div className='col-lg-6 text-end'>
                                    <select className='consultation_selectOptions py-2 pe-4 ps-2 w-100'>
                                        <option value="בחר">חינם</option>                           {/* FREE */}
                                        <option value="יוטיוב">שולם</option>                     {/* PAID */}
                                    </select>
                                </div>
                                <div className='col-lg-6 text-end' style={{ width: "33%" }}>
                                    <h4 className='consultation_formHeading'>: סוג קובץ:</h4>       {/* FILE TYPE */}
                                </div>
                            </div>
                        </div>

                        {/* ------------ Choose File ------------ */}

                        <div className='col-lg-12 mt-2'>
                            <div className='row justify-content-end'>
                                <div className='col-lg-4'>
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
