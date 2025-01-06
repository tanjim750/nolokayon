from django.core.mail import EmailMultiAlternatives
from django.utils.html import strip_tags
from django.template.loader import render_to_string

def mail_sender(
        context:dict,
        to_mails:list,
        subject:str,
        from_mail:str,
        template:str
        ):

    email_from = from_mail
    recipient_list = to_mails


    html_template = render_to_string(template,context)
    message = strip_tags(html_template)

    email = EmailMultiAlternatives(
            subject,
            message,
            email_from,
            recipient_list
    )
    email.attach_alternative(html_template, 'text/html')
    email.send()