let installKey = document.querySelector('#install_key');
let generate = document.querySelector('#generate');
let result = document.querySelector('#result');
let product = document.querySelector('#product');



generate.addEventListener('click', function() {
    console.log(product.value)
    let InstallKey = installKey.value.split('');

    if(product.value == "softoos3") {
        InstallKey.forEach(element => {
            if(
            element == '0' || 
            element == '1' || 
            element == '2' || 
            element == '3' || 
            element == '4' || 
            element == '5' || 
            element == '6' || 
            element == '7' || 
            element == '8' ||
            element == '9' ||
            element == '-') {
                let verifyKey = InstallKey.reverse().join('')
                result.innerHTML = `Ваш ключ подтверждения: <br> 330CS-${verifyKey}`
                result.style.display = "block";
            }
            else {
                result.innerHTML = 'Неверный ключ установки';
                result.style.display = "block";
            }
        });
    }
    if(product.value == "softodia") {
        InstallKey.forEach(element => {
            if(
            element == 'A' || 
            element == 'B' || 
            element == 'C' || 
            element == 'D' || 
            element == 'E' || 
            element == '5' || 
            element == '6' || 
            element == '7' || 
            element == '8' ||
            element == '9' ||
            element == '-') {
                let verifyKey = InstallKey.reverse().join('')
                console.log(verifyKey)
                result.innerHTML = `Ваш ключ подтверждения: <br> A10CS-${verifyKey}`
                result.style.display = "block";
            }
            else {
                result.innerHTML = 'Неверный ключ установки';
                result.style.display = "block";
            }
        });
    }
});