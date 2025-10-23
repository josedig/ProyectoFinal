/*================== mixitub filter ===================*/
let  mixerProjects = mixitup('.projects__container', {
    selectors: {
       target: '.project__item',
    },
    animation: {
       duration: 300,
    },
});

/* Active Work */
const linkWork = document.querySelectorAll('.category__btn')

function activeWork() {
    linkwork.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach((a) => a.addEventListener('click' , activeWork));

/*=============== testimonial swiper =================*/
var testiSwiper = new Swiper('.testimonial__container', {
   loop: true,
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
    },
   pagination: {
     el: '.swiper-pagination',
    },
    mousewheel: true,
    keyboard: true,
});

/*================== contact form ===================*/
const contactform = document.getElementById('contact-form'),
 contactName = document.getElementById('contact-name'),
 contactEmail = document.getElementById('contact-email'),
 Message = document.getElementById('message'),
 contactMessage = document.getElementById('contact-message');

 const sendEmail = (e) => {
    e.preventDefaul();
    // check if the field has a value
    if (contactName.value === '' || contactEmail.value === '' || Message.value === '' )
    {
        // add and remove color
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');
        // show message
        contactMessage.textContent = 'Escribe todos los mensajes de entrada';
    } else {
        // serviceID templateID - #form - publickey
        emailjs
        .sendform(
            'service_',
            'template_znknrjm',
            '#contact-form',
            'engpPb3MxTAfQze8C'
        )
        .then(
          ()  => {
            //show message and color, window + dot to open emoji 
            contactMessage.classList.add('color-light');
            contactMessage.textContent = 'Mensaje enviado ✔️ ';

            //remove mensaje after 5 seconds
            setTimeout(()  => {
                contactMessage.textContent = '';
            }, 5000);
         },
           (error) => {
            alert('OOPs! SOMETHING WENT WRONG...', error);
          }
       );

       //clean input fields
       contactName.value = '';
       contactEmail.value = '';
       Message.value = '';
    }
};

contactform.addEventListener('submit', sendEmail);