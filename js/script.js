function logout(button){
    if (button.innerHTML === 'Login') {
        button.innerHTML = 'Logout';
    } else {
        button.innerHTML = 'Login';
    }
}

function removeButton(button) {
    button.parentNode.removeChild(button); 
}

function likeButton(button) {
    alert("Ninja was liked");
}