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
function addRoom()
{
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
}
function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="kwitter.html";
}