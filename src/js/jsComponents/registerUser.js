const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const eyeIcon = document.getElementById('eye');
const eyeIcon2 = document.getElementById('eye2');
const password2 = document.getElementById('password2');
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
    const password2Value = password2.value.trim();
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
        setErrorFor(email, 'Correo invalido');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'El campo no puede estar en blanco');
    } else if (!isPassword(passwordValue)) {
        setErrorFor(password, 'La contraseña debe tener como mínimo 6 caracteres, una mayúscula, un número, una minúscula y un carácter especial');
    } else {
        setSuccessFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2, 'El campo no puede estar en blanco');
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Las contraseñas no coinciden');
    } else {
        setSuccessFor(password2, 'Las contraseñas coinciden');
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
    } else if (!isId(idnumValue)) {
        setErrorFor(idnum, 'Formato incorrecto');
    } else {
        setSuccessFor(idnum);
    }

    if (birthValue === '') {
        setErrorFor(birth, 'El campo no puede estar en blanco');
    } else if (!isAge(birthValue)) {
        setErrorFor(birth, 'Debes ser mayor de 18 años para registrarte');
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

function isId(idnum) {
    return /^.{8,12}$/.test(idnum);
}

eyeIcon.addEventListener('click', () => {
    password.type = password.type === "password" ? "text" : "password";
});

eyeIcon2.addEventListener('click', () => {
    password2.type = password2.type === "password" ? "text" : "password";
});

function isAge(birth) {
    // get current date
    let currentDate = new Date();
    // get input date
    let input = document.getElementById("birth").value;
    let birthdate = new Date(input);
    // return if age is over 18
    let diff = new Date(currentDate - birthdate)
    let age = Math.abs(diff.getUTCFullYear() - 1970);

    return age >= 18;
}