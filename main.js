function myFunction() {
    var x = document.getElementById('myLinks');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}

function sendMail() {
    var link =
        'mailto:me@example.com' +
        '?cc=myCCaddress@example.com' +
        '&subject=' +
        encodeURIComponent(document.getElementsByClassName('subject').value) +
        '&body=' +
        encodeURIComponent(document.getElementById('message').value);
    window.location.href = link;
}
