from rest_framework.serializers import ModelSerializer

from app import models

class HeroSerializer(ModelSerializer):
    class Meta:
        model = models.Hero
        fields = "__all__" 
    

class HeaderSerializer(ModelSerializer):
    class Meta:
        model = models.Header
        fields = "__all__" 
    

class BannerSerializer(ModelSerializer):
    class Meta:
        model = models.Banner
        fields = "__all__" 

class AboutSerializer(ModelSerializer):
    class Meta:
        model = models.About
        fields = "__all__" 

class ContactSerializer(ModelSerializer):
    class Meta:
        model = models.Contact
        fields = "__all__" 

class CategorySerializer(ModelSerializer):
    class Meta:
        model = models.Category
        fields = ['id', 'name']  # Include all the fields you need

class CouponSerializer(ModelSerializer):
    class Meta:
        model = models.Coupon
        fields = "__all__" 

# Serializer for ProductOtherDetails
class ProductOtherDetailsSerializer(ModelSerializer):
    class Meta:
        model = models.ProductOtherDetails
        fields = ['id', 'name', 'details'] 


class ProductSerializer(ModelSerializer):
    category = CategorySerializer()  # Use the CategorySerializer
    other_details = ProductOtherDetailsSerializer()

    class Meta:
        model = models.Product
        fields = "__all__" 
    
    