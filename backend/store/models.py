from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True)
    image = models.ImageField(upload_to='categories/%Y/%m/%d', blank=True, null=True)

    class Meta:
        verbose_name_plural = 'categories'

    def __str__(self):
        return self.name

class Product(models.Model):
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True)
    description = models.TextField(blank=True)
    original_price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    selling_price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    discount_percentage = models.PositiveIntegerField(blank=True, null=True, help_text="Automatically calculated")
    image = models.ImageField(upload_to='products/%Y/%m/%d', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']

    def save(self, *args, **kwargs):
        if self.original_price and self.selling_price and self.original_price > self.selling_price:
            discount = ((self.original_price - self.selling_price) / self.original_price) * 100
            self.discount_percentage = round(discount)
        else:
            self.discount_percentage = 0
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class Specialty(models.Model):
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to='specialties/%Y/%m/%d', blank=True, null=True)
    
    class Meta:
        verbose_name_plural = 'specialties'

    def __str__(self):
        return self.name

class GalleryImage(models.Model):
    category = models.ForeignKey(Category, related_name='gallery_images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='gallery/%Y/%m/%d')
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Gallery Image ({self.category.name})"
