
const userName = document.getElementById("userName")
const saveButton = document.getElementById("save-btn")
const clearButton = document.getElementById("clear-btn")
const headerName = document.querySelector('h1')
const displayName = document.getElementById('display-name')

const date = new Date();
const hour = date.getHours()

let greeting = ''

if (hour >= 5 && hour < 12) {
    greeting = "Good Morning"
} else if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon"
} else if (hour >= 17 && hour < 21) {
    greeting = "Good Evening"
} else {
    greeting = "Good Night"
}


saveButton.addEventListener("click", function(event){
    event.preventDefault();
    let userNameValue = userName.value.trim()
    if (!userNameValue){
        headerName.textContent = "Welcome, User!"
    }else {
        localStorage.setItem("userName", userNameValue)
        displayName.textContent = userNameValue;
        headerName.textContent = greeting + ", " + userNameValue;
    }
    
})

clearButton.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.clear();
    userName.value = ""
    displayName.textContent = "";
    headerName.textContent = "Welcome, User!";
})

window.onload = function(){
    let savedUserName = localStorage.getItem("userName")
    if (!savedUserName || savedUserName.trim() === "") {
        headerName.textContent = "Welcome, User!";;
    } else { 
        displayName.textContent = savedUserName;
        headerName.textContent = greeting + ", " + savedUserName;
    }

}
