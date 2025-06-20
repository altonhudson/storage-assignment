
const form = document.getElementById("registerForm")
const userName = document.getElementById("userName")
const saveButton = document.getElementById("save-btn")
const clearButton = document.getElementById("clear-btn")

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
    if (userNameValue === ""){
        document.querySelector('h1').textContent = "Welcome, User!"
    }else {
        localStorage.setItem("userName", userNameValue)
        document.getElementById("display-name").textContent = userNameValue;
        document.querySelector('h1').textContent = greeting + ", " + userNameValue;
    }
    
})

clearButton.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.clear();
    userName.value = ""
    document.getElementById("display-name").textContent = "";
    document.querySelector('h1').textContent = "Welcome, User!";
})

window.onload = function(){
    let savedUserName = localStorage.getItem("userName")
    document.getElementById("display-name").textContent = savedUserName;
    if (!savedUserName || savedUserName.trim() === "") {
            document.querySelector('h1').textContent = "Welcome, User!";;
    } else { 
        document.querySelector('h1').textContent = greeting + ", " + savedUserName;
    }

}
