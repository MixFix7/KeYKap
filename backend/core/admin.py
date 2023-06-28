from django.contrib import admin
from .models import *


class ProductImageAdmin(admin.StackedInline):
    model = ProductPhoto


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductImageAdmin]

    class Meta:
        model = Product


@admin.register(ProductPhoto)
class ProductImageAdmin(admin.ModelAdmin):
    pass


admin.site.register(Category)
admin.site.register(ProductSpecs)
admin.site.register(KeyboardSpecs)
admin.site.register(SwitchesSpecs)
