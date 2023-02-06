
let loginBtn = document.getElementById('loginBtn');
let links = document.querySelectorAll('a')

console.log(window.location.pathname)


// setting id for links using js 

links[0].id = 'forget' ;
links[1].id = 'sign' ;

// styling login btn

loginBtn.classList.add('btn');
loginBtn.classList.add('btn-primary');
loginBtn.classList.add('w-100');
loginBtn.classList.add('mb-4');







// control the login behavior for wrong and right trials 

loginBtn.addEventListener('click' , ()=>{

    let email = document.getElementById('floatingInput');
    let password = document.getElementById('floatingPassword');
    let form = document.getElementById('form');

    if(email.value == localStorage.getItem('email') && password.value == localStorage.getItem('password')){
        // window.open('./src/login.html')
        form.setAttribute('method', 'get')
        form.setAttribute('action' , '/src/login.html')
    }else{
        
        if(email.value != "" && password.value != ""){
            alert("wrong password")

            password.value = "";
        }
        
    }
})


// control links

links.forEach(element =>{
    element.addEventListener('click' ,(e)=>{

        if(e.currentTarget.id == 'forget'){

            e.currentTarget.setAttribute('href' , './src/forgetPass.html')
            e.currentTarget.setAttribute('target' , '_blank')

        }else{

            links[1].setAttribute('href' ,'./src/signup.html')
            links[1].setAttribute('target' , '_blank')
        }
    })
})





