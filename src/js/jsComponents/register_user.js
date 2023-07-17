const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const eyeIcon = document.getElementById('eye');
const eyeIcon2 = document.getElementById('eye2');
const confpassword = document.getElementById('confpassword');
const genre = document.getElementById('genre');
const idty = document.getElementById('idty');
const idnum = document.getElementById('idnum');
const birth = document.getElementById('birth');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    const nameValue = fname.value.trim();
    const lnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confpasswordValue = confpassword.value.trim();
    const genreValue = genre.value.trim();
    const idtyValue = idty.value.trim();
    const idnumValue = idnum.value.trim();
    const birthValue = birth.value.trim();

    if (nameValue === '') {
        setErrorFor(fname, 'El campo no puede estar en blanco');
    } else {
        setSuccessFor(fname);
    }

    if (lnameValue === '') {
        setErrorFor(lastname, 'El campo no puede estar en blanco');
    } else {
        setSuccessFor(lastname);
    }

    if (emailValue === '') {
        setErrorFor(email, 'El campo no puede estar en blanco');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'E-mail inválido');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'El campo no puede estar en blanco');
    } else if (!isPassword(passwordValue)) {
        setErrorFor(password, 'Contraseña debe tener como mínimo 6 caracteres, una mayúscula, un número, una minúscula y un carácter especial');
    } else {
        setSuccessFor(password);
    }

    if (confpasswordValue === '') {
        setErrorFor(confpassword, 'El campo no puede estar en blanco');
    } else if (passwordValue !== confpasswordValue) {
        setErrorFor(confpassword, 'Las contraseñas no coinciden');
    } else {
        setSuccessFor(confpasswordValue);
    }

    if (genreValue === 'empty') {
        setErrorFor(genre, 'El campo no puede estar en blanco');
    } else {
        setSuccessFor(genre);
    }

    if (idtyValue === 'empty') {
        setErrorFor(idty, 'El campo no puede estar en blanco');
    } else {
        setSuccessFor(idty);
    }

    if (idnumValue === '') {
        setErrorFor(idnum, 'El campo no puede estar en blanco');
    } else {
        setSuccessFor(idnum);
    }

    if (birthValue === '') {
        setErrorFor(birth, 'El campo no puede estar en blanco');
    } else {
        setSuccessFor(birth);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function setErrorFor(select, message) {
    const formControl = select.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(select) {
    const formControl = select.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{6,100}$/.test(password);
}

eyeIcon.addEventListener('click', () => {
    password.type = password.type === "password" ? "text" : "password";
});

eyeIcon2.addEventListener('click', () => {
    confpassword.type = confpassword.type === "password" ? "text" : "password";
});