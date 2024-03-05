// 175 Nodemailer
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Daum', 
    host: 'smtp.daum.net',
    port: 587,
    secure:true,
    auth: {
        user: 'email address',
        pass:'password'
    },
});

//setup email data with unicode symbols
const mailOptions = {
    from: '',//sender address
    to:'', //list of receivers
    subject:'Hello attachment~~', //Subject line
    text: 'hi~~~^^\n Today is rainny day',//plain text body
    //html body
    html: '<h1>Hello Attachment</h1><a href="http://www.infopub.co.kr">' + '<img src="http://www.infopub.co.kr/pdspool/main_top/2016-11-02.jpg"/></p></a>',

    // attachment configuration
    attachments: [
        {
            filename: 'chicken.csv',
            path: './node200_project/express/chicken.csv'
        },
    ],
};

//send mail with defined transport object
transporter.sendMail(mailOptions, (err, info)=> {
    if(err){
        console.log(err);
    }else{
        console.log(`Message sent: ${info.response}`);
        console.log(mailOptions.attachments);
    }
    transporter.close();
})