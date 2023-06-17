from django.contrib import admin
from .models import Email

class PersonAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at', 'email', 'phone', 'other_question', 'ip_address')

admin.site.register(Email, PersonAdmin)