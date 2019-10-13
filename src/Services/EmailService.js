const EmailService = {
    sendEmail(postData){
        var template_params = {
            "from_name": postData.from_name,
            "from_email": postData.from_email,
            "message_html": postData.message
        }
         
        var service_id = "default_service";
        var template_id = "template_Ay6vtua1";
        return emailjs.send(service_id, template_id, template_params).then(data => {
            if(data.status === 200){
                console.log("EMAIL SENT");
                return true;
            }
        }).catch(error =>{
            return error;
        });
    }
}

export default EmailService;


