let form1 = document.querySelector('#form1')
let sub = document.querySelector('#sub')
let text = document.querySelector('#text')

let form2 = document.querySelector('#form2')
let sandwhich = document.querySelector('#form2')
let ingredients = document.querySelectorAll('#form2 .ingredients')

let form3 = document.querySelector('#form3');
let hairCutDate = document.querySelector('#date');
let hairCutter = document.querySelector('#hairCutter');
let shortHairRadio = document.querySelector('#shortHair');
let longHairRadio = document.querySelector('#longHair');
let hairLength = '';
let hairLengthLabel = document.querySelector('#hairLengthLabel');

let form4 = document.querySelector('#form4');
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let password2 = document.querySelector('#confirm-password');
let submit3 = document.querySelector('#submit3');


form1.addEventListener('submit', function(event){
    console.log(text)
    event.preventDefault();
    alert(text.value)

})

form2.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(ingredients.length)

    let newStr = [];
    
    ingredients.forEach(item => {
        if (item.checked) {
            newStr.push(`${item.id}`);
        }
    })
    
    alert(`Your sandwich contains: ${newStr.join(", ")}.`);
    
    ingredients.forEach(item => {
        item.checked = false;
    })
})


form3.addEventListener('submit', function(event){
    event.preventDefault();
    if(shortHairRadio.checked === true){
        hairLength = 'short';
    }
    else if(longHairRadio.checked === true){
        hairLength = 'long';
    }
    alert(`Haircut scheduled for ${hairCutDate.value}, with ${hairCutter.value}, for ${hairLength} hair.`);
    hairCutDate.value = '';
    hairCutter.value = '';
    longHairRadio.checked = true;
})



form4.addEventListener('submit', function (event) {
    event.preventDefault();
    if (password.value !== password2.value) {
        alert("Passwords do not match!");
        return;
    }
    alert(`Username: ${username.value} Email: ${email.value}`);
});







