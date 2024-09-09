
const sgMail = require('@sendgrid/mail')

// API Key: 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

function sendEmail(name, email, tel, message){

    //sgMail.setApiKey('API Key')
    const msg = {
    to: `${email}`, // Change to your recipient
    from: 'truefanboutique@gmail.com', // Change to your verified sender
    subject: 'Gracias por mandar mensaje a TrueFan Boutique',
    text: `${message}`,
    html: `<strong>Tu mensaje es muy importante ${name} para nosotros, mantente al pendiente para recibir una respuesta a tus dudas. </strong>
          <br>
          <p> El mensaje recibido fue el siguiente:</p>
          <ul>
          <li> Nombre: ${name}</li>
          <li> Correo: ${email}</li>
          <li> Telefono: ${tel}</li>
          <li> Mensaje: ${message}</li>
          </ul>
          <p> Tendrá respuesta en 2 a 3 días hábiles, nuestros expertos están trabajando en el asunto</p>
    `,
    }
    sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })
}


sendEmail("José Manuel","rbalamcm@gmail.com","5617898251","Muchas por todos los productos en su página, queremos más contenido")

