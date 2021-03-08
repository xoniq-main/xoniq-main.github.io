let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-logo.png') {
        myImage.setAttribute('src','images/firefox-logo-nightly.png');
        myImage.setAttribute('title', 'firefox-logo-nightly');
    } else {
        myImage.setAttribute('src','images/firefox-logo.png');
        myImage.setAttribute('title', 'firefox-logo');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUsername() {
    let myName = prompt('Please enter your name.');
    if (myName !== null) {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

myButton.onclick = function() {
    setUsername();
}
