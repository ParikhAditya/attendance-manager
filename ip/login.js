function createRegister(){
  alert('register buton');
}

function redirectMain(){
  var usr = document.forms["login-form"]["usrnm"].value;
  var pw = document.forms["login-form"]["pwd"].value;
  if (usr == "admin" && pw == "1234"){
    window.open("index1.html","_self");
    /*window.location('file:///C:/Users/B1!tz.1-14xx012/Desktop/attendance/index.html');*/
  }
}

$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});
