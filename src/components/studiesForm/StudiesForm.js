import React, { useState, createContext } from 'react'
import "./StudiesForm.css";
import { Label, Input, Button, Textarea, Dropdown } from "../index"
import { FIRREBASE_COLECTIONS } from '../../data/enums';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../firebase/firebaseConfig';
import { v4 } from 'uuid';
import { addDocument } from '../../firebase/firebaseServices';
import { ToastContainer } from 'react-toastify';
import { SuccessNotification, ErrorNotification } from "../notifications/Notification";

export default function StudiesForm() {
    const [imageUpload, setImageUpload] = useState(null);
    const [pdfUpload, setPdfUpload] = useState(null);
    const [title, setTitle] = React.useState("");
    const [type, setType] = React.useState("text");
    const [date, setDate] = React.useState();
    const [contentType, setContentType] = React.useState("PDF");
    const [text, setText] = React.useState("");
    const [loader, setLoader] = React.useState(false);


    const uploadImage = async () => {
        if (imageUpload == null) {
            return;
        } else {
            const imageRef = ref(storage, `daily-studies/${imageUpload.name + " " + v4()}`);
            try {
                await uploadBytes(imageRef, imageUpload);
                console.log("image uploaded successfully!");
                const downloadURL = await getDownloadURL(imageRef);
                return downloadURL;
            } catch (error) {
                console.error("Error uploading image:", error);
            }
        }
    };

    const uploadPDF = async () => {
        try {
            if (pdfUpload == null) {
                return;
            } else {
                const PdfRef = ref(storage, `daily-studies/${pdfUpload.name + v4()}`);
                await uploadBytes(PdfRef, pdfUpload);
                const downloadURL = await getDownloadURL(PdfRef);
                return downloadURL;
            }
        } catch (e) {
            console.error(e);
        }

    }

    const handleContentType = (e) => {
        if (e.target.value === "PDF העלה כקובץ") {
            setContentType("PDF")
        } else {
            setContentType("TEXT");
        }
    }

    const addDailyStudies = async () => {
        try {
            setLoader(true);

            if (contentType === "TEXT") {
                if (!text) {
                    ErrorNotification("Please fill all the required fields.")
                    return;
                }
            }

            if (contentType === "PDF") {
                if (!pdfUpload) {
                    ErrorNotification("Please fill all the required fields.")
                    return;
                }
            }

            if (!title || !contentType || !date || !imageUpload) {
                ErrorNotification("Please fill all the required fields.")
            }
            else {
                const dataToSend = {
                    name: title,
                    contentType: contentType,
                    date: date,
                }
                if (contentType === "TEXT") {
                    dataToSend.studyContent = text;
                }
                else if (contentType === "PDF") {
                    const pdfUrl = await uploadPDF();
                    dataToSend.pdfLink = pdfUrl;
                }

                const imageUrl = await uploadImage();
                if (imageUrl) {
                    dataToSend.coverImage = imageUrl;
                }
                await addDocument(FIRREBASE_COLECTIONS.DAILY_STUDIES, dataToSend);
                SuccessNotification("Data Submitted Successfully!")
            }
        }
        catch (e) {
            console.log(e);
        } finally {
            setLoader(false);
        }
    }

    return (
            <div className='selfContainer bg-form '>
                <ToastContainer
                    position="center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    theme="light"
                />
                <div className='row align-items-center justify-content-center '>
                    <div className='col-lg-10 my-2'>
                        <h3 className='mt-2 text-end fwt-600 poppins formHeading'>
                            לימודים יומיים
                        </h3>
                    </div>
                    <div className='col-lg-10 card studiesCard'>
                        <div className='row justify-content-between align-items-center px-3 mt-4'>
                            <div className='col-lg-5 '>
                                <div className='row justify-content-between'>
                                    <div className='col-lg-6'>
                                        <Input type={type} placeholder="בחר תאריך" inputClass={"text-end datePicker p-2 mx-2 w-100"} id={"myDate"} onClick={() => setType("date")} onChange={(e) => { setDate(e.target.value) }} />
                                        <p className='custom-date-input' onClick={() => setType("date")}></p>
                                    </div>
                                    <Label title=":הוסף עוד" parentalClass="col-lg-6" labelClass={"datePickerLabel fwt-700 mt-1"} />
                                </div>
                            </div>
                            <div className='col-lg-3 text-end'>
                                <h3 className='mt-2 text-end formHeading'>
                                    טופס לימודים יומיים
                                </h3>
                            </div>
                        </div>
                        <div className='row justify-content-end align-items-center px-3 mt-4'>
                            <div className='col-lg-3 '>
                                <select className='selectOptions py-2 pe-4 ps-2 w-100' onChange={handleContentType}>
                                    <option value="PDF העלה כקובץ">PDF העלה כקובץ</option>
                                    <option value="העלה כטקסט">העלה כטקסט</option>
                                </select>
                            </div>
                            <div className='col-lg-2 text-end'>
                                <h4 className='formHeading'>: אפשרויות העלאה</h4>
                            </div>
                        </div>
                        {
                            contentType !== "PDF" &&
                            <div className='row justify-content-end mt-4 px-3'>
                                <Textarea rows={5} parentalClass={"col-lg-9 mt-3"} textareaClass={"textArea p-2"} onChange={(e) => setText(e.target.value)} />
                                <Label title=":תוכן לימוד" parentalClass={"col-lg-1 mt-3 text-end"} labelClass={"txtAreaLabel"} style={{ width: "16.5%" }} />
                            </div>
                        }
                        <div className='row justify-content-end mt-2 px-3 bgCardImg'>
                            <Input parentalClass={"col-lg-3"} inputClass={"txt w-100 p-2"} type={"text"} onChange={(e) => setTitle(e.target.value)} />
                            <Label title=": כותרת" parentalClass={"text-end"} labelClass={"txtAreaLabel"} style={{ width: "16.5%" }} />
                            {
                                contentType === "PDF" &&
                                <div className='col-lg-12 mt-2'>
                                    <div className='row justify-content-end'>
                                        <div className='col-lg-3'>
                                            <Label htmlFor="fileInput" labelClass={"fileName w-100 p-5 fwt-600"} title={`${pdfUpload ? pdfUpload.name : "Upload PDF"}`} />
                                            <Input type="file" accept="application/pdf" id="fileInput" name="fileInput" style={{ display: "none" }} onChange={(e) => setPdfUpload(e.target.files[0])} />
                                        </div>
                                        <Label title=":הוסף כיסוי" parentalClass={"text-end"} labelClass={"txtAreaLabel"} style={{ width: "16.5%" }} />
                                    </div>
                                </div>
                            }

                            <div className='col-lg-12 mt-2'>
                                <div className='row justify-content-end'>
                                    <div className='col-lg-3'>
                                        <Label htmlFor="coverImage" labelClass={"fileName w-100 p-5 fwt-600"} title={`${imageUpload ? imageUpload.name : "Upload Image"}`} />
                                        <Input type="file" accept="image/png, image/gif, image/jpeg" id="coverImage" name="coverImage" style={{ display: "none" }} onChange={(e) => { setImageUpload(e.target.files[0]) }} />
                                    </div>
                                    <Label title=": בחר כריכה" parentalClass={"text-end"} labelClass={"txtAreaLabel"} style={{ width: "16.5%" }} />
                                </div>
                            </div>
                            < div className='col-lg-11 text-center my-5'>
                                <div className='row justify-content-center'>
                                    {
                                        loader && <div className='loader'></div>
                                    }
                                    {
                                        !loader && (contentType === "PDF" ? <Button title="PDF להעלות" ParentClass={"col-lg-5"} buttonClass={"formBtn px-3 py-2"} onClick={addDailyStudies} /> : <Button title="העלה קובץ" ParentClass={"col-lg-5"} buttonClass={"formBtn px-3 py-2"} onClick={addDailyStudies} />)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            )
}
