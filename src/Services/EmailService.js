/* eslint no-undef: 0 */

const EmailService = {
    sendEmail (postData) {
        var templateParams = {
            from_name: postData.from_name,
            from_email: postData.from_email,
            message_html: postData.message
        };

        var serviceId = 'default_service';
        var templateId = 'template_Ay6vtua1';
        return emailjs
            .send(serviceId, templateId, templateParams)
            .then((data) => {
                if (data.status === 200) {
                    console.log('EMAIL SENT');
                    return true;
                }
            })
            .catch((error) => {
                return error;
            });
    }
};

export default EmailService;
