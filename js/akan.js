function getAkanName(){
  let fullName = document.getElementById("full-name").value;
  let gender = document.getElementById("gender").value;
  let birthDate = document.getElementById("birth-date").value;



  /*let bDate = typeof birthDate
  alert(`${bDate}`)*/
}
let formSubmit = document.getElementById("form-id")
formSubmit.addEventListener('submit', getAkanName)



