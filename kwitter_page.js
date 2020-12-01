// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyD2RhaItWZRFEhBAw5lucJoWFsdvuRPNy4",
      authDomain: "letschat-homework.firebaseapp.com",
      databaseURL: "https://letschat-homework.firebaseio.com",
      projectId: "letschat-homework",
      storageBucket: "letschat-homework.appspot.com",
      messagingSenderId: "470034673344",
      appId: "1:470034673344:web:8cbdfa726fef270f20c725"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

//YOUR FIREBASE LINKS

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name")

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        
                        //End code
                  }
            });
      });
}
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}