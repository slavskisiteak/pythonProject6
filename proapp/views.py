from django.shortcuts import render, redirect
from .forms import EmailForm
from .models import Email
import requests




def send_to_telegram(message):
    bot_token = '6220309152:AAFyWbAKVtPiA_t8rcqGgL2ZLBsiCllt13s'
    chat_id = '-999554211'
    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    params = {
        'chat_id': chat_id,
        'text': message
    }

    response = requests.post(url, data=params)
    if response.status_code != 200:
        print('Ошибка при отправке сообщения в телеграм-бот')



#def get_client_ip(request):
#    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
#    if x_forwarded_for:
#        ip = x_forwarded_for.split(',')[0]
#    else:
#        ip = request.META.get('REMOTE_ADDR')
#    return ip




def register_form(request):
    form = EmailForm(request.POST or None)
    page_params = {
        'form': form,
    }
    if form.is_bound and form.is_valid():
        obj = form.save(commit=False)
        #obj.ip_address = get_client_ip(request)
        obj.save()
        message = f"Новый зарегистрированный пользователь \nИмя: {form.cleaned_data['name']}\nТелефон: {form.cleaned_data['phone']}\nEmail: {form.cleaned_data['email']}"
        send_to_telegram(message)
        return redirect('/')
    return render(request, 'form.html', page_params)


def get_homepage(request):
    return render(request, 'index.html')


def child(request):
    return render(request, "children.html")

def about_us(request):
    return render(request, "about-us.html")