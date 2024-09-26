const para = document.querySelector('.paraBold')
const button = document.querySelector('.paraButton')

function boldTransform(){
    para.classList.toggle('bold')
}

button.addEventListener('click', boldTransform)