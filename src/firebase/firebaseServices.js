import { db } from "./firebaseConfig";
import { collection, addDoc, Timestamp } from 'firebase/firestore'

export const addDocument = async (collectionName, data) => {
    try {
        const formattedData = {
            ...data,
            createdAt: Timestamp.now(),
        }
        await addDoc(collection(db, collectionName), formattedData)

    } catch (err) {
        alert(err)
    }
}






















// ====================================




// const [Image, setImage] = React.useState('');
// // const [CoverImage, getCoverImage] = React.useState(null);

// const [date, setDate] = React.useState('');
// const [text, setText] = React.useState("");


// const handleContentType = (e) => {

//     if (e.target.value === "PDF העלה כקובץ") {
//         setContentType("PDF");
//     } else {
//         setContentType("TEXT");
//     }
// }
// //Check If PDF upload or not
// const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];

//     if (selectedFile) {
//         setFileName('Selected File: ' + selectedFile.name);
//     } else {
//         setFileName('');
//     }
// };

// const handleImage = (e) => {
//     const image = e.target.files[0];
//     if (image) {
//         setImage(image);
//     } else {
//         setImage('');
//     }
// };


// const addDailyStudies = async () => {
//     if (!title || !contentType || !date) {
//         alert("please fill all the required fields.")
//     }
//     else {
//         const dataToSend = {
//             title: title,
//             contentType: contentType,
//             Date: date,
//         }
//         if (contentType === "TEXT" && text) {
//             dataToSend.TEXT = text;
//         }

//         await addDocument(FIRREBASE_COLECTIONS.DAILY_STUDIES, dataToSend)
//     }
// }