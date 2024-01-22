
   // burgermenu //

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
  });

  

 
   //kontaktformular//

 const contactForm = document.querySelector('#contactForm');


 const onSubmitHandler = (e) => {

    e.preventDefault();

  
    const {name, email, message} = e.target.elements

    console.log(name.value, email.value, message.value)
 

    if(name.value !== "") {

      document.querySelector('.send').classList.toggle('succes');
    }

 }

 contactForm.addEventListener('submit', onSubmitHandler)
 console.log(contactForm)