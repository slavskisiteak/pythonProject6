from django import forms
from .models import Email

class EmailForm(forms.ModelForm):
    class Meta:
        model = Email
        fields = ['name', 'email', 'phone', 'other_question']
        labels = {
            'name': 'Имя',
            'email': 'Email',
            'phone': 'Телефон',
            'other_question': 'Другой вопрос'
        }
        widgets = {
            'name': forms.TextInput(attrs={'placeholder': 'Введите ваше имя'}),
            'email': forms.EmailInput(attrs={'placeholder': 'Введите ваш email'}),
            'phone': forms.TextInput(attrs={'placeholder': 'Введите ваш номер телефона'}),
            'other_question': forms.TextInput(attrs={'placeholder': 'Введите ваш вопрос'})
        }
