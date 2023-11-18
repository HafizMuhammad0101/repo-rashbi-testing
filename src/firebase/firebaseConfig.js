import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC-8X51FEnqrekm1UmAhxcgDzGZN-nI_eI",
    authDomain: "hebrew-admin.firebaseapp.com",
    projectId: "hebrew-admin",
    storageBucket: "hebrew-admin.appspot.com",
    messagingSenderId: "858534274487",
    appId: "1:858534274487:web:54dd07d851b8ce60477432",
    measurementId: "G-RPFBW2P8G9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const storage = getStorage(app);

export { db, storage };
