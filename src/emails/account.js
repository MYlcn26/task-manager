const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail =(email, name) => {
    sgMail.send({
        to: email,
        from: 'metehanmustafayalcin@gmail.com',
        subject: 'Thanks for joining in',
        text: 'welcome to task manager, ' + name + '.'
    })
}
const sendCancelationEmail =(email, name) => {
    sgMail.send({
        to: email,
        from: 'metehanmustafayalcin@gmail.com',
        subject: 'We will miss you..',
        text: 'Thanks for using to task manager, ' + name + '.'
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}