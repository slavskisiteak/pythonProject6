from django.db import models

class Email(models.Model):
    name = models.CharField(max_length=90, verbose_name="Name")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Created')
    email = models.EmailField(max_length=90, verbose_name="Email")
    phone = models.CharField(max_length=15, verbose_name="Phone")
    other_question = models.CharField(max_length=200, verbose_name="Other Question", null=True)
    ip_address = models.TextField(max_length=100, null=True, verbose_name='IP Address')