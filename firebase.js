import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";

const firebaseConfig = {
  //apiKey: "AIzaSyCqEv7rvJrGmBFrHOcjmmZ6dtXeoIE4Vjw",
  //authDomain: "interlink-fbc---blog.firebaseapp.com",
  //projectId: "interlink-fbc---blog",
  //storageBucket: "interlink-fbc---blog.appspot.com",
  //messagingSenderId: "474665747667",
  //appId: "1:474665747667:web:1ce1969dc94161a8c30026",
  //measurementId: "G-C2774ZZ392",
  apiKey: "AIzaSyCh9IUdN4Y66KewSbgyETZoMICHjKANvgw",
  authDomain: "blog-interlinkfbc.firebaseapp.com",
  projectId: "blog-interlinkfbc",
  storageBucket: "blog-interlinkfbc.appspot.com",
  messagingSenderId: "760124531343",
  appId: "1:760124531343:web:eccd752479c6b1ac0b86fa",
  measurementId: "G-Q55MHQWGT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const getPosts = () => getDocs(collection(db, "blogs"));

export const getPost = () => {
  const unSub = onSnapshot(
    doc(db, "blogs", sessionStorage.getItem("id")),
    (doc) => {
      console.log(doc.data());
    }
  );
  return unSub;
};

export const updatePost = async (dataComment) => {
  const washingtonRef = doc(db, "blogs", sessionStorage.getItem("id"));
  const showMessage = document.getElementById("success");
  try {
    document.getElementById("fullname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comment").value = "";
    // Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef, { comments: arrayUnion(dataComment) });

    showMessage.classList.remove("d-none");
    setTimeout(() => {
      showMessage.classList.add("d-none");
    }, 3000);
  } catch (err) {
    console.log(err);
  }
};

export { doc, collection, onSnapshot, db };
