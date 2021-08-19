const submitButton = document.querySelector(".submit-button")
const formBody = document.querySelector("#form-body")
const nameIdentity = document.querySelector("#nameidentity")
const emailIdentity = document.querySelector("#emailidentity")
const displayOutput = () => {
  formBody.innerText = `Welcome!!! we recorded your name to be ${nameIdentity.value} and your email to be ${emailIdentity.value}`
}
submitButton.addEventListener("click", displayOutput)
