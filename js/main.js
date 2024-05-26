// Set a cookie to remember the client
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Get a cookie by name
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Check if a cookie exists and show a welcome message
$(document).ready(function() {
    if (!getCookie('visited')) {
        alert("Welcome to my personal website!");
        setCookie('visited', 'true', 7);
    }
    
    // Example of using Lodash
    console.log(_.join(['Hello', 'from', 'Lodash'], ' '));
    
    // Example of integrating with a public Web API
    $.get("https://api.github.com/users/octocat", function(data) {
        console.log("GitHub User:", data);
    });

    // Another example of a public Web API
    $.get("https://dog.ceo/api/breeds/image/random", function(data) {
        $('body').append('<img src="' + data.message + '" alt="Random Dog Image" class="mt-4 mx-auto block" />');
    });
});
