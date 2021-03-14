function addUser()
{
    username=document.getElementById("user_name").value;
    localStorage.setItem("user_name",username);
    window.location="kwitter_room.html";
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
 row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();