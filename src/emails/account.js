const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'scs3.laptop@gmail.com',
        subject: 'Welcome to Tasker!',
        text: `Hello ${name}! Thank you for signing up! Let me know what you think of Tasker so far.`
    })
}

const sendCancelMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'scs3.laptop@gmail.com',
        subject: 'We are sad to see you go!',
        text: `Hello ${name}! Your account has been deleted successfully. Before bidding adieu, do tell us how we can improve!`
    })
}


module.exports = {
    sendWelcomeMail,
    sendCancelMail
}

