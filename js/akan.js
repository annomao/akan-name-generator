function getAkanName(){
  let fullName = document.getElementById("full-name").value;
  let gender = document.getElementById("gender").value;
  let birthDate = document.getElementById("birth-date").value;

  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday", "Saturday"]
  const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi","Kwame"]
  const femaleNames = ["Akosua" ,"Adwoa","Abenaa",,"Akua","Yaa","Afua", "Ama"]

  /*let bDate = typeof birthDate
  alert(`${bDate}`)*/
}
let formSubmit = document.getElementById("form-id")
formSubmit.addEventListener('submit', getAkanName)



