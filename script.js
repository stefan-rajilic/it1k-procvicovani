function subscribeToNews() {

    const usersEnteredEmail = document.getElementById("userEmail").value

    console.log("Your email is: " + usersEnteredEmail);

    document.getElementById("emailOutput").innerHTML = usersEnteredEmail
    document.getElementById("output").value = usersEnteredEmail
}

function newContent() {
    document.open();
    document.write("<h1>Out with the old, in with the new!</h1> <p>Ahoj</p>");
    document.close();
}