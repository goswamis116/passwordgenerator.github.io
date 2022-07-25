
var x=prompt("Enter the number of password length you want from 7 to 16: ","0");
var plength=parseInt(x);
var password=document.getElementById("password");


 function genPassword() {
    var chars1 = "abcdefghijkmnpqrstuvwxyz";
    var chars2="ABCDEFGHJKLMNPQRSTUVWXYZ";
    var nums="123456789";
    var chars="@$*&%#"
    //var passwordLength = 7;
    var password1 = "";
    var password2 = "";
    var password3 = "";
    var password4="";


 for (var i = 0; i <(plength-6); i++) {
   var randomNumber = Math.floor(Math.random() * chars1.length);
   password1 =password1 + chars1.substring(randomNumber, randomNumber +1);
  }
  for (var i = 0; i <= 1; i++) {
    var randomNumber = Math.floor(Math.random() * chars2.length);
    password2 =password2 + chars2.substring(randomNumber, randomNumber +1);
   }
   for (var i = 0; i <= 1; i++) {
     var randomNumber = Math.floor(Math.random() * nums.length);
     password4 =password4 + nums.substring(randomNumber, randomNumber +1);
    }
    for (var i = 0; i <= 1; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password3 =password3 + chars.substring(randomNumber, randomNumber +1);
     }

var password=password2+password1+password3+password4;
        document.getElementById("password").value = password;

 }

function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");
}
