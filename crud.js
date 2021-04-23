
const firebaseConfig = {
    apiKey: "AIzaSyCOgi6QGygWPc9_ZZdkfhCsuYfGRpQuQfI",
    authDomain: "web-technologies-6a4a8.firebaseapp.com",
    databaseURL: "https://web-technologies-6a4a8-default-rtdb.firebaseio.com",
    projectId: "web-technologies-6a4a8",
    storageBucket: "web-technologies-6a4a8.appspot.com",
    messagingSenderId: "28634211743",
    appId: "1:28634211743:web:532750d97b3ac7f955c9aa",
    measurementId: "G-L6KN6EKLM9"
  };

  firebase.initializeApp(firebaseConfig)
  var dbRef=firebase.database().ref().child("users")
  function createUser(){
      console.log("Create User");
      let uname=document.getElementById('uname').value;
      let email=document.getElementById('email').value;
      let age=document.getElementById('age').value;
      dbRef.child(uname).set({
          uname:uname,
          email:email,
          age:age
      })
      console.log("User Created Successfully");
  }
  function deleteUser(){
    console.log("Delete User");
    let username=window.prompt("Enter the name of the user to be deleted");
    dbRef.child(username).remove();
    console.log(username+" removed");
    dbRef.child(email).remove();
    console.log(email+" removed");
    console.log("User deleted Successfully");
}

function updateUser(){
    console.log("Update");
    let uname=window.prompt("Enter the username to update");
    let age=window.prompt("Enter the age to update");
    let email=window.prompt("Enter the email to update");
    dbRef.child(uname).update({
        uname:uname,
        age:age,
        email:email
    })
    console.log("User updated successfully");
}
function displayUser()
      {
          console.log("User Details");
          table=document.createElement("TABLE");
          table.border="2";
            dbRef.on('child_added',(snap)=>{
                console.log(snap.key)
                row=table.insertRow(-1)
                cell1=row.insertCell(-1)
                cell2=row.insertCell(-1)
                cell3=row.insertCell(-1)

                cell1.innerHTML=snap.val().uname;
                
                cell2.innerHTML=snap.val().email;
               
                cell3.innerHTML=snap.val().age;
            })
            users=document.getElementById("usersList");
            users.appendChild(table)
        }
    


  
