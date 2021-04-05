$(document).ready(() =>{

    const slickOptions = {
        autoplay:true,
        autoplaySpeed: 3000,
        dots: false,
        prevArrow:`<button type="button" class="slick-prev slider-prev">Previous</button>;`,
        nextArrow:`<button type="button" class="slick-next slider-next">Previous</button>;`,
        
    };

  $(".slider-principal").slick(slickOptions);

  
  $('button-enviar').on('click', () =>{
    const email= $('#email').val();
    Email.send({
    Host : "smtp.gmail.com",
    Username : "nelson delva",
    Password : "nelson3design",
    To : "mandeart2@gmail.com",
    From : email,
    Subject : "por favor me adicione na nwesletter",
    Body : `Ola, eu gostaria de ser adicionado na nwesletter do site. Meu email é ${email}, obrigado.`,
}).then(
  message => alert(message)
);
  });


});