// window.onload = function() {
//     const forms = document.forms;
//    forms[0].name.value = "please enter your name"
// };

// function confirmSubmit() {
//     const forms = document.forms;
//     forms[0].onsubmit = ()=>{
//         const name = forms[0].name.value;
//         if(confirm(name+" êtes-vous sûr de vouloir envoyer ?")){
//         }else{
//             alert("Annuler");
//             return false;
//         }
//     }
    
// };

function emailValidation(){
    const form = document.forms;
    form[0].email_confirm.addEventListener('input',()=>{
        const email = form[0].email.value;
        const emailValid = form[0].email_confirm.value;
        
        const elt = document.getElementsByTagName('tbody')[0];
        const place = elt.lastElementChild;
        if(email !== emailValid){
            form[0].email_confirm.style.backgroundColor='rgba(230,169,171,.5)';
            const element = document.createElement('p');
            element.innerText = "Les e-mails ne correspondent pas";
            element.classList.add('alertText');
            if(!elt.contains(element)){
                elt.appendChild(element);
                elt.insertBefore(element,place);
            }
            setTimeout(function(){
                elt.removeChild(element);
            },3000);}else{
                form[0].email_confirm.style.backgroundColor='';
            }
    });
    form[0].addEventListener('submit',e=>{
        const email = form[0].email.value;
        const emailValid = form[0].email_confirm.value;
        if(email !== emailValid){
            const element = document.createElement('p');
            element.innerText = "Les e-mails ne correspondent pas";
            element.classList.add('alert');
            if(!form[0].contains(element)){
                form[0].appendChild(element);
            }
            setTimeout(function(){
                form[0].removeChild(element);
            },3000);
            e.preventDefault();
        }else{
            if(confirm(" êtes-vous sûr de vouloir envoyer ?")){
                form.submit();
            }else{
                alert("Annuler");
                return false;
            }
        }
    })
}

//window.onload = confirmSubmit;
window.onload = emailValidation;