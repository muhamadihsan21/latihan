// 1
const failLogin = () => console.log("username dan password salah")

const successLogin = () => {
    console.log("username benar");
    // location.href = "loginSukses.html";
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

// 2

function hitung(){
    let bil = document.getElementById("bil");
    let valas = document.getElementById("valas");
    

    if(valas.value === 'Dollar US') {
        const dolus = 9915;
        console.log(bil.value * dolus);

        document.getElementById("bilrp").value = bil.value * dolus ;
    }
    else if (valas.value === "Dollar Singapore") {
        const dolsing = 13472;
        console.log(bil.value * dolsing);
        
        document.getElementById("bilrp").value = bil.value * dolsing ;
    }
    else if (valas.value === "Ringgit Malaysia") {
        const ringmay = 874;
        console.log(bil.value * ringmay);
        
        document.getElementById("bilrp").value = bil.value * ringmay ;
    }
    else if (valas.value === "Yen Jepan") {
        const yen = 120;
        console.log(bil.value * yen);
        
        document.getElementById("bilrp").value = bil.value * yen ;
    }
    else if (valas.value === "Euro") {
        const euro = 15888;
        console.log(bil.value * euro);
        
        document.getElementById("bilrp").value = bil.value * euro ;
    }
    else if (valas.value === "Riyal Arab Saudi") {
        const riyal = 3592;
        console.log(bil.value * riyal);
        
        document.getElementById("bilrp").value = bil.value * riyal ;
    }
}


// 3

let form = document.getElementById("chatForm1");
let terima = document.getElementById("pesan1");
let jawab = document.getElementById("pesanS1");
let chattt = terima.value;

function handleForm(event) {
    event.preventDefault();
}

form.addEventListener("submit", handleForm);
function kirimPesan() {
    jawab.innerHTML += terima.value + "<br>";
    scrollToBottom("pesanS1");
    form.reset();
}
function scrollToBottom(id) {
    let div = document.getElementById(id);
    div.scrollTop = div.scrollHeight - div.clientHeight;
}


// 4
const cetakGambar = () => {
    const dropdown = document.getElementById("dropdown");
    const image = document.getElementById('image');
}
    if(dropdown.value === 'gorilla') {
        image.setAttribute("src" , "img/gorilla.png");
        alert('ini foto aku');
    } else if (dropdown.value === 'ayam') {
        image.setAttribute("src" , "img/ayam.jpg");
        alert('ini foto kedua aku');
    } else if (dropdown.value === 'bebek') {
        image.setAttribute('src', 'img/bebek.jpg');
        alert('ini foto ketiga aku');
    } else if (dropdown.value === 'kucing') {
        image.setAttribute('src', 'img/kucing.jpg');
        alert('ini foto keempat aku');
    } else if (dropdown.value === 'singa') {
        image.setAttribute('src', 'img/singa.jpg');
        alert('ini foto kelima aku');
    // }
    // } else if (dropdown.value === 'panda') {
    //     image.setAttribute('src', './src/img/IMG_3466.JPG');
    //     alert('ini foto keenam aku');
    // }
}








