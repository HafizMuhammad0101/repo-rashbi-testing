import React, { useEffect, useState } from 'react'
import "./StudiesForm.css";
import { Label, Input, Button, Textarea } from "../index"
import { FIRREBASE_COLECTIONS } from '../../data/enums';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../../firebase/firebaseConfig';
import { v4 } from 'uuid';
import { ToastContainer } from 'react-toastify';
import { SuccessNotification, ErrorNotification } from "../notifications/Notification";
import { FieldValue, doc, updateDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';

export default function EditStudiesForm() {
    const ITEM = useSelector((state) => state.data);

    console.warn(ITEM);

    const [imageUpload, setImageUpload] = useState(ITEM?.coverImage || '');
    const [pdfUpload, setPdfUpload] = useState(ITEM?.pdfLink || '');
    const [title, setTitle] = React.useState(ITEM.name);
    const [date, setDate] = React.useState(ITEM.date);
    const [contentType, setContentType] = React.useState(ITEM.contentType);
    const [text, setText] = React.useState(ITEM.studyContent);
    const [loader, setLoader] = React.useState(false);

    const uploadImage = async (image) => {
        const imageRef = ref(storage, `daily-studies/${image.name + " " + v4()}`);
        try {
            await uploadBytes(imageRef, image);
            const downloadURL = await getDownloadURL(imageRef);
            return downloadURL;
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    const uploadPDF = async (pdf) => {
        try {
            if (pdfUpload == null) {
                return;
            } else {
                const PdfRef = ref(storage, `daily-studies/${pdf.name + v4()}`);
                await uploadBytes(PdfRef, pdf);
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

    const UpdateDailyStudies = async () => {
        try {
            setLoader(true);

            if (!title || !contentType || !date || !imageUpload) {
                ErrorNotification("Please fill all the required fields.");
            } else {
                const dataToUpdate = {
                    name: title,
                    contentType: contentType,
                    date: date,
                };

                if (contentType === "TEXT") {
                    if (!text) {
                        ErrorNotification("Please fill all the required fields.");
                        return;
                    }

                    dataToUpdate.studyContent = text;
                    delete dataToUpdate.pdfLink;
                }
                else if (contentType === "PDF") {
                    if (!pdfUpload) {
                        ErrorNotification("Please fill all the required fields.");
                        return;
                    }
                    else {
                        let pdfUrl = pdfUpload;

                        if (pdfUpload?.name) {
                            pdfUrl = await uploadPDF(pdfUpload);
                        }

                        if (pdfUrl) {
                            dataToUpdate.pdfLink = pdfUrl;
                        }
                        delete dataToUpdate.studyContent;
                    }
                }

                let imageUrl = imageUpload

                if (imageUpload?.name) {
                    imageUrl = await uploadImage(imageUpload)
                }

                if (imageUrl) {
                    dataToUpdate.coverImage = imageUrl;
                }

                const docRef = doc(db, FIRREBASE_COLECTIONS?.DAILY_STUDIES, ITEM?.id);

                updateDoc(docRef, dataToUpdate).then(() => {
                    SuccessNotification("Data Updated Successfully!");
                }).catch((e) => {
                    ErrorNotification("Failed to update data.");
                    console.log("err" + e);
                })
            }
        } catch (e) {
            console.error("Error updating document:", e);
            ErrorNotification("An error occurred while updating data.");
        } finally {
            setLoader(false);
        }
    };

    const formateImageName = (image) => {
        if (!imageUpload)
            return "Upload Image"

        if (image?.name) {
            return image?.name

        } else {
            const urlParts = image?.split("/");
            const lastPart = urlParts[urlParts.length - 1];
            const decodedImageName = decodeURIComponent(lastPart);
            return decodedImageName;
        }
    }
    const formatePdfName = (pdf) => {
        if (!pdfUpload)
            return "Upload PDF"

        if (pdf?.name) {
            return pdf?.name

        } else {
            const urlParts = pdf?.split("/");
            const lastPart = urlParts[urlParts.length - 1];
            const decodedPdfName = decodeURIComponent(lastPart);
            return decodedPdfName;
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
                                    <Input type="date" placeholder="בחר תאריך" inputClass={"text-end datePicker p-2 mx-2 w-100"} id={"myDate"} onChange={(e) => { setDate(e.target.value) }} value={date} />
                                    <p className='custom-date-input'></p>
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
                            <Textarea rows={5} parentalClass={"col-lg-9 mt-3"} textareaClass={"textArea p-2"} onChange={(e) => setText(e.target.value)} value={text} />
                            <Label title=":תוכן לימוד" parentalClass={"col-lg-1 mt-3 text-end"} labelClass={"txtAreaLabel"} style={{ width: "16.5%" }} />
                        </div>
                    }
                    <div className='row justify-content-end mt-2 px-3 bgCardImg'>
                        <Input parentalClass={"col-lg-3"} inputClass={"txt w-100 p-2"} type={"text"} onChange={(e) => setTitle(e.target.value)} value={title} />
                        <Label title=": כותרת" parentalClass={"text-end"} labelClass={"txtAreaLabel"} style={{ width: "16.5%" }} />
                        {
                            contentType === "PDF" &&
                            <div className='col-lg-12 mt-2'>
                                <div className='row justify-content-end'>
                                    <div className='col-lg-3'>
                                        <Label htmlFor="fileInput" labelClass={"fileName w-100 p-5 fwt-600"} title={`${formatePdfName(pdfUpload)}`} />
                                        <Input type="file" accept="application/pdf" id="fileInput" name="fileInput" style={{ display: "none" }} onChange={(e) => setPdfUpload(e.target.files[0])} />
                                    </div>
                                    <Label title=":הוסף כיסוי" parentalClass={"text-end"} labelClass={"txtAreaLabel"} style={{ width: "16.5%" }} />
                                </div>
                            </div>
                        }

                        <div className='col-lg-12 mt-2'>
                            <div className='row justify-content-end'>
                                <div className='col-lg-3'>
                                    <Label htmlFor="coverImage" labelClass={"fileName w-100 p-5 fwt-600"} title={`${formateImageName(imageUpload)}`} />
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
                                    !loader && (contentType === "PDF" ? <Button title="Update Data" ParentClass={"col-lg-5"} buttonClass={"formBtn px-3 py-2"} onClick={UpdateDailyStudies} /> : <Button title="Update Data" ParentClass={"col-lg-5"} buttonClass={"formBtn px-3 py-2"} onClick={UpdateDailyStudies} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
