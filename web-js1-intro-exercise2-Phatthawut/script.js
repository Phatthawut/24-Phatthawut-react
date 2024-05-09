function ChangeName(){
    let changeText = prompt("type your word");
    console.log("The button has been clicked");
    document.getElementById("inputName").textContent = changeText;
    return alert("Hello World");
}