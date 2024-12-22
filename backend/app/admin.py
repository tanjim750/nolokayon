from django.contrib import admin
from . import models
# Register your models here.

admin.site.register(models.Header)
admin.site.register(models.Hero)
admin.site.register(models.Banner)
admin.site.register(models.Category)
admin.site.register(models.Product)
admin.site.register(models.ProductOtherDetails)