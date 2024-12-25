from django.db import models
from django.utils.text import slugify

# Create your models here.
class Header(models.Model):
    label1 = models.CharField(max_length=1000000)
    label2 = models.CharField(max_length=1000000)
    value1 = models.CharField(max_length=1000000)
    value2 = models.CharField(max_length=1000000)
    logo = models.TextField()

class Hero(models.Model):
    top = models.TextField()
    title = models.TextField()

    btn_text = models.TextField()
    btn_link = models.TextField()

    image = models.TextField()


class Banner(models.Model):
    top = models.TextField()
    title = models.TextField()
    bottom = models.TextField()

    image = models.TextField()
    link = models.TextField()


class About(models.Model):
    heading = models.TextField()
    image = models.TextField()
    title = models.TextField()
    description = models.TextField()
    message = models.TextField()

    def __str__(self):
        return str(self.id)
    

class Contact(models.Model):
    heading = models.TextField()
    map = models.TextField()
    title = models.TextField()
    description = models.TextField()
    address = models.TextField()
    email = models.JSONField()
    number = models.JSONField()
    facebook = models.TextField(blank=True, null=True)
    instagram = models.TextField(blank=True, null=True)

    def __str__(self):
        return str(self.id)

class Category(models.Model):
    name = models.CharField(max_length=1000)
    slug = models.SlugField(max_length=255, unique=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super(Category, self).save(*args, **kwargs)
    
    def __str__(self):
        return self.name

class ProductOtherDetails(models.Model):
    name = models.CharField(max_length=1000)
    details = models.JSONField()

class Product(models.Model):
    """Main Product Model."""
    STATUS_CHOICES = [
        ('draft', 'Draft'),
        ('published', 'Published'),
        ('archived', 'Archived'),
    ]

    name = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=255, unique=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    description = models.TextField()
    hits = models.IntegerField(default=0)

    price = models.DecimalField(max_digits=10, decimal_places=2)
    discount_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    stock_quantity = models.PositiveIntegerField(default=0)
    stock_status = models.CharField(max_length=20, choices=[('in_stock', 'In Stock'), ('out_of_stock', 'Out of Stock')], default='in_stock')

    image = models.TextField(blank=True, null=True)
    gallery = models.JSONField(blank=True, null=True)  # Store multiple image URLs as JSON

    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='draft')

    other_details = models.ForeignKey(ProductOtherDetails, related_name="other_details", blank=True, null=True, on_delete=models.SET_NULL)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super(Product, self).save(*args, **kwargs)
    
    def __str__(self):
        return self.name
    
    @property
    def is_on_sale(self):
        """Check if the product is on sale."""
        return self.discount_price is not None and self.discount_price < self.price
    
    @property
    def final_price(self):
        """Calculate the effective price after discount."""
        if self.is_on_sale:
            return self.discount_price
        return self.price


