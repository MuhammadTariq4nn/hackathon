
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
  import {  getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut} 
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyARo-H0shvimYqTI5IcVnVtWMrj3aExoiA",
    authDomain: "hackathon-c90d7.firebaseapp.com",
    projectId: "hackathon-c90d7",
    storageBucket: "hackathon-c90d7.appspot.com",
    messagingSenderId: "1029992778793",
    appId: "1:1029992778793:web:81c8c28ac6dbfc9c5ae038",
    measurementId: "G-LEXE9TR3LV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
    
  // signUp  
  var SignUpForm=document.querySelector('.SignUpForm');
SignUpForm.addEventListener("click",function(){
    Swal.fire({
        title: "Welcome to Pinterest",
        html: `Find new ideas to try
              <div class="sweetMain">
              <label for="">Email</label><br>
              <input type="email" name="" id="signUpEmail" placeholder="Email"><br>
              <p class="errMsg" id="emailErr"></p>
              <label for="" >Password</label><br>
              <input type="password" name="" id="signUpPass" placeholder="Create Password">
              <p class="errMsg" id="passErr"></p>
              <label for="" >Birthdate</label><br>
              <input type="date" name="" id="">
              <a href=""><p class="forgotPass">Forgot Your Password</p></a>
              <button id="signUp">Sign up</button>
              <p class="or">OR</p>
              <button class="google"><img src="google.png" alt="">Continue With Google</button>
              </div>          
        `,
      });
      var signUp=document.querySelector('#signUp');
      signUp.addEventListener("click",function(){
        var signUpEmail=document.querySelector('#signUpEmail').value;
        var signUpPass=document.querySelector('#signUpPass').value;
        var emailErr= document.querySelector('#emailErr');
        var passErr= document.querySelector('#passErr');
        if(signUpEmail===""){
          emailErr.innerHTML="Please Enter an Email"
        }
        if(signUpPass===""){
          // alert('Please enter your Password')
        }
        else{
        createUserWithEmailAndPassword(auth, signUpEmail, signUpPass)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          window.location.href="../welcome.html";
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert("Invalid email or password")
          // ..
        })};
      })
      //google signin
      var google=document.querySelector('.google');
      google.addEventListener("click",function(){
        signInWithPopup(auth, provider)
        .then((result) => {
         const credential = GoogleAuthProvider.credentialFromResult(result);
         const user = result.user;
         window.location.href="../welcome.html";
        
       }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
       });
      })

    event.preventDefault();
  });



   // logIn
   var logInForm=document.querySelector('.logInForm');
   //console.log(lgnBtn);
   logInForm.addEventListener("click",function(){
       
           Swal.fire({
           title: "Welcome to Pinterest",
           html: `
                 <div class="sweetMain">
                 <label for="">Email</label><br>
                 <input type="email" name="" id="logInEmail" placeholder="Email"><br>
                 <label for="" >Password</label><br>
                 <input type="password" name="" id="logInPass" placeholder="Password">
                 <a href=""><p class="forgotPass">Forgot Your Password</p></a>
                 <button id="logIn">Login</button>
                 <p class="or">OR</p>
                 <button class="google"><img src="google.png" alt="">Continue With Google</button>
                 </div>        
           `,
         });
        var logIn=document.querySelector('#logIn');
        logIn.addEventListener("click",function(){
        var logInEmail=document.querySelector('#logInEmail').value;
        var logInPass=document.querySelector('#logInPass').value;
        signInWithEmailAndPassword(auth, logInEmail, logInPass)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          window.location.href="../welcome.html";
          // alert("logIn succesfully")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode,errorMessage)
          // ..
        });
      })
      
      //google signin
      var google=document.querySelector('.google');
      google.addEventListener("click",function(){
      signInWithPopup(auth, provider)
      .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      window.location.href="../welcome.html";
     
    }).catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
    });
   })

       event.preventDefault();
   })

  //  signout