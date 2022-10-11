import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCh9IUdN4Y66KewSbgyETZoMICHjKANvgw",
  authDomain: "blog-interlinkfbc.firebaseapp.com",
  projectId: "blog-interlinkfbc",
  storageBucket: "blog-interlinkfbc.appspot.com",
  messagingSenderId: "760124531343",
  appId: "1:760124531343:web:eccd752479c6b1ac0b86fa",
  measurementId: "G-Q55MHQWGT2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const getPosts = () => getDocs(collection(db, "blogs"));

export const getPost = async () => {
  const docRef = doc(db, "blogs", sessionStorage.getItem("id"));
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};
