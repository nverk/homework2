
 const a = (12*5)/10;
 const b = 8+65469;
  if (a+b <= 3) {
    console.log ('YES')
  }
  else {
    console.log ('Try again!')
} 
const userName = "Nver";
const password = "I love pizza";

var inputName = prompt("Enter your Username");
var inputPassword = prompt("Enter your Password");

if (userName === inputName && password === inputPassword) {
  var currentdate = new Date(); 
  var m ="Month:"+currentdate.getDate()
  var h = "Time:"+currentdate.getHours() + 'h'
  var t = currentdate.getHours()
  console.log (m)
  console.log(h)
}
  if (t < 10) {
     alert ("Welcome, Rise and shine");
   } else if (t>10 && t< 20) {
     alert ("Welcome, Excelent day!");
   } else {
     alert ("Welcome, Good evening");
   }
   else if (userName !== inputName && password !== inputPassword) {
           alert ("incorrect username and password")
  }
  else if (userName != inputName) {
  alert("Incorrect Username");
} else {
  alert("Incorrect Password");
}
