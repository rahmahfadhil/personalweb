import nc from 'next-connect'
import cors from 'cors'
import mailgun from 'mailgun-js'


const mail=mailgun({
    apiKey:process.env.mailgunKey,
    domain:process.env.mailgunDomain
})
const handler =nc().use().post(async (req, res) =>{
    const data={
        from:`${req.body.name}<${process.env.mailFrom}>`,
        to:process.env.milTo,
        subject:req.body.subject,
        text:req.body.message,
        "h:Reply-to":req.body.email,
        
    }
    
    mail.messages().send(data,(error,body) => {
        res.json(body);
    })
})







export default handler;

