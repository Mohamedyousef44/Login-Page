
let signUp = document.getElementById('signUp')
let signUpInputs = document.querySelectorAll('input');
let form = document.getElementById('form');


signUp.addEventListener('click' , ()=>{
    let emailHelp = document.getElementById('emailHelp')
    let username = signUpInputs[0];
    let email = signUpInputs[1];
    let password = signUpInputs[2];
    let repass = signUpInputs[3];

    if(username.value != "" && email.vaue != "" && password.value != ""){
            if(password.value === repass.value){
                localStorage.setItem('username' , username.value )
                localStorage.setItem('email' , email.value )
                localStorage.setItem('password' , password.value )
                emailHelp.style.display = 'none'

            if(localStorage.getItem('password') == password.value ){
                form.setAttribute('method', 'get')
                form.setAttribute('action', '/index.html')
                // window.open('./index.html')
            }
                
             }else{

                form.onsubmit = function(){
                    emailHelp.style.display = 'block';
                    return false;
                }  
            }
    }
})
