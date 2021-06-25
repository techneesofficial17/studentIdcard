// selecting the dom elements

const form = document.querySelector('form');
const studentName = document.querySelector('#name');
const studentGrade = document.querySelector('#class');
const studentAddress = document.querySelector('#address');
const studentContact = document.querySelector('#contact');
const studentParents = document.querySelector('#parentsName');
const studentEmail = document.querySelector('#email');
const studentDOB = document.querySelector('#dob');
const studentBG = document.querySelector('#blood');
const inputedImage = document.querySelector('#image');
const submitBtn = document.querySelector('#submit');

const spanname = document.querySelector('#spanname');
const spangrade = document.querySelector('#spangrade');
const spanbgroup = document.querySelector('#sbloodgroup');
const spanaddress = document.querySelector('#spanaddress');
const spanparentsname = document.querySelector('#spanparentsname');
const spanemail = document.querySelector('#spanemail');
const spandob = document.querySelector('#spandob');
const spancontact = document.querySelector('#spancontact');
const cardImage = document.querySelector('#card-image');

// dealing with the DOM elements

inputedImage.addEventListener('change', function() {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
        localStorage.setItem('imageURL', reader.result);
    });

    reader.readAsDataURL(this.files[0]);
});

form.addEventListener('submit', e => {
    e.preventDefault();
    spanname.textContent = studentName.value;
    spangrade.textContent = studentGrade.value;
    spanbgroup.textContent = studentBG.value;
    spanaddress.textContent = studentAddress.value;
    spanparentsname.textContent = studentParents.value;
    spanemail.textContent = studentEmail.value;
    spandob.textContent = studentDOB.value;
    spancontact.textContent = studentContact.value;
    let setIMGurl = localStorage.getItem('imageURL');
    cardImage.setAttribute('src', setIMGurl);

    studentAddress.value = '';
    studentName.value = '';
    studentBG.value = '';
    studentContact.value = '';
    studentDOB.value = '';
    studentEmail.value = '';
    studentParents.value = '';
    inputedImage.value = '';
    studentGrade.value = '';
    localStorage.removeItem('imageURL');
});

// Dealing with the downloading

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', () => {
        domtoimage
            .toPng(document.getElementById('mainBox'))
            .then(function(dataUrl) {
                var image = new Image();
                image.src = dataUrl;
            });
        domtoimage.toBlob(document.getElementById('mainBox')).then(blob => {
            window.saveAs(blob, 'output.png');
        });
    });
});