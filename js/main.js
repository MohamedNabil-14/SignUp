var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var logInButton = document.getElementById("logInButton");
var signUpLink = document.getElementById("signUpLink");
var logInSection = document.getElementById("logInSection");
var signUpSection = document.getElementById("signUpSection");
var welcomeSection = document.getElementById("welcomeSection");
var signUpNameInput = document.querySelector("#signUpSection #signUpNameInput");
var signUpMailInput = document.querySelector("#signUpSection #signUpMailInput");
var signUpPasswordInput = document.querySelector("#signUpSection #signUpPasswordInput");
var signUpButton = document.querySelector("#signUpSection #signUpButton");
var logInLink = document.querySelector("#signUpSection  #logInLink");
var logOutButton = document.querySelector(" #welcomeSection #logOutButton");
var welcomeUserP = document.querySelector(" #welcomeSection #welcomeUserP");
var emailAlert = document.getElementById("emailAlert");
var passwordAlert = document.getElementById("passwordAlert");
var IncorrectdAlert = document.getElementById("IncorrectdAlert");
var signUpCompleteAlert = document.getElementById("signUpCompleteAlert");
var registeredMailAlert = document.getElementById("registeredMailAlert");
var signUpNameInvalidAlert  = document.getElementById("signUpNameInvalidAlert");
var signUpEmailInvalidAlert = document.getElementById('signUpEmailInvalidAlert');
var signUpPasswordInvalidAlert = document.getElementById("signUpPasswordInvalidAlert");
var signUpFailedAlert= document.getElementById("signUpFailedAlert");
var signInEmailInvalidAlert = document.getElementById("signInEmailInvalidAlert");
var signInPasswordInvalidAlert = document.getElementById("signInPasswordInvalidAlert");
var showLogInPasswordIcon = document.getElementById("showLogInPasswordIcon");
var showSignUpPasswordIcon = document.getElementById("showSignUpPasswordIcon");
var userData;

if (JSON.parse(localStorage.getItem("userDataKey")) == null) {
  userData = [];
} else {
  userData = JSON.parse(localStorage.getItem("userDataKey"));
}

 


/***************************** start of validation ***************************************************/

signUpNameInput.addEventListener("blur",newNameValidation);

function newNameValidation(){

   signUpCompleteAlert.classList.replace("show","hide");
   signUpFailedAlert.classList.replace("show","hide");

    var regex = /^([a-z]+ ?[A-Z]+)$|^([A-Z]+ ?[a-z]+)$|^([a-z]+ ?[a-z]+)$|^([A-Z]+ ?[A-Z]+)$|^([A-Z]+[a-z]+ ?[A-Z]+[a-z]+)$|^([a-z]+[A-Z]+ ?[a-z]+[A-Z]+)$/;

    if(regex.test(signUpNameInput.value)==true){
        signUpNameInput.classList.add("is-valid")
        signUpNameInput.classList.remove("is-invalid")
        signUpNameInvalidAlert.classList.replace("show","hide")
        return true;

    }

    else{
        signUpNameInput.classList.remove("is-valid")
        signUpNameInput.classList.add("is-invalid")
        signUpNameInvalidAlert.classList.replace("hide","show")
         return false;
    }
}

signUpMailInput.addEventListener("blur",newEmailValidation)

   function newEmailValidation (){
      signUpCompleteAlert.classList.replace("show","hide");
      signUpFailedAlert.classList.replace("show","hide");

      var hasala=``;
      var regex =/^[a-z0-9_]+@[a-z0-9]+\.[a-z]{2,15}$/;

   if(regex.test(signUpMailInput.value)==true){

      for(var i=0 ; i<userData.length;i++){
         
         if(signUpMailInput.value==userData[i].signUpMailValue){
         
               hasala+=`false`;
         }

      }
      
      if(hasala.includes(`false`)){
               signUpMailInput.classList.add("is-invalid");
               signUpMailInput.classList.remove("is-valid");
               registeredMailAlert.classList.replace("hide","show");
               signUpEmailInvalidAlert.classList.replace("show","hide");
               return false;
      }

      else{
               signUpMailInput.classList.remove("is-invalid");
               signUpMailInput.classList.add("is-valid");
               signUpEmailInvalidAlert.classList.replace("show","hide");
               registeredMailAlert.classList.replace("show","hide");
               return true;
      }


   }
   else{
      signUpMailInput.classList.add("is-invalid");
      signUpMailInput.classList.remove("is-valid");
      signUpEmailInvalidAlert.classList.replace("hide","show");

   }
   }

signUpPasswordInput.addEventListener("blur",newPasswordvalidation)

function newPasswordvalidation(){

   signUpCompleteAlert.classList.replace("show","hide");
   signUpFailedAlert.classList.replace("show","hide");


    var regex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
if(regex.test(signUpPasswordInput.value)==true){
    signUpPasswordInput.classList.add("is-valid");
    signUpPasswordInput.classList.remove("is-invalid");
    signUpPasswordInvalidAlert.classList.replace("show","hide");
   return true;
  }
else
signUpPasswordInvalidAlert.classList.replace("hide","show");
signUpPasswordInput.classList.remove("is-valid");
signUpPasswordInput.classList.add("is-invalid");
return false;
}

emailInput.addEventListener("blur",logInEmailValidation)

function logInEmailValidation(){
 
   var regex =/^[a-z0-9_]+@[a-z0-9]+\.[a-z]{2,15}$/;
   IncorrectdAlert.classList.replace("show","hide")
   if(regex.test(emailInput.value)==true){
      emailInput.classList.add("is-valid");
      emailInput.classList.remove("is-invalid");
      signInEmailInvalidAlert.classList.replace("show","hide");
      return true;
   }

   else{
      emailInput.classList.remove("is-valid");
      emailInput.classList.add("is-invalid");
      signInEmailInvalidAlert.classList.replace("hide","show");
      return false;

   }




}

passwordInput.addEventListener("blur",logInPasswordValidation)

function logInPasswordValidation(){

   IncorrectdAlert.classList.replace("show","hide")

if (passwordInput.value==""){
   passwordInput.classList.remove("is-valid")
   passwordInput.classList.add("is-invalid")
   signInPasswordInvalidAlert.classList.replace("hide","show")
   return false;

}

else {
   passwordInput.classList.add("is-valid");
   passwordInput.classList.remove("is-invalid");
   signInPasswordInvalidAlert.classList.replace("show","hide");
   return true;
}

}

/***************************** end of validation ***************************************************/





/***************************** start of user sign up and login ***************************************************/

signUpButton.addEventListener("click", userSignUp);

function userSignUp() {

if(newNameValidation()==true & newEmailValidation()==true & newPasswordvalidation()==true){
    

  var signUpData = {
    signUpNameValue: signUpNameInput.value,
    signUpMailValue: signUpMailInput.value,
    signUpPasswordValue: signUpPasswordInput.value,
  };

  userData.push(signUpData);
localStorage.setItem("userDataKey", JSON.stringify(userData));

clearInputs();
clearValidations();

signUpCompleteAlert.classList.replace("hide","show");
signUpFailedAlert.classList.replace("show","hide");

}

else{
    signUpFailedAlert.classList.replace("hide","show");
    signUpCompleteAlert.classList.replace("show","hide");

}




}


logInButton.addEventListener("click",userLogIn);

function userLogIn()
{
    var checkInputs;
    var userName;
   if(logInEmailValidation()==true & logInPasswordValidation()==true ){

      for(var i=0 ;i<userData.length;i++){
         
         if(emailInput.value==userData[i].signUpMailValue & passwordInput.value==userData[i].signUpPasswordValue )
         {
            checkInputs=true;
                userName=userData[i].signUpNameValue;
         }
   
      }
   
      if(checkInputs==true){
         logInSection.classList.replace("show","hide");
         welcomeSection.classList.replace("hide","show");
         welcomeUserP.innerHTML=`<p class="fa-3x  text-center mt-5  p-5 shadow-lg ">Welcome ${userName} </p>`
      
      }
         
      else{
         
         IncorrectdAlert.classList.replace("hide","show");
         passwordInput.value = "";
         
         }


}


    
   else{
      IncorrectdAlert.classList.replace("hide","show");
   }


}

/***************************** end of user sign up and login ***************************************************/





/***************************** start of pages links ***************************************************/

signUpLink.addEventListener("click",signUpNow);

function signUpNow (){

    logInSection.classList.replace("show","hide");
    signUpSection.classList.replace("hide","show");
    clearInputs();
    clearValidations();
    deleteAlerts();


    
}


logInLink.addEventListener("click",logInNow);

function logInNow()
{

    logInSection.classList.replace("hide","show");
    signUpSection.classList.replace("show","hide");

    clearInputs();
    clearValidations();
    deleteAlerts();
}


logOutButton.addEventListener("click",logOutNow);

function logOutNow()
{
    
    logInSection.classList.replace("hide","show");
    welcomeSection.classList.replace("show","hide");
    clearInputs();
    deleteAlerts();
    clearValidations();
}

/***************************** end of pages links ***************************************************/






/***************************** start of clearing functions ***************************************************/

function clearInputs() {
    emailInput.value = "";
    passwordInput.value = "";
    signUpNameInput.value = "";
    signUpMailInput.value = "";
    signUpPasswordInput.value = "";
}
function deleteAlerts(){

    signUpCompleteAlert.classList.replace("show","hide");
    signUpFailedAlert.classList.replace("show","hide");
    signUpNameInvalidAlert.classList.replace("show","hide")
    signUpEmailInvalidAlert.classList.replace("show","hide")
    signUpPasswordInvalidAlert.classList.replace("show","hide")
    signInEmailInvalidAlert.classList.replace("show","hide")
    signInPasswordInvalidAlert.classList.replace("show","hide")
    IncorrectdAlert.classList.replace("show","hide")

}
function clearValidations(){
    signUpNameInput.classList.remove("is-invalid")
    signUpNameInput.classList.remove("is-valid")
    signUpMailInput.classList.remove("is-valid")
    signUpMailInput.classList.remove("is-invalid")
    signUpPasswordInput.classList.remove("is-valid")
    signUpPasswordInput.classList.remove("is-invalid")
    emailInput.classList.remove("is-valid");
    emailInput.classList.remove("is-invalid");
    passwordInput.classList.remove("is-valid");
    passwordInput.classList.remove("is-invalid");

}
/***************************** end of clearing functions ***************************************************/





/***************************** start **** Show Password icons ***************************************************/

showLogInPasswordIcon.addEventListener("click",showLogInPassword);

function showLogInPassword(){

if(passwordInput.type==="password"){
   passwordInput.type="text";
}
else{
   passwordInput.type="password";
}
}


showSignUpPasswordIcon.addEventListener("click",showSignUpPassword);

function showSignUpPassword(){

if(signUpPasswordInput.type==="password"){
   signUpPasswordInput.type="text";
}
else{
   signUpPasswordInput.type="password";

}
}

/***************************** end **** Show Password icons ***************************************************/





/***************************** start **** keybord keys ***************************************************/

document.addEventListener("keyup",enterButtonOnKeybord);

function enterButtonOnKeybord(e){
   if(e.keyCode==13){
      userSignUp();
      userLogIn();
   }

}

/***************************** end **** keybord keys ***************************************************/

