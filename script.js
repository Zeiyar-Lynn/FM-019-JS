const email = document.querySelector('input[type="email"]');
const notify = document.getElementById('notify');
const errText = document.querySelector('form p');

notify.onclick = e => {
   e.preventDefault();
   if (email.value == "")
      errOr("Email must not be empty", email.parentElement);
   else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)))
      errOr("Please provide a valid email address", email.parentElement);
   else 
      email.parentElement.classList.remove('error');
}

function errOr(msg, ctr) {
   errText.innerText = msg;
   ctr.classList.add('error');
}