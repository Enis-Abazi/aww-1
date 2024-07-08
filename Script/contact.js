const btn = document.getElementById('buttonMail');
btn.style.outline = 'none';
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'service_vy7934d';
    const templateID = 'template_9acapue';

    const successEmailSent = document.querySelector(".succesSent");
    const successAudio = document.querySelector("audio");
    const overlay = document.querySelector(".overlay");
    const error = document.querySelector('.errorSent');


    emailjs.sendForm(serviceID, templateID, this)
        .then((response) => {
            if (response.status === 200) {
                btn.value = 'Send Email';
                successEmailSent.style.display = 'block';
                overlay.style.display = 'block';
                successAudio.play();

                setTimeout(() => {
                    successEmailSent.style.display = 'none';
                    overlay.style.display = 'none';
                }, 1000);
                contactValidate();
            }
        }, (err) => {
            btn.value = 'Send Email';
            error.style.display = 'block';
        });

});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) {
        btn.click();
    }
});

function contactValidate() {
    const nameElement = document.getElementById("from_name");
    const lastnameElement = document.getElementById("lastName");
    const emailElement = document.getElementById("email_id");
    const numberElement = document.getElementById("number_id");
    const messageElement = document.getElementById("message");

    const name = nameElement.value;
    const lastname = lastnameElement.value;
    const email = emailElement.value;
    const number = numberElement.value;
    const message = messageElement.value;

    if (name || lastname || email || number || message) {
        nameElement.value = '';
        lastnameElement.value = '';
        emailElement.value = '';
        numberElement.value = '';
        messageElement.value = '';
        console.log(name, lastname, email, number, message);
    } else {
        console.log("fail");
    }
}