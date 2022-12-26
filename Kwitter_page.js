const firebaseConfig = {
    apiKey: "AIzaSyA7vw338YGre7kzuNGGQb0IvpQrwKPx_8I",
    authDomain: "kwitter-project-168f1.firebaseapp.com",
    projectId: "kwitter-project-168f1",
    storageBucket: "kwitter-project-168f1.appspot.com",
    messagingSenderId: "820925689716",
    appId: "1:820925689716:web:70bf6bb3aec8ec2d9a4621",
    measurementId: "G-Z5V25STSF6"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  username=localStorage.getItem("UserName");
document.getElementById("UserName").innerHTML="Welcome "+ username +" !";
