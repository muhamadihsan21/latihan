// 1
const failLogin = () => console.log("username dan password salah")

const successLogin = () => {
    console.log("username benar");
    location.href = "loginSukses.html";
};

const login = () => {
    const username = document.getElementById("nama").value;
    const pass = document.getElementById("password").value;
    console.log(username);
    console.log(pass);
    if(username === 'ahmad2017' && pass === 'integrity'){
        successLogin();
    } else {
        failLogin()
    }
}



// 4
const cetakGambar = () => {
    const dropdown = document.getElementById("dropdown");
    const image = document.getElementById('image');

    if(dropdown.value === 'anjing') {
        image.setAttribute('src', './src/img/IMG_3382.JPG');
        alert('ini foto aku');
    } else if (dropdown.value === 'babi') {
        image.setAttribute('src', './src/img/IMG_3384.JPG');
        alert('ini foto kedua aku');
    } else if (dropdown.value === 'bebek') {
        image.setAttribute('src', './src/img/IMG_3399.JPG');
        alert('ini foto ketiga aku');
    } else if (dropdown.value === 'tongkol') {
        image.setAttribute('src', './src/img/IMG_3444.JPG');
        alert('ini foto keempat aku');
    } else if (dropdown.value === 'tokek') {
        image.setAttribute('src', './src/img/IMG_3451.JPG');
        alert('ini foto kelima aku');
    } else if (dropdown.value === 'panda') {
        image.setAttribute('src', './src/img/IMG_3466.JPG');
        alert('ini foto keenam aku');
    }
}








