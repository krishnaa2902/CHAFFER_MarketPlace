// form.js

// import { MongoClient } from 'mongodb';
// import { signupCollection } from './connect.js';
/*
function handleFormSubmit(e) {
  e.preventDefault(); // prevent the form from reloading the page

  var form = e.target;
  var email = form.elements.email.value;
  var password = form.elements.pass.value;
  var phone = form.elements.pno.value;
  var address = form.elements.addr.value;
  const MongoClient = require('mongodb').MongoClient;
  const uri = "mongodb+srv://root:pass@cluster0.ntw5f18.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const signupCollection = client.db("test").collection("signup");
    signupCollection.insertOne({
      email: email,
      password: password,
      phone: phone,
      address: address
    }, function(err, res) {
      console.log("Inserted a document into the signup collection");
    });
  });
}
*/


function signupval() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var pno = document.getElementById("pno").value;
    var addr = document.getElementById("addr").value;
  
    if (email == "") {
      alert("Please enter your email address");
      return false;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }

    if (pass == "") {
      alert("Please enter your password");
      return false;
    }
    if (pass.length < 8) {
      alert("Please enter a valid password (at least 8 characters)");
      return false;
    }

    if (pno == "") {
      alert("Please enter your phone number");
      return false;
    }
    if (pno.length != 10) {
      alert("Please enter a valid phone number (exactly 10 digits long)");
      return false;
    }

    if (!/^\d+$/.test(pno)) {
      alert("Please enter a valid phone number (only numeric input allowed)");
      return false;
    }

    if (addr == "") {
      alert("Please enter your address");
      return false;
    }
    handleFormSubmit(event);
    return true;
  }