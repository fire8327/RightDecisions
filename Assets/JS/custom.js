/*jshint esnext: true */
/* navigation */
$("#toggler").click(()=>{
  $("#menu").toggleClass("max-lg:-translate-y-full")
  $("#menu").toggleClass("max-lg:top-0")
  $("#menu").toggleClass("max-lg:top-full")
  $("#toggler").toggleClass("h-5")
  $("#toggler > :nth-child(1)").toggleClass("rotate-45")
  $("#toggler > :nth-child(2)").toggleClass("opacity-0")
  $("#toggler > :nth-child(3)").toggleClass("-rotate-45")
  $("body").toggleClass("overflow-hidden")
  $("#overlay").toggleClass("hidden")
})

/* links */
$('a[href^="#"]').on('click', function() {
  $("body").removeClass("overflow-hidden")
  let href = $(this).attr('href')
    $('html, body').animate({
        scrollTop: $(href).offset().top - 0
    })
  return false
});

/* validate */
const validate = new JustValidate('#form', {
  validateBeforeSubmitting: true,
});
function Validate() {
  validate
  .addField('#number', [
      {
          rule: 'required',
          errorMessage: 'Поле Номер телефона обязательно к заполнению',
      }  ,    
      {
          rule: 'customRegexp',
          value: /[0-9]/,      
          errorMessage: 'Поле Номер телефона должно содержать только цифры',
      },
      {
        rule: 'minLength',
        value: 11,      
        errorMessage: 'Поле Номер телефона должно иметь минимум 11 символов',
      }
  ])
  .addField('#name', [
      {
          rule: 'required',
          errorMessage: 'Поле Имя обязательно к заполнению',
      },
      {
        rule: 'customRegexp',
        value: /^[А-Я]+$/i,      
        errorMessage: 'Поле Имя должно содержать только кириллицу',
      },
      {
        rule: 'minLength',
        value: 2,      
        errorMessage: 'Поле Имя должно иметь минимум 2 символа',
      }
  ]);
}
Validate()

/* sumbit */
const token = "5900500643:AAHxmzfAniRFII_82Tj9o2kzmLNRZFM1Ikg"
const chat_id = "-4059528802"
const url = `https://api.telegram.org/bot${token}/sendMessage`
$("#form").submit((e)=> {
  e.preventDefault();
  if(validate.isValid) {
    let message = `<b>Заявка с сайта!</b>\n`;
    message += `<b>Имя:</b> ${$("#name").val()}\n`;
    message += `<b>Номер телефона:</b> ${$("#number").val()}\n`;

    console.log(message);

    axios.post(url, {
        chat_id: chat_id,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        $("#form")[0].reset()
        $("#success").show(500)
        setTimeout(() => {
            $("#success").hide(500)
        }, 3000);
    })
    .catch((err) => {
        console.warn(err);
    })
    .finally(() => {
        console.log('Конец');
    })       
}     
})