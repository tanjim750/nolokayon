from django.db import models
from django.utils.text import slugify
from django.utils import timezone
from ckeditor.fields import RichTextField

from datetime import datetime
import random

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

class Visitor(models.Model):
    visitor_id = models.CharField(max_length=100)
    fname = models.CharField(max_length=255, blank=True, null=True)
    lname = models.CharField(max_length=255, blank=True, null=True)
    number = models.CharField(max_length=255, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    address1 = models.TextField(blank=True, null=True)
    address2 = models.TextField(blank=True, null=True)
    district = models.TextField(blank=True, null=True)
    upazila = models.TextField(blank=True, null=True)
    visits = models.IntegerField(default=1)

class Category(models.Model):
    name = models.CharField(max_length=1000)
    slug = models.SlugField(max_length=255, unique=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super(Category, self).save(*args, **kwargs)
    
    def __str__(self):
        return self.name

class Coupon(models.Model):
    code = models.CharField(max_length=50, unique=True)
    description = models.TextField(blank=True, null=True)
    discount_percentage = models.DecimalField(max_digits=5, decimal_places=2)
    valid_from = models.DateTimeField(auto_now_add=True)
    valid_until = models.DateTimeField()
    is_active = models.BooleanField(default=True)
    category = models.ForeignKey(
        Category, 
        on_delete=models.CASCADE, 
        null=True, 
        blank=True, 
        related_name='coupons', 
    )

    def is_valid(self):
        """Checks if the coupon is active and within the valid date range."""
        now = datetime.now()
        return self.is_active and self.valid_from <= now <= self.valid_until

    def __str__(self):
        return f"{self.code} - {'All Products' if not self.category else self.category.name}"
    
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
    description = RichTextField()
    hits = models.IntegerField(default=0)

    price = models.DecimalField(max_digits=10, decimal_places=2)
    discount_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    delivery_cost = models.FloatField(default=70)
    stock_quantity = models.PositiveIntegerField(default=0)
    stock_status = models.CharField(max_length=20, choices=[('in_stock', 'In Stock'), ('out_of_stock', 'Out of Stock')], default='in_stock')

    image = models.TextField(blank=True, null=True)
    gallery = models.JSONField(blank=True, null=True)  # Store multiple image URLs as JSON

    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='draft')

    other_details = models.ForeignKey(ProductOtherDetails, related_name="other_details", blank=True, null=True, on_delete=models.SET_NULL)
    facebook = models.TextField(blank=True, null=True)
    instagram = models.TextField(blank=True, null=True)
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

class Checkout(models.Model):
    DELIVERY_STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('shipped', 'Shipped'),
        ('in_transit', 'In Transit'),
        ('delivered', 'Delivered'),
        ('cancelled', 'Cancelled'),
    ]

    order_id = models.CharField(max_length=10,unique=True)
    order_note = models.TextField(blank=True, null=True)
    visitor = models.ForeignKey(Visitor, on_delete=models.CASCADE)
    other_details = models.CharField(max_length=255, blank=True, null=True)

    payment_status = models.CharField(
        max_length=20,
        choices=[
            ('Cash on Delivery', 'Cash on Delivery'),
            ('completed', 'Completed'),
            ('cancelled', 'Cancelled'),
            ('failed', 'Failed'),
        ],
        default='Cash on Delivery',
    )
    delivery_status = models.CharField(
        max_length=20,
        choices=DELIVERY_STATUS_CHOICES,
        default='pending',
    )
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    discount_applied = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    quantity = models.IntegerField(default=1)
    final_price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # Relations
    coupon = models.ForeignKey(
        Coupon,
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
        related_name='checkouts',
    )

    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    def apply_coupon(self):
        """Calculate discount and apply the coupon if valid."""
        if self.coupon and self.coupon.is_active and self.coupon.valid_until > timezone.now():
            product_price = self.product.discount_price if self.product.discount_price else self.product.price

            if self.coupon.category:
                discount = 0
                # Apply discount only to products in the coupon's category
                if self.coupon.category == self.product.category:
                    discount = (product_price * self.coupon.discount_percentage / 100)

            else:
                discount = (product_price * self.coupon.discount_percentage / 100)

            self.discount_applied = discount*self.quantity
            self.final_price = self.total_price - float(discount*self.quantity)
        else:
            self.discount_applied = 0
            self.final_price = self.total_price
        self.save()

    def save(self, *args, **kwargs):
        if not self.order_id:
            self.order_id = self.generate_unique_order_code()
        super().save(*args, **kwargs)

    def generate_unique_order_code(self):
        while True:
            code = random.randint(1000000, 9999999)
            if not Checkout.objects.filter(order_id=code).exists():
                return str(code)

    def __str__(self):
        return f"Checkout #{self.id} - {self.visitor.fname}"

class CheckoutItem(models.Model):
    visitor = models.ForeignKey(Visitor, on_delete=models.CASCADE)
    checkout = models.ForeignKey(Checkout, on_delete=models.CASCADE, related_name='items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

    def total_price(self):
        """Calculate total price for this item."""
        return self.quantity * self.price

    def __str__(self):
        return f"{self.product.name} (x{self.quantity})"
