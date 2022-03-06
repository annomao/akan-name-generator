//get form and use submit event to run the akan name function
let formSubmit = document.getElementById("form-id");
 
formSubmit.addEventListener('submit', displayName);
formSubmit.addEventListener('submit', handleForm);

//prevents form from submitting hence prevents form refresh
function handleForm(event) {
  event.preventDefault(); 
 }

function displayName(){
  message = getAkanName();
  results = document.getElementById("results");
  results.textContent = message;
}

function getAkanName(){
//capture form input values

  let fullName = document.getElementById("full-name").value;
  let gender = document.getElementById("gender").value;
  let birthDate = document.getElementById("birth-date").value;
  
//to note: javascript stores days in a list like array where sunday is equal to index 0
//days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday", "Saturday"];
//akan names stored in lists the names are stored in index corresponding to the days list

  const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi","Kwame"];
  const femaleNames = ["Akosua" ,"Adwoa","Abenaa",,"Akua","Yaa","Afua", "Ama"];

/* splits date input use the arguments to create a javascript date object
where the get day method returns a number that represents day of the week.
refer to above comments */
  let birthDay = birthDate.split("-")
  const birthday = new Date(birthDay[1],birthDay[2],birthDay[0]);
  const day1 = birthday.getDay();

  if (gender === "female") {
    return `Hey ${fullName}, your Akan name is ${femaleNames[day1]}`;
  }
  else{
    return `Hey ${fullName}, your Akan name is ${maleNames[day1]}`;
  }
}

/*     results = document.getElementById("results");
    results.textContent = message;*/

