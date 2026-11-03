from django.contrib import admin
from unfold.admin import ModelAdmin
from .models import Category, Product, Specialty, GalleryImage, Review

@admin.register(Category)
class CategoryAdmin(ModelAdmin):
    list_display = ['name', 'slug']
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ['name']

@admin.register(Product)
class ProductAdmin(ModelAdmin):
    list_display = ['name', 'category', 'original_price', 'selling_price', 'discount_percentage', 'created_at']
    list_filter = ['category', 'created_at']
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ['name', 'description']
    readonly_fields = ['discount_percentage']

@admin.register(Specialty)
class SpecialtyAdmin(ModelAdmin):
    list_display = ['name']
    search_fields = ['name']

@admin.register(GalleryImage)
class GalleryImageAdmin(ModelAdmin):
    list_display = ['category', 'created_at']
    list_filter = ['category', 'created_at']

@admin.register(Review)
class ReviewAdmin(ModelAdmin):
    list_display = ['name', 'is_approved', 'created_at']
    list_filter = ['is_approved', 'created_at']
    search_fields = ['name', 'text']
