const validateEmail = (email) => {
  let reg = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/
  return reg.test(email)
}

document.querySelector('.contact__btn').addEventListener('click', ()=>{
  const email = document.querySelector('#email').value
  const valid = validateEmail(email)
  if(!valid) document.querySelector('.error-group').style.display="block"
  else{
    document.querySelector('#email').value = ''
    document.querySelector('.error-group').style.display="none"
  } 
})
