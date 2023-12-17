import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {  getAuth, signOut} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore,collection, addDoc, setDoc,doc, getDoc,updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyARo-H0shvimYqTI5IcVnVtWMrj3aExoiA",
    authDomain: "hackathon-c90d7.firebaseapp.com",
    projectId: "hackathon-c90d7",
    storageBucket: "hackathon-c90d7.appspot.com",
    messagingSenderId: "1029992778793",
    appId: "1:1029992778793:web:81c8c28ac6dbfc9c5ae038",
    measurementId: "G-LEXE9TR3LV"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
//   const provider = new GoogleAuthProvider();

  var lOut=document.querySelector('.lOut');
  lOut.addEventListener("click",function(){
    
    signOut(auth).then(() => {
        console.log()
        window.location.href="../index.html";
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
  })
  let mane=document.querySelector('.name');
  let age=document.querySelector('.age');
  var addBtn=document.querySelector('.addBtn');
  addBtn.addEventListener('click', function (){
    
      addDoc(collection(db, "users"), {
      name: mane.value,
      age: age.value
    });
    alert("add succefully")
    // console.log("Document written with ID: ", docRef.id);
  });

 //custom
 let cstmBtn=document.querySelector('.cstmBtn');
 let id=document.querySelector('.id');
  cstmBtn.addEventListener('click', function (){
    
      doc(setDoc(db, "users",id.value), {
      name: mane.value,
      age: age.value,
      RollNo:id
    });
    alert("add succefully")
    // console.log("Document written with ID: ", docRef.id);
  });

  var readBtn=document.querySelector('.readBtn');
 async function getdocument(){
    const docRef = doc(db, "users", age.value);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      mane.value=docSnap.data().name;
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
}
readBtn.addEventListener('click',getdocument)

//update

var updateBtn=document.querySelector('.updateBtn');
updateBtn.addEventListener('click', function (){
  
    updateDoc(collection(db, "users",age.value), {
    name: mane.value,
    age: age.value
  });
  alert("add succefully")
  // console.log("Document written with ID: ", docRef.id);
});