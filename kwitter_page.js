var firebaseConfig = {
    apiKey: "AIzaSyAy75vd_164c38zz0Z6BPDYwGy8cQ-6ek0",
    authDomain: "medichat-1-f74c2.firebaseapp.com",
    databaseURL: "https://medichat-1-f74c2.firebaseio.com",
    projectId: "medichat-1-f74c2",
    storageBucket: "medichat-1-f74c2.appspot.com",
    messagingSenderId: "519036709522",
    appId: "1:519036709522:web:2ffcb2ac7da20123d7944b",
    measurementId: "G-DBQ2GRP86Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push
      ({
                name:user_name,
                message:msg,
                like:0
       });
      document.getElementById("msg").value="";
}