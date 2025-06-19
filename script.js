
const form = document.getElementById("registerForm")
const userName = document.getElementById("userName")
const saveButton = document.getElementById("save-btn")
const clearButton = document.getElementById("clear-btn")

saveButton.addEventListener("click", function(event){
    event.preventDefault();
    let userNameValue = userName.value
    localStorage.setItem("userName", userNameValue)
    document.getElementById("display-name").textContent = userNameValue;

})

clearButton.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.clear();
    document.getElementById("display-name").textContent = "";
})

window.onload = function(){
    let savedUserName = localStorage.getItem("userName")
    document.getElementById("display-name").textContent = savedUserName;
}